from servicecenter.models import ServiceCenter
from django.forms import ModelForm

class ServiceCenterRequestForm(ModelForm):

    class Meta:
        model = ServiceCenter
        fields = ['user', 'service_center_name', 'full_address','height', 'width']

