from rest_framework.permissions import BasePermission

class IsAdmin(BasePermission):

    def has_permission(self, request, view):

        return bool(request.user and request.user.is_authenticated and request.user.role == 'Admin')
    

class IsUser(BasePermission):

    def has_permission(self, request, view):

        return bool(request.user and request.user.is_authenticated and request.user.role == 'User')