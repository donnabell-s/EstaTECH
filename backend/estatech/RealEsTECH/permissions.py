# my_app/permissions.py
from rest_framework import permissions

class IsAgent(permissions.BasePermission):
    
    def has_permission(self, request, view):
        # Check if the user is authenticated
        if request.user.is_authenticated:
            # Check if the user's role is 'agent'
            return request.user.role == 'agent'
        return False