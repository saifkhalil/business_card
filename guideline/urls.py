from django.urls import path
from .views import guidelines_add_view

urlpatterns = [
    path('new/', guidelines_add_view, name='add_guidelines'),
    # Add more URLs as needed
]