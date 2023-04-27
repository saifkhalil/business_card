from django.db import models
from django.db.models.signals import post_save, m2m_changed
from django.template.loader import render_to_string
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from django.utils.text import slugify
from phonenumber_field.modelfields import PhoneNumberField
from core.threading import send_html_mail
from accounts.models import User
# Create your models here.
# User = get_user_model()
from businesscard.pdf import html_to_pdf
from io import BytesIO
from django.core.files import File
from weasyprint import HTML, CSS
from django.template.loader import get_template

STATUS = (
    ('Pending', 'Pending'),
    ('Approved', 'Approved'),
    ('Reject', 'Reject'),
    ('In Printing', 'In Printing'),
    ('Done', 'Done'),
)


class BusinessRequest(models.Model):
    id = models.AutoField(primary_key=True, )
    user = models.ForeignKey(User, related_name='%(class)s_user', null=True, blank=True, on_delete=models.CASCADE)
    employee_id = models.BigIntegerField(blank=False, null=False)
    first_name_en = models.CharField(max_length=250, blank=False, null=False, verbose_name='First Name En')
    last_name_en = models.CharField(max_length=250, blank=True, null=True, verbose_name='Last Name En')
    first_name_ar = models.CharField(max_length=250, blank=False, null=False, verbose_name='First Name Ar')
    last_name_ar = models.CharField(max_length=250, blank=True, null=True, verbose_name='last Name Ar')
    job_title = models.CharField(max_length=250, blank=False, null=False, verbose_name='Job Title En')
    job_title_ar = models.CharField(max_length=250, blank=False, null=False, verbose_name='Job Title Ar')
    phone = PhoneNumberField(verbose_name="Phone Number")
    quantity = models.BigIntegerField(blank=False, null=False)
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

    def generate_pdf(self):
        # Render the template with the model instance's attributes as context
        template = get_template('businesscard/bcard.html')
        context = {
            'data': self
        }
        html = template.render(context)

        # Generate the PDF from the HTML
        pdf_file = HTML(string=html).write_pdf()
        # pdf_bytes = html.write_pdf()

        # Save the PDF to the model's FileField
        filename = slugify(self.id) + '.pdf'
        self.pdf.save(filename, BytesIO(pdf_file))


@receiver(post_save, sender=BusinessRequest)
def BusinessRequest_send_email(sender, instance, created, *args, **kwargs):
    CurrentBusinessRequest = instance
    if created:

        instance.generate_pdf()
        from django.contrib.sites.models import Site
        pdf_file = instance.pdf

        message = 'text version of HTML message'
        email_subject = f'New Business Card Request #{CurrentBusinessRequest.id}'
        email_body = render_to_string('businesscard/email.html', {
            'user': CurrentBusinessRequest.user,
            'domain': f'https://{Site.objects.get_current().domain}',
            'br': CurrentBusinessRequest,
            'msgtype': 'You have been assigned with you below case details'
        })
        send_html_mail(email_subject, email_body, pdf_file,
                       list(User.objects.filter(is_businesscard_admin=True).values_list('email', flat=True)))


class ZohoToken(models.Model):
    id = models.AutoField(primary_key=True, )
    value = models.CharField(max_length=250, blank=False, null=False, verbose_name='Value')
