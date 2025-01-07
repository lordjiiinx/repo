
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from .serialize import serialize
from .serialization import serialization
from .tasks import password_reset_task
from django.dispatch import receiver

from rest_framework import generics

from django.db.models import Q
from django_rest_passwordreset.signals import reset_password_token_created

from .models import departments
from .seri import serialize2


from rest_framework.views import APIView


@receiver(reset_password_token_created)
def sendemail(sender, instance, reset_password_token, *args, **kwargs):
    return password_reset_task(sender, instance, reset_password_token, *args, **kwargs)




class usercreate(APIView):
    

    def post(self,request):
        
        class_serializer = serialize(data=request.data)
        if class_serializer.is_valid():
            newuser = class_serializer.save()
           

        else :
            raise ValueError('not saved')

        if newuser:
            return Response(status=status.HTTP_201_CREATED)
        else :
          return Response(class_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class group(APIView):
    #permission_classes = [IsAuthenticated]
    
    def post(self,request):
        
        class_serializer = serialize2(data=request.data)
        if class_serializer.is_valid():
            newuser = class_serializer.save()
           

        else :
            raise ValueError('not saved')

        if newuser:
            return Response(status=status.HTTP_201_CREATED)
        else :
          return Response(class_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class depart(generics.ListAPIView):


    queryset =departments.objects.all()
    serializer_class = serialization
   # 
    def get_queryset(self):
        member = self.kwargs['member']
        department = self.kwargs['department']
        return departments.objects.filter(Q(member= member,department=department))


# Create your views here.
