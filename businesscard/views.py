from datetime import datetime

from allauth.socialaccount.models import SocialAccount
from django.contrib import messages
from django.contrib.auth import get_user_model
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
    user_requests = None
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
                result = data_response.get('response').get('result')
                print(result)
                data_value = list(result[0].values())[0][0]
            except Exception as e:
                messages.add_message(request, messages.ERROR, e)
    elif request.method == 'GET':
        try:
            if request.user.is_authenticated:
                user_requests = BusinessRequest.objects.filter(user=request.user)
        except BusinessRequest.DoesNotExist:
            user_requests = None
        try:
            data = SocialAccount.objects.get(user=request.user).extra_data
            data_response = get_zoho_data(email=request.user.email)
            result = data_response.get('response').get('result')
            print(result)
            data_value = list(result[0].values())[0][0]
        except Exception as e:
            messages.add_message(request, messages.ERROR, e)
    context = {
        'data': data,
        'msg': msg,
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


def BusinessRequestApprove(request, id):
    try:
        SelectedBusinessRequest = BusinessRequest.objects.get(id=id)
    except BusinessRequest.DoesNotExist:
        return HttpResponse('Business Request Not Found')
    if request.user.is_superuser:
        SelectedBusinessRequest = BusinessRequest.objects.filter(id=id)
        SelectedBusinessRequest.update(status='Approved')
        SelectedBusinessRequest.update(status_change_at=datetime.now())
        SelectedBusinessRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS, 'Order Request Updated')
    else:
        messages.add_message(request, messages.SUCCESS, "You don't have Permission")
    return redirect('orders')

def BusinessRequestReject(request, id):
    try:
        SelectedBusinessRequest = BusinessRequest.objects.get(id=id)
    except BusinessRequest.DoesNotExist:
        return HttpResponse('Business Request Not Found')
    if request.user.is_superuser:
        SelectedBusinessRequest = BusinessRequest.objects.filter(id=id)
        SelectedBusinessRequest.update(status='Reject')
        SelectedBusinessRequest.update(status_change_at=datetime.now())
        SelectedBusinessRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS, 'Order Request Updated')
    else:
        messages.add_message(request, messages.SUCCESS, "You don't have Permission")
    return redirect('orders')


def BusinessRequestInPrinting(request, id):
    try:
        SelectedBusinessRequest = BusinessRequest.objects.get(id=id)
    except BusinessRequest.DoesNotExist:
        return HttpResponse('Business Request Not Found')
    if request.user.is_superuser:
        SelectedBusinessRequest = BusinessRequest.objects.filter(id=id)
        SelectedBusinessRequest.update(status='In Printing')
        SelectedBusinessRequest.update(status_change_at=datetime.now())
        SelectedBusinessRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS, 'Order Request Updated')
    else:
        messages.add_message(request, messages.SUCCESS, "You don't have Permission")
    return redirect('orders')


def BusinessRequestDone(request, id):
    try:
        SelectedBusinessRequest = BusinessRequest.objects.get(id=id)
    except BusinessRequest.DoesNotExist:
        return HttpResponse('Business Request Not Found')
    if request.user.is_superuser:
        SelectedBusinessRequest = BusinessRequest.objects.filter(id=id)
        SelectedBusinessRequest.update(status='Done')
        SelectedBusinessRequest.update(status_change_at=datetime.now())
        SelectedBusinessRequest.update(status_change_by=request.user)
        messages.add_message(request, messages.SUCCESS, 'Order Request Updated')
    else:
        messages.add_message(request, messages.SUCCESS, "You don't have Permission")
    return redirect('orders')
