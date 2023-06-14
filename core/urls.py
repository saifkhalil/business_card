from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.urls import path, include
from django.shortcuts import render

from core.views import (
    profile,
    index,
    logout_view,
    scroll
)


def handler404(request, *args, **argv):
    response = render(request, '404.html')
    response.status_code = 404
    return response


def handler500(request, *args, **argv):
    response = render(request, '500.html')
    response.status_code = 500
    return response


urlpatterns = [
    path('', index, name='home'),
    path('admin/', admin.site.urls, name='admin'),
    path('', include('pwa.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('accounts/', include('allauth.urls')),
    path('accounts/profile/', login_required(profile), name='profile'),
    path('scroll', scroll, name='scroll'),
    path('logout/', logout_view, name='logout'),
    path('logs/', include('log_viewer.urls')),
    path('business_order/', include('businesscard.urls'), name='businesscard'),
    path('service_order/', include('servicecenter.urls'), name='servicecenter'),
]
