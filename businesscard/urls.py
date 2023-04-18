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
        request_list,
        GenerateHtml,
        pdf_preview,
        generate_bcard,

)

urlpatterns = [
    path('', index,
         name='home'),
    path('orders/', BusinessRequestList, name='orders'),
    path('requests/', request_list, name='requests'),
    path('bcard/', pdf_preview, name='bcard'),
    path('orders/<int:rid>/pdf/', generate_bcard, name='pdf'),
    path('orders/<int:rid>/html/', GenerateHtml, name='html'),
    path('orders/<int:brid>', login_required(BusinessRequestDetails), name='BusinessRequestDetails'),
    path('orders/<int:id>/BusinessRequestApprove/', login_required(BusinessRequestApprove),
         name='BusinessRequestApprove'),
    path('orders/<int:id>/BusinessRequestReject/', login_required(BusinessRequestReject),
         name='BusinessRequestReject'),
    path('orders/<int:id>/BusinessRequestInPrinting/', login_required(BusinessRequestInPrinting),
         name='BusinessRequestInPrinting'),
    path('orders/<int:id>/BusinessRequestDone/', login_required(BusinessRequestDone),
         name='BusinessRequestDone'),
]