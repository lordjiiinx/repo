from rest_framework import serializers
from .models import newuser
from django.db.models import Q


class serialize(serializers.ModelSerializer):
    class Meta:
        model = newuser
        fields = ['id', 'name', 'email', 'password','groupss']
        
    def create(self, validated_data):
        password = validated_data.pop("password")
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            
        
        instance.save()

        return instance
    
class sta():
      def staffmail(group):
        
       mail = newuser.objects.filter(Q(is_staff= 1,groupss=group)).values_list('email',flat=True)
       mailer =mail[0]
       
       
       return mailer

       
        
