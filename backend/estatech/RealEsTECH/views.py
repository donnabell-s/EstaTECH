from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework import viewsets, status
from .models import User, Property, Event
from rest_framework.response import Response
from django.http import JsonResponse
from django.views import View
from .serializers import UserSerializer, PropertySerializer, EventSerializer
import phgeograpy

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    
    @action(detail=False, methods=['post'])
    def register_user(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        roles = request.data.get('roles')   # Example of an additional field
        first_name = request.data.get('first_name')  # Another example
        last_name = request.data.get('last_name')  # Another example


        # Create the user
        user = User(
            username=username,
            email=email,  # Set the email
            first_name=first_name,  # Set the first name
            last_name=last_name,
            roles=roles  
        )

        user.set_password(password)  # Hash the password
        user.save()  # Save the user to the database

        return Response({'message': 'User  registered successfully'}, status=status.HTTP_201_CREATED)
    
class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

    @action(detail=False, methods=['post'])
    def register_property(self, request):
        user = request.data.get('user')
        agent = request.data.get('agent')
        title = request.data.get('title')  # Example of an additional field
        price = request.data.get('price')  # Another example
        region = request.data.get('region')
        province = request.data.get('province')
        municipality = request.data.get('municipality')   # Another example

    # Create the user
        property = Property(
            user=user,
            agent=agent,  # Set the email
            title=title,  # Set the first name
            price=price,
            region=region,
            province=province,
            municipality=municipality
        )
        
        return Response({'message': 'Property  registered successfully'}, status=status.HTTP_201_CREATED)
    
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    @action(detail=False, methods=['post'])
    def register_event(self, request):
        user = request.data.get('user')
        title = request.data.get('title')  # Example of an additional field
        description = request.data.get('description')  # Another example
        region = request.data.get('region')
        province = request.data.get('province')
        municipality = request.data.get('municipality')   # Another example

    # Create the user
        event = Event(
            user=user,
            title=title,  # Set the first name
            description=description,
            region=region,
            province=province,
            municipality=municipality
        )
        
        return Response({'message': 'Event  registered successfully'}, status=status.HTTP_201_CREATED)
    
class ProvinceListView(View):
    def get(self, request, *args, **kwargs):
        region_slug = request.GET.get('region')
        provinces = phgeograpy.provinces(region_slug=region_slug)
        province_choices = [(p, p) for p in provinces]
        return JsonResponse(province_choices, safe=False)

class MunicipalityListView(View):
    def get(self, request, *args, **kwargs):
        province_slug = request.GET.get('province')
        municipalities = phgeograpy.municipalities(province_slug=province_slug)
        municipality_choices = [(m, m) for m in municipalities]
        return JsonResponse(municipality_choices, safe=False)