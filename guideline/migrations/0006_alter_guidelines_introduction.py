# Generated by Django 4.1.7 on 2024-07-22 06:45

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('guideline', '0005_remove_application_guidelines_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guidelines',
            name='Introduction',
            field=ckeditor.fields.RichTextField(default='', verbose_name='Description'),
        ),
    ]
