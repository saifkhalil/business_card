from .models import *
from django.forms import ModelForm
from phonenumber_field.formfields import PhoneNumberField
from django.utils.translation import gettext_lazy as _
from phonenumber_field.widgets import PhoneNumberInternationalFallbackWidget, PhoneNumberPrefixWidget
from businesscard.models import BusinessRequest
class BusinessRequestForm(ModelForm):
    # phone = PhoneNumberField(widget=PhoneNumberPrefixWidget(initial='IQ'))
    # phone.error_messages['invalid'] = 'Enter a valid phone number (e.g. 7801000000).'
    class Meta:
        model = BusinessRequest
        fields = ['user', 'employee_id', 'first_name_en','last_name_en', 'first_name_ar','last_name_ar','job_title', 'job_title_ar', 'phone','quantity']
        error_messages = {
            'phone' : {
                'invalid': "Enter a valid phone number (e.g. +9647801000000)."
            }
        }
