# Generated by Django 4.1.7 on 2024-07-09 11:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceCenter',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('service_center_name', models.CharField(max_length=250, verbose_name='Service Center Name')),
                ('full_address', models.CharField(max_length=250, verbose_name='Full Address')),
                ('height', models.BigIntegerField(verbose_name='Height')),
                ('width', models.BigIntegerField(verbose_name='Width')),
                ('pdf', models.FileField(upload_to='pdf/%Y/%m/%d/', verbose_name='PDF')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created at')),
                ('status', models.CharField(choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Reject', 'Reject'), ('In Production', 'In Production'), ('Done', 'Done')], default='Pending', max_length=250, verbose_name='Status')),
                ('status_change_at', models.DateTimeField(blank=True, editable=False, null=True, verbose_name='Status Change By')),
                ('modified_at', models.DateTimeField(auto_now=True, verbose_name='Modified at')),
                ('created_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_createdby', to=settings.AUTH_USER_MODEL, verbose_name='Created by')),
                ('modified_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_modifiedby', to=settings.AUTH_USER_MODEL, verbose_name='Modified by')),
                ('status_change_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_status_change_by', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
