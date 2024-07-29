from django.urls import path
from .views import DniInfoAPIView

app_name = 'dni'
urlpatterns = [
    path('dni/', DniInfoAPIView, name='insert_dni'),

]

