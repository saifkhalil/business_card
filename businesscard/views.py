import json
from datetime import datetime

from allauth.socialaccount.models import SocialAccount
from django.contrib import messages
from django.contrib.auth import get_user_model
from django.core.paginator import Paginator
from django.db.models import Q
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import (
    CreateView
)

from businesscard.forms import BusinessRequestForm
from businesscard.models import BusinessRequest
from core.apis import (
    zoho_login,
    get_zoho_data
)

User = get_user_model()


# Create your views here.
class BusinessRequestCreateView(CreateView):
    model = BusinessRequest
    template_name = 'index.html'
    form_class = BusinessRequestForm

    # error_message = "Error saving the Bussiness Request, check fields below."
    def form_valid(self, form):
        BusinessRequestFormResult = form.save(commit=False)
        BusinessRequestFormResult.user = User.objects.get(email=self.request.user.email)
        BusinessRequestFormResult.created_by = User.objects.get(email=self.request.user.email)
        BusinessRequestFormResult.save()
        # html_message = render_to_string('mail_template.html', {'BusinessRequest': BusinessRequestFormResult})
        # send_mail(
        #     subject='New Business Card Request Created: ' +
        #     form.cleaned_data['full_name_en'],
        #     html_message=html_message,
        #     message='',
        #     from_email='isms@qi.iq',
        #     recipient_list=['saif.ibrahim@qi.iq', 'saif780@gmail.com'],
        #     fail_silently=False,
        # )
        return super().form_valid(form)

    # def form_invalid(self, form):
    #     messages.error(self.request, self.error_message)
    #     return HttpResponseRedirect(reverse('home'))
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user = self.request.user
        data: list = None
        msg: str = None
        data_value: dict = None
        user_requests = None
        try:
            if self.request.user.is_authenticated:
                user_requests = BusinessRequest.objects.filter(user=self.request.user)
        except BusinessRequest.DoesNotExist:
            user_requests = None
        try:
            data = SocialAccount.objects.get(user=self.request.user).extra_data
            zoho_token = zoho_login()
            data_response = get_zoho_data(zoho_token, email=self.request.user.email)
            result = data_response.get('response').get('result')
            print(data_response)
            data_value = list(result[0].values())[0][0]
        except Exception as e:
            msg = e
        context = {
            'cuser': self.request.user,
            'data': data,
            'msg': msg,
            'form': BusinessRequestForm(),
            'data_response': data_value,
            'user_requests': user_requests
        }

        return context

    def get_success_url(self):
        return reverse_lazy('home')


def index(request):
    data: list = None
    msg: str = None
    data_value: dict = None
    data_response = None
    user_requests = None
    response_status = 1
    form = None
    if request.method == 'POST':
        form = BusinessRequestForm(request.POST)
        if form.is_valid():
            BusinessRequestFormResult = form.save(commit=False)
            BusinessRequestFormResult.user = User.objects.get(email=request.user.email)
            BusinessRequestFormResult.created_by = User.objects.get(email=request.user.email)
            BusinessRequestFormResult.save()
            messages.add_message(request, messages.SUCCESS,
                                 f'Business Card Request successfully submitted with id {BusinessRequestFormResult.id}')
            return redirect('home')
        else:
            messages.add_message(request, messages.ERROR, 'Your request not submitted, please check the below error')
            form = form
            msg = 'POSTERROR'
            try:
                if request.user.is_authenticated:
                    user_requests = BusinessRequest.objects.filter(user=request.user)
            except BusinessRequest.DoesNotExist:
                user_requests = None
            try:
                data = SocialAccount.objects.get(user=request.user).extra_data
                data_response = get_zoho_data(email=request.user.email)
                response_status = data_response.get('response').get('status')
                if response_status == 0:
                    result = data_response.get('response').get('result')
                    data_value = list(result[0].values())[0][0]
                elif response_status == 1:
                    messsage = data_response.get('response').get('errors').get('message')
                    messages.add_message(request, messages.ERROR, messsage)
            except Exception as e:
                messages.add_message(request, messages.ERROR, e)
    elif request.method == 'GET':
        try:
            if request.user.is_authenticated:
                user_requests = BusinessRequest.objects.filter(user=request.user)
        except BusinessRequest.DoesNotExist:
            user_requests = None
        try:
            if request.user.is_authenticated:
                data = SocialAccount.objects.get(user=request.user).extra_data
                data_response = get_zoho_data(email=request.user.email)
                response_status = data_response.get('response').get('status')
                if response_status == 0:
                    result = data_response.get('response').get('result')
                    data_value = list(result[0].values())[0][0]
                elif response_status == 1:
                    messsage = f"Zoho: {data_response.get('response').get('errors').get('message')}"
                    messages.add_message(request, messages.ERROR, messsage)
        except Exception as e:
            messages.add_message(request, messages.ERROR, e)
    context = {
        'data': data,
        'msg': msg,
        'response_status': response_status,
        'data_response': data_value,
        'user_requests': user_requests,
        'form': form
    }
    return render(request, 'index.html', context)


