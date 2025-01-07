from rest_framework import serializers
from .models import departments
from .tasks import send_email_task2
from .serialize import sta




class serialize2(serializers.ModelSerializer):
    class Meta:
        model = departments
        fields = '__all__'


    def create(self, validated_data):
       instance = self.Meta.model(**validated_data)
       #sta.staffmail(instance.group)
       mailmade = sta.staffmail(group=instance.group)
       
       send_email_task2(mailmade,instance.department,instance.joined_date,instance.name)
       
       instance.save()
       return instance