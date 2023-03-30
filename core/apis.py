import requests
from businesscard.models import ZohoToken
from asgiref.sync import async_to_sync


def get_zoho_data(email):
    zohoToken = ZohoToken.objects.get(id=1)
    try:
        data_url = f'https://people.zoho.com/api/forms/employee/getRecords?searchColumn=EMPLOYEEMAILALIAS&searchValue={email}'
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Zoho-oauthtoken {zohoToken.value}'
        }
        response = requests.request("GET", data_url, headers=headers)
        data_response = response.json()
        error = data_response.get('response').get('errors').get('message') if data_response.get('response').get('errors') else None
        if error == 'The provided OAuth token is invalid.':
            new_token = zoho_login()
            zohoToken.value = new_token
            zohoToken.save()
            data_url = f'https://people.zoho.com/api/forms/employee/getRecords?searchColumn=EMPLOYEEMAILALIAS&searchValue={email}'
            headers = {
                'Content-Type': 'application/json',
                'Authorization': f'Zoho-oauthtoken {new_token}'
            }
            response = requests.request("GET", data_url, headers=headers)
            data_response = response.json()
        return data_response
    except Exception as e:
        return e


def zoho_login():
    try:
        login_url = 'https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.7253395e25a7dfb814d17457115297c4.bd475d59ef775e8de3c792791626fa8d&client_id=1000.V05CF77IGHTUEX4FAIW7LO476N1BNB&client_secret=493ecb955cfd242f51829c50d3b96b7e624a39c68e&grant_type=refresh_token'
        response = requests.request("POST", login_url)
        login_response = response.json()
        return login_response.get('access_token')
    except Exception as e:
        return e
