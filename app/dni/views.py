from django.shortcuts import render

from .utils import consultar_info_dni  
from app.users_client.models import Querys_Client

import requests

# token 
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import authentication_classes,permission_classes,api_view
# Create your views here.
from datetime import datetime

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def DniInfoAPIView(request):
    now = datetime.now()
    numero_dni = request.query_params.get('dni', None)
    if not numero_dni :
        return Response({"error": "Debe proporcionar la variable 'dni' "}, status=status.HTTP_400_BAD_REQUEST)
    
    resultado = consultar_info_dni(numero_dni)
    data = {
        'status' : status.HTTP_200_OK,
        'data' : {
            'nombre_completo': resultado['data']['nombre_completo'],
            'nombres': resultado['data']['nombres'],
            'apellido_paterno' : resultado['data']['apellido_paterno'],
            'apellido_materno' : resultado['data']['apellido_materno'],
            'dni' : resultado['data']['numero'],
            'codigo_verificacion' : resultado['data']['codigo_verificacion'],
            'ubigeo_sunat' : resultado['data']['ubigeo_sunat'],
            'direccion' : resultado['data']['direccion'],

        },
        'source' : "DiegoBoantti.dev",
        'timestamp': now.strftime("%Y-%m-%d %H:%M:%S")
    }
    if resultado['success'] == True:
        # almacenamos consulta
        query = Querys_Client.objects.create(
            usuario=request.user,
            detalle=f'se consulto el siguiente DNI {numero_dni}, en la fecha {now.strftime("%Y-%m-%d %H:%M:%S")}' # Decodificamos el cuerpo de la petición para obtener el detalle
        )
        query.save()
        return Response(data)
    else:
        return Response({"error": "No se pudo obtener información del DNI"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

