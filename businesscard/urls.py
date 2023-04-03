from django.urls import path
from django.contrib.auth.decorators import login_required
from businesscard.views import (
        BusinessRequestCreateView,
        BusinessRequestApprove,
        BusinessRequestReject,
        BusinessRequestInPrinting,
        BusinessRequestDone,
        BusinessRequestList,
        BusinessRequestDetails,
        index,
)

urlpatterns = [
    path('', index,
         name='home'),
    path('orders/', BusinessRequestList, name='orders'),
    path('orders/<int:brid>', login_required(BusinessRequestDetails), name='BusinessRequestDetails'),
    path('orders/<int:id>/bra/', login_required(BusinessRequestApprove),
         name='BusinessRequestApprove'),
    path('orders/<int:id>/brr/', login_required(BusinessRequestReject),
         name='BusinessRequestReject'),
    path('orders/<int:id>/bri/', login_required(BusinessRequestInPrinting),
         name='BusinessRequestInPrinting'),
    path('orders/<int:id>/brd/', login_required(BusinessRequestDone),
         name='BusinessRequestDone'),
]