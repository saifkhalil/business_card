import json
from django.utils import timezone

from django.db.models import Q
from django.shortcuts import render
from django.contrib import messages
from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from django.contrib.auth import get_user_model
from servicecenter.models import ServiceCenter
from servicecenter.forms import ServiceCenterRequestForm
from core.apis import (
    zoho_login,
    get_zoho_data
)

# Create your views here.

User = get_user_model()


def NewServiceCenterRequest(request):
    """
    Create new record of Service Center Request
    """

    data: list = []
    msg: str = ''
    data_value: dict = {}
    page_obj = None
    page_range = None
    user_requests = None
    response_status = 1
    page_number = request.GET.get('page', 1)
    all_orders_count = None
    form = None
    if request.method == 'POST':
        form = ServiceCenterRequestForm(request.POST)
        if form.is_valid():
            ServiceCenterRequestResult = form.save(commit=False)
            ServiceCenterRequestResult.user = User.objects.get(
                email=request.user.email)
            ServiceCenterRequestResult.created_by = User.objects.get(
                email=request.user.email)
            ServiceCenterRequestResult.save()
            messages.add_message(request, messages.SUCCESS,
                                 f'Service Center Request successfully submitted with id {ServiceCenterRequestResult.id}')
            return redirect('home')
        else:
            messages.add_message(
                request, messages.ERROR, 'Your request not submitted, please check the below error')
            form = form
            msg = 'POSTERROR'
            try:
                if request.user.is_authenticated:
                    user_requests = ServiceCenter.objects.filter(
                        user=request.user)
            except ServiceCenter.DoesNotExist:
                user_requests = None
            # try:
            #     data = SocialAccount.objects.get(user=request.user).extra_data
            #     data_response = get_zoho_data(email=request.user.email)
            #     response_status = data_response.get('response').get('status')
            #     if response_status == 0:
            #         result = data_response.get('response').get('result')
            #         data_value = list(result[0].values())[0][0]
            #     elif response_status == 1:
            #         messsage = data_response.get(
            #             'response').get('errors').get('message')
            #         messages.add_message(request, messages.ERROR, messsage)
            # except Exception as e:
            #     messages.add_message(request, messages.ERROR, e)
    elif request.method == 'GET':
        try:
            if request.user.is_authenticated:
                all_orders_count = ServiceCenter.objects.filter(
                    status='Pending').count()
        except ServiceCenter.DoesNotExist:
            all_orders_count = None
        try:
            if request.user.is_authenticated:
                user_requests = ServiceCenter.objects.filter(
                    user=request.user).order_by('-id')
                paginator = Paginator(user_requests, 10)
                page_number = request.GET.get('page', 1)
                page_obj = paginator.get_page(page_number)
                page_range = paginator.get_elided_page_range(
                    number=page_number, on_each_side=2, on_ends=2)
        except ServiceCenter.DoesNotExist:
            user_requests = None
        # try:
        #     if request.user.is_authenticated:
        #         data = ServiceCenter.objects.get(user=request.user).extra_data
        #         data_response = get_zoho_data(email=request.user.email)
        #         response_status = data_response.get('response').get('status')
        #         if response_status == 0:
        #             result = data_response.get('response').get('result')
        #             data_value = list(result[0].values())[0][0]
        #         elif response_status == 1:
        #             messsage = f"Zoho: {data_response.get('response').get('errors').get('message')}"
        #             messages.add_message(request, messages.ERROR, messsage)
        # except Exception as e:
        #     messages.add_message(request, messages.ERROR, e)
    context = {
        'data': data,
        'msg': msg,
        'response_status': response_status,
        'data_response': data_value,
        'page_obj': page_obj,
        'page_range': page_range,
        'form': form,
        'allorderscount': all_orders_count,
    }
    return render(request, 'servicecenter/NewServiceCenterRequest.html', context)


