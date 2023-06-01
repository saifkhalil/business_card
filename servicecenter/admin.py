from django.contrib import admin
from servicecenter.models import ServiceCenter


# Register your models here.

@admin.register(ServiceCenter)
class ServiceCenterAdmin(admin.ModelAdmin):
    # to have a date-based drilldown navigation in the admin page
    date_hierarchy = 'created_at'

    # to filter the resultes by users, content types and action flags
    list_filter = [
        'created_at',
        'status',
        'user'
    ]
    readonly_fields = ('status_change_by', 'status_change_at', 'created_by', 'created_at', 'modified_by', 'modified_at')

    list_display = [
        'user',
        'service_center_name',
        'full_address',
        'height',
        'width',
        'status',
        'created_at',
    ]
