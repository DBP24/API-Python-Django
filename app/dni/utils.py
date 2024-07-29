import requests
import json
import os
from dotenv import load_dotenv


def consultar_info_dni(numero_dni):
    load_dotenv()
    token = os.getenv("TOKEN"),
    token = ''.join(map(str, token))

    params = {
        'dni': numero_dni
    }
    # URL de la API y token de autorización
    url = 'https://apiperu.dev/api/dni'
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {str(token)}'
    }

    # Convertir el diccionario a formato JSON
    params_json = json.dumps(params)

    # Realizar la solicitud POST utilizando requests
    try:
        response = requests.post(url, headers=headers, data=params_json, verify=False)
        # verify=False deshabilita la verificación SSL, similar a CURLOPT_SSL_VERIFYPEER => false
        response.raise_for_status()  # Lanza una excepción para errores HTTP
        data = response.json()  # Parsear la respuesta JSON
        return data  # Devolver la respuesta JSON como un diccionario
    except requests.exceptions.RequestException as e:
        print("Error al hacer la solicitud:", e)
        return None
