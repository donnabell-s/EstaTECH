from rest_framework import serializers
from .models import User, Property, Event
import phgeograpy

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' 


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__' 

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__' 

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__' 