from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()
STATUS = (
    ('Pending', 'Pending'),
    ('Approved', 'Approved'),
    ('Reject', 'Reject'),
    ('In Production', 'In Production'),
    ('Done', 'Done'),
)


class ServiceCenter(models.Model):
    id = models.AutoField(primary_key=True, )
    user = models.ForeignKey(User, related_name='%(class)s_user', null=True, blank=True, on_delete=models.CASCADE)
    service_center_name = models.CharField( max_length=250, blank=False, null=False, verbose_name='Service Center Name')
    full_address = models.CharField( max_length=250, blank=False, null=False, verbose_name='Full Address')
    height = models.BigIntegerField(blank=False, null=False,verbose_name="Height")
    width = models.BigIntegerField(blank=False, null=False ,verbose_name="Width")
    pdf = models.FileField(upload_to='pdf/%Y/%m/%d/', verbose_name='PDF')
    created_at = models.DateTimeField(auto_now_add=True, editable=False, verbose_name='Created at')
    status = models.CharField(choices=STATUS, default='Pending', max_length=250, blank=False, null=False,
                              verbose_name='Status')
    status_change_by = models.ForeignKey(User, related_name='%(class)s_status_change_by', null=True, blank=True,
                                         on_delete=models.CASCADE)
    status_change_at = models.DateTimeField(editable=False, null=True, blank=True, verbose_name='Status Change By')
    modified_at = models.DateTimeField(auto_now=True, editable=False, verbose_name='Modified at')
    created_by = models.ForeignKey(
        User, related_name='%(class)s_createdby', on_delete=models.CASCADE, blank=True, null=True, editable=False,
        verbose_name='Created by')
    modified_by = models.ForeignKey(
        User, related_name='%(class)s_modifiedby', null=True, blank=True, on_delete=models.CASCADE, editable=False,
        verbose_name='Modified by')