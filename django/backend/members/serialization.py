from rest_framework import serializers
from .models import departments


class serialization(serializers.ModelSerializer):
    class Meta:
        model = departments
        fields = '__all__'
        