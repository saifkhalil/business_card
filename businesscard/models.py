from django.db import models
from django.db.models.signals import post_save, m2m_changed
from django.template.loader import render_to_string
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from phonenumber_field.modelfields import PhoneNumberField
from core.threading import send_html_mail
from accounts.models import User
# Create your models here.
# User = get_user_model()


STATUS = (
    ('Pending','Pending'),
    ('Approved','Approved'),
    ('Reject','Reject'),
    ('In Printing','In Printing'),
    ('Done','Done'),
)
class BusinessRequest(models.Model):
    id = models.AutoField(primary_key=True, )
    user = models.ForeignKey(User,related_name='%(class)s_user', null=True, blank=True, on_delete=models.CASCADE)
    employee_id = models.BigIntegerField(blank=False, null=False)
    full_name_en = models.CharField(max_length=250, blank=False, null=False, verbose_name='Full Name En')
    full_name_ar = models.CharField(max_length=250, blank=False, null=False, verbose_name='Full Name Ar')
    job_title = models.CharField(max_length=250, blank=False, null=False, verbose_name='Job Title En')
    job_title_ar = models.CharField(max_length=250, blank=False, null=False, verbose_name='Job Title Ar')
    phone = PhoneNumberField(verbose_name="Phone Number")
    quantity = models.BigIntegerField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True,editable=False,verbose_name='Created at')
    status = models.CharField(choices=STATUS,default='Pending', max_length=250, blank=False, null=False, verbose_name='Status')
    status_change_by = models.ForeignKey(User,related_name='%(class)s_status_change_by', null=True, blank=True, on_delete=models.CASCADE)
    status_change_at = models.DateTimeField( editable=False, null=True, blank=True, verbose_name='Status Change By')
    modified_at = models.DateTimeField(auto_now=True,editable=False,verbose_name='Modified at')
    created_by = models.ForeignKey(
        User, related_name='%(class)s_createdby', on_delete=models.CASCADE, blank=True, null=True,editable=False,verbose_name='Created by')
    modified_by = models.ForeignKey(
        User, related_name='%(class)s_modifiedby', null=True, blank=True, on_delete=models.CASCADE,editable=False,verbose_name='Modified by')

@receiver(post_save, sender=BusinessRequest)
def BusinessRequest_send_email(sender, instance, created, *args, **kwargs):
    CurrentBusinessRequest = instance
    if created:
        message = 'text version of HTML message'
        email_subject = f'New Business Card Request #{CurrentBusinessRequest.id}'
        email_body = render_to_string('businesscard/email.html', {
            'user': CurrentBusinessRequest.user,
            'br': CurrentBusinessRequest,
            'msgtype': 'You have been assigned with you below case details'
        })
        send_html_mail(email_subject, email_body, list(User.objects.filter(is_businesscard_admin=True).values_list('email', flat=True)))


class ZohoToken(models.Model):
    id = models.AutoField(primary_key=True, )
    value = models.CharField(max_length=250, blank=False, null=False, verbose_name='Value')