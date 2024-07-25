# Generated by Django 4.1.7 on 2024-07-22 10:48

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('guideline', '0010_typography_bold_typography_regular_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='typography',
            name='Bold',
            field=ckeditor.fields.RichTextField(blank=True, default='', null=True, verbose_name='Bold'),
        ),
        migrations.AlterField(
            model_name='typography',
            name='Regular',
            field=ckeditor.fields.RichTextField(blank=True, default='', null=True, verbose_name='Regular'),
        ),
    ]
