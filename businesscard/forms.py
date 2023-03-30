from .models import *
from django.forms import ModelForm


class BusinessRequestForm(ModelForm):
    class Meta:
        model = BusinessRequest
        fields = ['user', 'employee_id', 'full_name_en', 'full_name_ar',
                  'job_title', 'job_title_ar', 'phone',
                  'quantity']
