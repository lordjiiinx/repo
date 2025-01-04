from django.urls import path
from .views import usercreate







urlpatterns = [
    path("signin/", usercreate.as_view()),
 

]