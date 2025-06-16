from django.urls import path
from . import views

urlpatterns = [

    path('movies/',views.MoviesListCreatView.as_view()),
    
    path('movies/<str:uuid>/',views.MoviesRetrieveUpdateDestroyView.as_view())
    
]