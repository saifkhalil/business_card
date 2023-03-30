"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.contrib.auth.decorators import login_required
from django.urls import path, include
from allauth.socialaccount.providers.microsoft.views import MicrosoftGraphOAuth2Adapter
from allauth.socialaccount.providers.oauth2.views import (OAuth2CallbackView)

from core.views import profile,index,logout_view

urlpatterns = [
    path('admin/', admin.site.urls,name='admin'),
    path('rest-auth/', include('rest_auth.urls')),
    path('accounts/', include('allauth.urls')),
    path('accounts/profile/', login_required(profile),name='profile'),
    # path('', index,name='home'),
    path('', include('businesscard.urls'), name='businesscard'),
    path('logout/', logout_view,name='logout'),
    # path('accounts/microsoft/login/', oauth2_login,{'provider': 'microsoft', 'adapter_class': MicrosoftGraphOAuth2Adapter}, name='microsoft_login'),
    # path('accounts/microsoft/callback/', OAuth2CallbackView.as_view(adapter=MicrosoftGraphOAuth2Adapter),name='microsoft_callback'),
]