def request_list(request):
    if request.method == 'GET':
        if request.GET.get('status'):
            status = request.GET.get('status')
            request.session['status'] = status
        else:
            status = ""
            request.session['status'] = status
        if request.GET.get('keywords'):
            keywords = request.GET.get('keywords')
            request.session['keywords'] = keywords
        else:
            keywords = ""
            request.session['keywords'] = keywords
        if request.GET.get('number_of_records'):
            number_of_records = request.GET.get('number_of_records')
            try:
                request.session['number_of_records'] = int(number_of_records)
            except:
                request.session['number_of_records'] = 50
        if request.GET.get('clear'):
            if request.session.get('status'):
                del request.session['status']
            if request.session.get('keywords'):
                del request.session['keywords']
            if request.session.get('number_of_records'):
                del request.session['number_of_records']
    status = request.session.get('status')
    keywords = request.session.get('keywords')
    number_of_records = request.session.get('number_of_records')
    request_list3 = ServiceCenter.objects.all()
    total_requests = request_list3.count()
    Approved_requests = request_list3.filter(status='Approved').count()
    InProduction_requests = request_list3.filter(
        status='In Production').count()
    Done_requests = request_list3.filter(status='Done').count()
    request_list = ServiceCenter.objects.all()
    request_list1 = []
    if number_of_records:
        number_of_records = int(number_of_records)
    else:
        number_of_records = 10
    if status:
        request_list = request_list.filter(status=status)
    if keywords:
        query_words = str(keywords).split(" ")  # Get the word in a list
        query = Q()
        for w in query_words:
            if len(w) < 2:  # Min length
                query_words.remove(w)
        for word in query_words:
            query = query | Q(service_center_name__icontains=word) | Q(
                full_address__icontains=word)

        request_list = request_list.filter(query)
    else:
        request_list = request_list.order_by('-created_at')
    session = [keywords, status, number_of_records]
    # Show 25 contacts per page.
    paginator = Paginator(request_list, number_of_records)
    page_number = request.GET.get('page', 1)
    page_obj = paginator.get_page(page_number)
    page_range = paginator.get_elided_page_range(
        number=page_number, on_each_side=2, on_ends=2)
    context = {
        'session': json.dumps(session),
        'page_obj': page_obj,
        'page_range': page_range,
        'total_requests': total_requests,
        'Approved_requests': Approved_requests,
        'InProduction_requests': InProduction_requests,
        'Done_requests': Done_requests,
        'requests_count': request_list.count(),
    }
    return render(request, 'servicecenter/request_list.html', context)


def ServiceCenterDetails(request, brid):
    user = request.user
    br = ServiceCenter.objects.get(id=brid)
    if user == br.created_by or user.is_superuser or user.is_servicecenter_admin:
        context = {
            'object': br,
        }
        return render(request, 'servicecenter/ServiceCenterDetails.html', context)
    else:
        return redirect('must_authenticate')


def CenterRequestApprove(request, id):
    try:
        SelectedServiceRequest = ServiceCenter.objects.get(id=id)
    except ServiceCenter.DoesNotExist:
        messages.add_message(request, messages.ERROR,
                             "Service Request Not found")
        return redirect('service_requests')
    if request.user.is_superuser or request.user.is_servicecenter_admin:
        SelectedServiceRequest = ServiceCenter.objects.filter(id=id)
        SelectedServiceRequest.update(status='Approved')
        SelectedServiceRequest.update(status_change_at=timezone.now())
        SelectedServiceRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS,
                             'Order Request Updated')
    else:
        messages.add_message(request, messages.ERROR,
                             "You don't have Permission")
    return redirect('service_requests')


def CenterRequestReject(request, id):
    try:
        SelectedServiceRequest = ServiceCenter.objects.get(id=id)
    except ServiceCenter.DoesNotExist:
        messages.add_message(request, messages.ERROR,
                             "Service Request Not found")
        return redirect('service_requests')
    if request.user.is_superuser or request.user.is_servicecenter_admin:
        SelectedServiceRequest = ServiceCenter.objects.filter(id=id)
        SelectedServiceRequest.update(status='Reject')
        SelectedServiceRequest.update(status_change_at=timezone.now())
        SelectedServiceRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS,
                             'Order Request Updated')
    else:
        messages.add_message(request, messages.ERROR,
                             "You don't have Permission")
    return redirect('service_requests')


def CenterRequestInProduction(request, id):
    try:
        SelectedServiceRequest = ServiceCenter.objects.get(id=id)
    except ServiceCenter.DoesNotExist:
        messages.add_message(request, messages.ERROR,
                             "Service Request Not found")
        return redirect('service_requests')
    if request.user.is_superuser or request.user.is_servicecenter_admin:
        SelectedServiceRequest = ServiceCenter.objects.filter(id=id)
        SelectedServiceRequest.update(status='In Production')
        SelectedServiceRequest.update(status_change_at=timezone.now())
        SelectedServiceRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS,
                             'Order Request Updated')
    else:
        messages.add_message(request, messages.ERROR,
                             "You don't have Permission")
    return redirect('service_requests')


def CenterRequestDone(request, id):
    try:
        SelectedServiceRequest = ServiceCenter.objects.get(id=id)
    except ServiceCenter.DoesNotExist:
        messages.add_message(request, messages.ERROR,
                             "Service Request Not found")
        return redirect('service_requests')
    if request.user.is_superuser or request.user.is_servicecenter_admin:
        SelectedServiceRequest = ServiceCenter.objects.filter(id=id)
        SelectedServiceRequest.update(status='Done')
        SelectedServiceRequest.update(status_change_at=timezone.now())
        SelectedServiceRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS,
                             'Order Request Updated')
    else:
        messages.add_message(request, messages.ERROR,
                             "You don't have Permission")
    return redirect('service_requests')
