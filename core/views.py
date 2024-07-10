from allauth.socialaccount.models import SocialAccount
from django.shortcuts import render, get_object_or_404
from django.contrib.auth import login, authenticate, logout
from core.apis import get_zoho_data, zoho_login
from django.shortcuts import render, redirect
from businesscard.models import BusinessRequest
from servicecenter.models import ServiceCenter


def orders_processor(request):
    Business_orders_count = None
    Service_orders_count = None
    if request.user.is_authenticated:
        try:
            Business_orders_count = BusinessRequest.objects.filter(
                status='Pending').count()
        except BusinessRequest.DoesNotExist:
            Business_orders_count = None
        try:
            Service_orders_count = ServiceCenter.objects.filter(
                status='Pending').count()
        except ServiceCenter.DoesNotExist:
            Service_orders_count = None
    return {
        'Business_orders_count': Business_orders_count,
        'Service_orders_count': Service_orders_count
    }


def index(request):
    if request.user:
        print(request.user)
    else:
        print('not user')
    return render(request, 'index.html')


def profile(request):
    data: list = None
    msg: str = None
    data_value: dict = None
    try:
        data = SocialAccount.objects.get(user=request.user).extra_data
        zoho_token = zoho_login()
        data_response = get_zoho_data(zoho_token, email=request.user.email)
        result = data_response.get('response').get('result')
        print(data_response)
        data_value = list(result[0].values())[0][0]
    except Exception as e:
        msg = e
    context = {
        'data': data,
        'msg': msg,
        'data_response': data_value
    }
    return render(request, 'profile.html', context)


def logout_view(request):
    logout(request)
    return redirect('home')


def scroll(request):
    return render(request, 'scroll_css.html')

#
# class MicrosoftOAuth2Adapter(OAuth2Adapter):
#     provider_id = 'microsoft'
#     access_token_url = 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
#     authorize_url = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
#     profile_url = 'https://graph.microsoft.com/v1.0/me'
#
#     def complete_login(self, request, app, token, **kwargs):
#         resp = self.get_json(self.profile_url, headers={
#             'Authorization': 'Bearer {0}'.format(token.token),
#             'Accept': 'application/json'
#         })
#         return self.get_provider().sociallogin_from_response(request, resp)
#
# oauth2_login = OAuth2LoginView.as_view(adapter=MicrosoftOAuth2Adapter)
# oauth2_callback = OAuth2CallbackView.as_view(adapter=MicrosoftOAuth2Adapter)
