import os
from pathlib import Path
import environ
import requests
from .utils import set_setting, get_setting


def get_zoho_data(email):
    zohoToken = zoho_login(valid=True)

    try:
        data_url = f'https://people.zoho.com/api/forms/employee/getRecords?searchColumn=EMPLOYEEMAILALIAS&searchValue={email}'
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Zoho-oauthtoken {zohoToken}'
        }
        response = requests.request("GET", data_url, headers=headers)
        data_response = response.json()
        error = data_response.get('response').get('errors').get('message') if data_response.get('response').get(
            'errors') else None
        if error == 'The provided OAuth token is invalid.':
            zohoToken = zoho_login(valid=False)
            data_url = f'https://people.zoho.com/api/forms/employee/getRecords?searchColumn=EMPLOYEEMAILALIAS&searchValue={email}'
            headers = {
                'Content-Type': 'application/json',
                'Authorization': f'Zoho-oauthtoken {zohoToken}'
            }
            response = requests.request("GET", data_url, headers=headers)
            data_response = response.json()
            print('get_zoho_data data_response:', data_response)
        return data_response
    except Exception as e:
        print('get_zoho_data e:', e)
        return e


def zoho_login(valid: bool) -> str:
    env = environ.Env()
    BASE_DIR = Path(__file__).resolve().parent.parent
    environ.Env.read_env(os.path.join(BASE_DIR, '.env'))
    zoho_token = get_setting('zoho_token')
    if zoho_token and valid:
        return zoho_token
    else:
        try:

            login_url = f'https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.7253395e25a7dfb814d17457115297c4.bd475d59ef775e8de3c792791626fa8d&client_id={env("zoho_client_id")}&client_secret={env("zoho_secret")}&grant_type=refresh_token'
            response = requests.request("POST", login_url)
            login_response = response.json()
            print(login_response)
            access_token = login_response.get('access_token')
            set_setting('zoho_token', access_token)
            print(access_token)
            return access_token
        except Exception as e:
            print(e)
            return e
