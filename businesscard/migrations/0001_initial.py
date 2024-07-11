# Generated by Django 4.1.7 on 2024-07-09 11:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ZohoToken',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('value', models.CharField(max_length=250, verbose_name='Value')),
            ],
        ),
        migrations.CreateModel(
            name='BusinessRequest',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('employee_id', models.BigIntegerField()),
                ('first_name_en', models.CharField(max_length=250, verbose_name='First Name En')),
                ('last_name_en', models.CharField(blank=True, max_length=250, null=True, verbose_name='Last Name En')),
                ('first_name_ar', models.CharField(max_length=250, verbose_name='First Name Ar')),
                ('last_name_ar', models.CharField(blank=True, max_length=250, null=True, verbose_name='last Name Ar')),
                ('job_title', models.CharField(max_length=250, verbose_name='Job Title En')),
                ('job_title_ar', models.CharField(max_length=250, verbose_name='Job Title Ar')),
                ('phone', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, verbose_name='Phone Number')),
                ('quantity', models.BigIntegerField()),
                ('pdf', models.FileField(upload_to='pdf/%Y/%m/%d/', verbose_name='PDF')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created at')),
                ('status', models.CharField(choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Reject', 'Reject'), ('In Printing', 'In Printing'), ('Done', 'Done')], default='Pending', max_length=250, verbose_name='Status')),
                ('status_change_at', models.DateTimeField(blank=True, editable=False, null=True, verbose_name='Status Change By')),
                ('modified_at', models.DateTimeField(auto_now=True, verbose_name='Modified at')),
                ('created_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_createdby', to=settings.AUTH_USER_MODEL, verbose_name='Created by')),
                ('modified_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_modifiedby', to=settings.AUTH_USER_MODEL, verbose_name='Modified by')),
                ('status_change_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_status_change_by', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]