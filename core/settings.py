"""
Django settings for core project.

Generated by 'django-admin startproject' using Django 4.1.3.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""

import logging
import os
from pathlib import Path
import environ
env = environ.Env()
environ.Env.read_env()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
PWA_SERVICE_WORKDER_PATH = os.path.join(
    BASE_DIR, 'static/js', 'serviceworker.js')


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('DJANGO_SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['172.18.223.248', 'localhost',
                 'saifk.pythonanywhere.com', '127.0.0.1']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.humanize',
    "django_extensions",
    'rest_framework',
    'rest_framework.authtoken',
    'rest_auth',
    'phonenumber_field',
    'django.contrib.sites',
    'oauth2_provider',
    'allauth',
    'allauth.account',
    'rest_auth.registration',
    # 'wkhtmltopdf',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.microsoft',
    'log_viewer',
    'pwa',
    # 'allauth.socialaccount.providers.zoho',
    # 'allauth.socialaccount.providers.google',
    'businesscard',
    'servicecenter',
    'accounts',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'core.views.orders_processor'
            ],
            'libraries': {
                'getnames': 'businesscard.templatetags.getnames',

            }
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': env('DB_NAME'),
#         'USER': env('DB_USER'),
#         'PASSWORD': env('DB_PASSWORD'),
#         'HOST': env('DB_HOST'),
#         'PORT': env('DB_PORT'),
#     }
# }


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

AUTH_USER_MODEL = 'accounts.User'
LOGIN_REDIRECT_URL = 'home'
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = '/static/'
# STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]
# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
]
SITE_ID = 1

SOCIALACCOUNT_PROVIDERS = {
    'microsoft': {
        'APP': {
            'TENANT': env('microsoft_TENANT'),
            'client_id': env('microsoft_client_id'),
            'secret': env('microsoft_secret'),

        }
    },
    'zoho': {
        'APP': {
            'client_id': '1000.N1NW70D9NXQ6VUFA09AIGJ67000B2Y',
            'secret': '18e44e8054855307367ae86fe198344e82543eb12f',

        }
    }
}


EMAIL_HOST = env('EMAIL_HOST')
EMAIL_USE_TLS = env('EMAIL_USE_TLS')
EMAIL_PORT = env('EMAIL_PORT')
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL = env('DEFAULT_FROM_EMAIL')


os.environ["PANGOCAIRO_BACKEND"] = "cairo"
PANGOCAIRO_BACKEND = "cairo"
PHONENUMBER_DEFAULT_REGION = 'IQ'


class IPAddressFilter(logging.Filter):

    def filter(self, record):
        if hasattr(record, 'request'):
            x_forwarded_for = record.request.META.get('HTTP_X_FORWARDED_FOR')
            if x_forwarded_for:
                record.ip = x_forwarded_for.split(',')[0]
            else:
                record.ip = record.request.META.get('REMOTE_ADDR')
        return True


# LOGGING = {

#     'version': 1,
#     # 'filters': {
#     #     # Add an unbound RequestFilter.
#     #     'request': {
#     #         '()': 'django_requestlogging.logging_filters.RequestFilter',
#     #     },
#     # },
#     'loggers': {
#         'django': {
#             'handlers': ['log', 'info', 'warning', 'error', 'critical'],
#             'level': 'DEBUG',
#             # 'filters': ['request'],
#         }
#     },
#     'handlers': {
#         'log': {
#             'level': 'DEBUG',
#             'class': 'logging.handlers.TimedRotatingFileHandler',
#             'filename': './logs/log.log',
#             'formatter': 'verbose',
#             'when': 'D',  # specifies the interval
#             'interval': 1,  # defaults to 1, only necessary for other values
#             'backupCount': 5,  # how many backup file to keep, 5 days
#         },
#         'info': {
#             'level': 'INFO',
#             'class': 'logging.handlers.TimedRotatingFileHandler',
#             'filename': './logs/info.log',
#             'formatter': 'verbose',
#             'when': 'D',  # specifies the interval
#             'interval': 1,  # defaults to 1, only necessary for other values
#             'backupCount': 5,  # how many backup file to keep, 5 days
#         },
#         'warning': {
#             'level': 'WARNING',
#             'class': 'logging.handlers.TimedRotatingFileHandler',
#             'filename': './logs/warning.log',
#             'formatter': 'verbose',
#             'when': 'D',  # specifies the interval
#             'interval': 1,  # defaults to 1, only necessary for other values
#             'backupCount': 5,  # how many backup file to keep, 5 days
#         },
#         'error': {
#             'level': 'ERROR',
#             'class': 'logging.handlers.TimedRotatingFileHandler',
#             'filename': './logs/error.log',
#             'formatter': 'verbose',
#             'when': 'D',  # specifies the interval
#             'interval': 1,  # defaults to 1, only necessary for other values
#             'backupCount': 5,  # how many backup file to keep, 5 days
#         },
#         'critical': {
#             'level': 'CRITICAL',
#             'class': 'logging.handlers.TimedRotatingFileHandler',
#             'filename': './logs/critical.log',
#             'formatter': 'verbose',
#             'when': 'D',  # specifies the interval
#             'interval': 1,  # defaults to 1, only necessary for other values
#             'backupCount': 5,  # how many backup file to keep, 5 days
#         }

#     },
#     'formatters': {
#         'verbose': {
#             'format': '{name} {levelname} {asctime} {module} {process:d} {thread:d} {message}',
#             'style': '{',
#         },
#         # 'request_format': {
#         #     'format': '%(remote_addr)s %(username)s "%(request_method)s '
#         #     '%(path_info)s %(server_protocol)s" %(http_user_agent)s '
#         #     '%(message)s %(asctime)s',
#         # },

#     },
# }


LOG_VIEWER_FILES = ['critical', 'error', 'info', 'log', 'warning']
LOG_VIEWER_FILES_PATTERN = '*.log*'
LOG_VIEWER_FILES_DIR = './logs/'
LOG_VIEWER_PAGE_LENGTH = 25       # total log lines per-page
LOG_VIEWER_MAX_READ_LINES = 1000  # total log lines will be read
# Max log files loaded in Datatable per page
LOG_VIEWER_FILE_LIST_MAX_ITEMS_PER_PAGE = 25
LOG_VIEWER_PATTERNS = ['[INFO]', '[DEBUG]',
                       '[WARNING]', '[ERROR]', '[CRITICAL]']
# String regex expression to exclude the log from line
LOG_VIEWER_EXCLUDE_TEXT_PATTERN = None

# Optionally you can set the next variables in order to customize the admin:
# LOG_VIEWER_FILE_LIST_TITLE = "Custom title"
# LOG_VIEWER_FILE_LIST_STYLES = "/static/css/my-custom.css"


## PWA Configuration ##
PWA_SERVICE_WORKER_PATH = os.path.join(
    BASE_DIR, 'static/js', 'serviceworker.js')

PWA_APP_NAME = 'Qi Creative'
PWA_APP_DESCRIPTION = "Qi Creative"
PWA_APP_THEME_COLOR = '#f0cc00'
PWA_APP_BACKGROUND_COLOR = '#f0cc00'
PWA_APP_DISPLAY = 'standalone'
PWA_APP_SCOPE = '/'
PWA_APP_ORIENTATION = 'any'
PWA_APP_START_URL = '/'
PWA_APP_STATUS_BAR_COLOR = '#f0cc00'
PWA_APP_ICONS = [
    {
        "src": "/static/images/qi_160.png",
        "sizes": "160x160",
        "type": "image/png",
    },
    {
        "src": "/static/images/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
    },
    {
        "src": "/static/images/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
    }
]
PWA_APP_ICONS_APPLE = [
    {
        'src': 'static/images/qi_160.png',
        'sizes': '160x160'
    }
]
PWA_APP_SPLASH_SCREEN = [
    {
        'src': 'static/images/qi-logo.png',
        'media': '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
    }
]
PWA_APP_DIR = 'ltr'
PWA_APP_LANG = 'en-US'
