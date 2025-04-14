from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework import viewsets, status
from .models import User, Property, Event, Offer, Visits, Interest
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import OutstandingToken, BlacklistedToken, RefreshToken
from django.http import JsonResponse
from django.views import View
from .serializers import UserSerializer, PropertySerializer, EventSerializer, OfferSerializer, VisitsSerializer, InterestSerializer
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
    
    @action(detail=False, methods=['post'])
    def login_user(self, request):
        
        print(f"YESYESYES")
        print(f"Debug - self: {self}")
        print(f"Debug - request: {request}")
        username = request.data.get('username')
        password = request.data.get('password')

        # Debugging: Log the received username and password to the terminal
        print(f"Debug - Received username: {username}")
        print(f"Debug - Received password: {password}")

        # Authenticate the user
        # # Debugging: Log the authentication attempt
        # print(f"Debug - Attempting to authenticate user: {username}")

        # Debugging: Log the request data
        print(f"Debug - Request data: {request.data}")

        try:
            # Manually retrieve the user
            user = User.objects.get(username=username)
            if(user):
                print(f"User found")
            else:
                print(f"User NOT found")

            # Check the password
            print(f"Debug - User password (hashed): {user.password}")

            if user.check_password(password):
                # Authentication successful
                # Generate a token for the authenticated user
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)
                refresh_token = str(refresh)

                # Return the tokens in the response
                return Response({
                    'token': access_token,
                    'refresh_token': refresh_token,
                    'message': 'Login successful!'
                }, status=status.HTTP_200_OK)
            
            else:
                # Incorrect password
                print(f"Password: {password}")
                return Response({'error': 'Incorrect password'}, status=status.HTTP_400_BAD_REQUEST)

        except User.DoesNotExist:
            # User does not exist
            return Response({'error': 'User  does not exist'}, status=status.HTTP_404_NOT_FOUND)

    
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

        try:
            user = User.objects.get(id=user['id'])  # Adjust this if you use a different identifier
        except User.DoesNotExist:
            return Response({'error': 'User  does not exist'}, status=status.HTTP_400_BAD_REQUEST)
         
    # Create the user
        Event.objects.create(user=user,title=title, description=description, region=region, province=province, municipality=municipality )

        return Response({'message': 'Event  registered successfully'}, status=status.HTTP_201_CREATED)
    
class OfferViewSet(viewsets.ModelViewSet):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer

    @action(detail=False, methods=['post'])
    def make_offer(self, request):
        buyer = request.data.get('user')
        agent = request.data.get('agent')
        property = request.data.get('property')
        
        try:
            user = User.objects.get(id=buyer['id'])  # Adjust this if you use a different identifier
        except User.DoesNotExist:
            return Response({'error': 'User  does not exist'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            agent = User.objects.get(id=agent['id'])  # Adjust this if you use a different identifier
            if agent.roles != 'agent':  # Assuming 'roles' is the field that defines the user's role
                return Response({'error': 'User is not an agent'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({'error': 'User does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        
        Offer.objects.create(buyer=user, agent=agent, property=property)

class VisitsViewSet(viewsets.ModelViewSet):
    queryset = Visits.objects.all()
    serializer_class = VisitsSerializer

class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer

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