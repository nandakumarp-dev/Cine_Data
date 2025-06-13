from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Movies
from .serializers import MoviesSerializer

# Create your views here.

class MoviesListCreatView(APIView):

    serializer_class = MoviesSerializer

    def get(self,request,*args,**kwargs):

        movies = Movies.objects.all()
        serializer = self.serializer_class(movies,many=True)

        return Response(data=serializer.data,status=200)
    
    def post(self,request,*args,**kwargs):

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():

            serializer.save()

            return Response(data={'msg':'movie created successfully'},status = 200)

        return Response(data=serializer.errors,status=400)