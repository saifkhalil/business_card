from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.utils.timezone import now
from .models import TimeStampedModel

@receiver(pre_save, sender=TimeStampedModel)
def set_modified_by(sender, instance, **kwargs):
    if hasattr(instance, '_user'):
        instance.modified_by = instance._user

@receiver(post_save, sender=TimeStampedModel)
def set_created_by(sender, instance, created, **kwargs):
    if created and hasattr(instance, '_user'):
        instance.created_by = instance._user