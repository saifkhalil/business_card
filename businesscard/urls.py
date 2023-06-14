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
    request_list,
    GenerateHtml,
    pdf_preview,
    generate_bcard,
    NewBusinessRequest

)

urlpatterns = [

    path('orders/', BusinessRequestList, name='business_orders'),
    path('requests/', request_list, name='business_requests'),
    path('bcard/', pdf_preview, name='bcard'),
    path('new/', login_required(NewBusinessRequest), name='new_bc'),
    path('<int:rid>/pdf/', generate_bcard, name='pdf'),
    path('<int:rid>/html/', GenerateHtml, name='html'),
    path('<int:brid>', login_required(BusinessRequestDetails),
         name='BusinessRequestDetails'),
    path('<int:id>/BusinessRequestApprove/', login_required(BusinessRequestApprove),
         name='BusinessRequestApprove'),
    path('<int:id>/BusinessRequestReject/', login_required(BusinessRequestReject),
         name='BusinessRequestReject'),
    path('<int:id>/BusinessRequestInPrinting/', login_required(BusinessRequestInPrinting),
         name='BusinessRequestInPrinting'),
    path('<int:id>/BusinessRequestDone/', login_required(BusinessRequestDone),
         name='BusinessRequestDone'),
]
