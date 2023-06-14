from django.urls import path
from django.contrib.auth.decorators import login_required
from servicecenter.views import NewServiceCenterRequest, request_list, CenterRequestApprove, CenterRequestDone, CenterRequestReject, CenterRequestInProduction, ServiceCenterDetails

urlpatterns = [
    path('new/', NewServiceCenterRequest, name='NewServiceCenterRequest'),
    path('requests/', request_list, name='service_requests'),
    path('<int:brid>', login_required(ServiceCenterDetails),
         name='ServiceCenterDetails'),
    path('<int:id>/CenterRequestApprove/', login_required(CenterRequestApprove),
         name='CenterRequestApprove'),
    path('<int:id>/CenterRequestReject/', login_required(CenterRequestReject),
         name='CenterRequestReject'),
    path('<int:id>/CenterRequestInProduction/', login_required(CenterRequestInProduction),
         name='CenterRequestInProduction'),
    path('<int:id>/CenterRequestDone/', login_required(CenterRequestDone),
         name='CenterRequestDone'),
]