def BusinessRequestList(request):
    all_requests = None
    if request.user.is_authenticated and (request.user.is_superuser or request.user.is_businesscard_admin):
        all_requests = BusinessRequest.objects.all()
    context = {
        'all_requests': all_requests,
    }
    return render(request, 'businesscard/orders.html', context)


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
    request_list3 = BusinessRequest.objects.all()
    request_list = BusinessRequest.objects.all()
    request_list1 = []
    if number_of_records:
        number_of_records = int(number_of_records)
    else:
        number_of_records = 50
    if status:
        request_list = request_list.filter(status=status)
    if keywords:
        query_words = str(keywords).split(" ")  # Get the word in a list
        query = Q()
        for w in query_words:
            if len(w) < 2:  # Min length
                query_words.remove(w)
        for word in query_words:
            query = query | Q(employee_id__icontains=word) | Q(
                full_name_en__icontains=word) | Q(job_title__icontains=word)

        request_list = request_list.filter(query)
    else:
        request_list = request_list.order_by('-created_at')
    session = [keywords, status, number_of_records]
    # Show 25 contacts per page.
    paginator = Paginator(request_list, number_of_records)
    page_number = request.GET.get('page', 1)
    page_obj = paginator.get_page(page_number)
    page_range = paginator.get_elided_page_range(number=page_number, on_each_side=2, on_ends=2)
    context = {
        'session': json.dumps(session),
        'page_obj': page_obj,
        'page_range': page_range,
        'requests_count': request_list.count(),
    }
    return render(request, 'businesscard/request_list.html', context)


def BusinessRequestDetails(request, brid):
    user = request.user
    br = BusinessRequest.objects.get(id=brid)
    if user == br.created_by or user.is_superuser or user.is_businesscard_admin:
        context = {
            'object': br,
        }
        return render(request, 'businesscard/BusinessRequestDetails.html', context)
    else:
        return redirect('must_authenticate')


def BusinessRequestApprove(request, id):
    try:
        SelectedBusinessRequest = BusinessRequest.objects.get(id=id)
    except BusinessRequest.DoesNotExist:
        messages.add_message(request, messages.ERROR, "Business Request Not found")
        return redirect('requests')
    if request.user.is_superuser:
        SelectedBusinessRequest = BusinessRequest.objects.filter(id=id)
        SelectedBusinessRequest.update(status='Approved')
        SelectedBusinessRequest.update(status_change_at=datetime.now())
        SelectedBusinessRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS, 'Order Request Updated')
    else:
        messages.add_message(request, messages.ERROR, "You don't have Permission")
    return redirect('requests')


def BusinessRequestReject(request, id):
    try:
        SelectedBusinessRequest = BusinessRequest.objects.get(id=id)
    except BusinessRequest.DoesNotExist:
        messages.add_message(request, messages.ERROR, "Business Request Not found")
        return redirect('requests')
    if request.user.is_superuser:
        SelectedBusinessRequest = BusinessRequest.objects.filter(id=id)
        SelectedBusinessRequest.update(status='Reject')
        SelectedBusinessRequest.update(status_change_at=datetime.now())
        SelectedBusinessRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS, 'Order Request Updated')
    else:
        messages.add_message(request, messages.ERROR, "You don't have Permission")
    return redirect('requests')


def BusinessRequestInPrinting(request, id):
    try:
        SelectedBusinessRequest = BusinessRequest.objects.get(id=id)
    except BusinessRequest.DoesNotExist:
        messages.add_message(request, messages.ERROR, "Business Request Not found")
        return redirect('requests')
    if request.user.is_superuser:
        SelectedBusinessRequest = BusinessRequest.objects.filter(id=id)
        SelectedBusinessRequest.update(status='In Printing')
        SelectedBusinessRequest.update(status_change_at=datetime.now())
        SelectedBusinessRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS, 'Order Request Updated')
    else:
        messages.add_message(request, messages.ERROR, "You don't have Permission")
    return redirect('requests')


def BusinessRequestDone(request, id):
    try:
        SelectedBusinessRequest = BusinessRequest.objects.get(id=id)
    except BusinessRequest.DoesNotExist:
        messages.add_message(request, messages.ERROR, "Business Request Not found")
        return redirect('requests')
    if request.user.is_superuser:
        SelectedBusinessRequest = BusinessRequest.objects.filter(id=id)
        SelectedBusinessRequest.update(status='Done')
        SelectedBusinessRequest.update(status_change_at=datetime.now())
        SelectedBusinessRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS, 'Order Request Updated')
    else:
        messages.add_message(request, messages.ERROR, "You don't have Permission")
    return redirect('requests')
