from django.db import models
from django.contrib.auth import get_user_model
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.
User = get_user_model()


STATUS = (
    ('Pending','Pending'),
    ('Approved','Approved'),
    ('Reject','Reject'),
    ('In Printing','In Printing'),
    ('Done','Done'),
)
class BusinessRequest(models.Model):
    id = models.AutoField(primary_key=True, )
    user = models.ForeignKey(User,related_name='%(class)s_user', null=False, blank=False, on_delete=models.CASCADE)
    employee_id = models.BigIntegerField(blank=False, null=False)
    full_name_en = models.CharField(max_length=250, blank=False, null=False, verbose_name='Full Name En')
    full_name_ar = models.CharField(max_length=250, blank=False, null=False, verbose_name='Full Name Ar')
    job_title = models.CharField(max_length=250, blank=False, null=False, verbose_name='Job Title En')
    job_title_ar = models.CharField(max_length=250, blank=False, null=False, verbose_name='Job Title Ar')
    phone = PhoneNumberField(verbose_name="Phone Number")
    quantity = models.BigIntegerField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True,editable=False,verbose_name='Created at')
    status = models.CharField(choices=STATUS,default='Pending', max_length=250, blank=False, null=False, verbose_name='Status')
    modified_at = models.DateTimeField(auto_now=True,editable=False,verbose_name='Modified at')
    created_by = models.ForeignKey(
        User, related_name='%(class)s_createdby', on_delete=models.CASCADE, blank=True, null=True,editable=False,verbose_name='Created by')
    modified_by = models.ForeignKey(
        User, related_name='%(class)s_modifiedby', null=True, blank=True, on_delete=models.CASCADE,editable=False,verbose_name='Modified by')