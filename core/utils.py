from .models import Setting

def get_setting(key, default=None):
    try:
        setting = Setting.objects.get(key=key)
        return setting.value
    except Setting.DoesNotExist:
        return None

def set_setting(key, value):
    setting, created = Setting.objects.get_or_create(key=key)
    setting.value = value
    setting.save()