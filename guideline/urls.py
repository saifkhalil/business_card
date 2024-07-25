from django.urls import path
from .views import create_guidelines, index

urlpatterns = [
    path('new/', create_guidelines, name='add_guidelines'),
    path('', index, name='add_guidelines'),
    # Add more URLs as needed
]