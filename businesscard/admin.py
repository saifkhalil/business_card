from django.contrib import admin
from businesscard.models import BusinessRequest,ZohoToken
# Register your models here.

@admin.register(BusinessRequest)
class BusinessRequestAdmin(admin.ModelAdmin):
    # to have a date-based drilldown navigation in the admin page
    date_hierarchy = 'created_at'

    # to filter the resultes by users, content types and action flags
    list_filter = [
        'created_at',
        'status',
        'user'
    ]
    readonly_fields = ('status_change_by','status_change_at','created_by', 'created_at', 'modified_by', 'modified_at')

    list_display = [
        'user',
        'employee_id',
        'full_name_en',
        'full_name_ar',
        'job_title',
        'job_title_ar',
        'phone',
        'quantity',
        'status',
        'created_at',
    ]


admin.site.register(ZohoToken)