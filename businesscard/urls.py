from django.urls import path
from django.contrib.auth.decorators import login_required
from businesscard.views import (
        BusinessRequestCreateView,
        BusinessRequestApprove,
        BusinessRequestReject,
        BusinessRequestInPrinting,
        BusinessRequestDone,
        BusinessRequestList,
        index,
)

urlpatterns = [
    path('', index,
         name='home'),
    path('orders/', BusinessRequestList, name='orders'),
    path('<int:id>/bra/', login_required(BusinessRequestApprove),
         name='BusinessRequestApprove'),
    path('<int:id>/brr/', login_required(BusinessRequestReject),
         name='BusinessRequestReject'),
    path('<int:id>/bri/', login_required(BusinessRequestInPrinting),
         name='BusinessRequestInPrinting'),
    path('<int:id>/brd/', login_required(BusinessRequestDone),
         name='BusinessRequestDone'),
]