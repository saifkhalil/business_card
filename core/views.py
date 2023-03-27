from allauth.socialaccount.models import SocialAccount
from django.shortcuts import render

from core.apis import get_zoho_data, zoho_login


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
