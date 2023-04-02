from django.contrib import admin
from .models import User
from django.utils import timezone
from accounts.forms import SetPasswordForm
from django.contrib import messages
from django.utils.translation import ngettext
from django.http import HttpResponseRedirect
from django.shortcuts import render


# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'full_name', 'created_by', 'created_at', 'modified_by', 'modified_at')
    readonly_fields = ('created_by', 'created_at', 'modified_by', 'modified_at', 'password')
    search_fields = ('email', 'firstname', 'lastname')

    # def save_model(self, request, obj, form, change):
    #     if change:
    #         obj.modified_by = request.user
    #         obj.modified_at = timezone.now
    #     else:
    #         obj.created_by = request.user
    #         obj.created_at = timezone.now
    #     obj.save()
    actions = ['set_password']

    def set_password(self, request, queryset):
        form = SetPasswordForm()
        print('inital form')
        if 'apply' in request.POST:
            print('form posted')
            form = SetPasswordForm(request.POST)
            print('form before valid')
            if form.is_valid():
                print('form is valid')
                new_password2 = form.cleaned_data['new_password2']
                # new_password2 = form.cleaned_data['password2']
                # if new_password != new_password2:
                #     self.message_user(request, ngettext(
                #     'Passwords not mutch for %(count)d user.',
                #     'Passwords not mutch for %(count)d users.',
                #     queryset.count(),
                # ) % {'count': queryset.count()}, messages.ERROR)
                for user in queryset:
                    user.set_password(new_password2)
                    user.save()

                self.message_user(request, 'Password successfully updated for %(count)d user.', messages.SUCCESS)

                return HttpResponseRedirect(request.get_full_path())
            else:
                print('form not valid')
        return render(request, 'account/set_password.html', {'users': queryset, 'form': form})

    set_password.short_description = "Set password for selected user(s)"


admin.site.register(User, UserAdmin)
