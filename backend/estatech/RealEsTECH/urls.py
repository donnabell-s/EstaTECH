from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'Users', views.UserViewSet)
router.register(r'Properties', views.PropertyViewSet)
router.register(r'Events', views.EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # Custom booking endpoint
    # path('flights/<int:pk>/book/', views.FlightViewSet.as_view({'post': 'book_seat'})),
]