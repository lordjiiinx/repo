from django.urls import path
from .views import usercreate,group,depart







urlpatterns = [
    path("signin/", usercreate.as_view()),
        path("join/", group.as_view()),
    path('depart/<member>/<department>', depart.as_view(), name='texts'),

 

]