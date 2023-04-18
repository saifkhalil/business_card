import threading

from django.conf import settings
from django.core.mail import EmailMessage


class EmailThread(threading.Thread):
    def __init__(self, subject, html_content, attach, recipient_list):
        self.subject = subject
        self.recipient_list = recipient_list
        self.html_content = html_content
        self.attach = attach
        threading.Thread.__init__(self)

    def run(self):
        msg = EmailMessage(self.subject, self.html_content, settings.EMAIL_HOST_USER, self.recipient_list)
        msg.attach(self.attach.name, self.attach.read())
        msg.content_subtype = "html"
        msg.send()


def send_html_mail(subject, html_content, attach, recipient_list):
    EmailThread(subject, html_content, attach, recipient_list).start()
