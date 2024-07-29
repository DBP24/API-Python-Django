from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render,redirect
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.views.generic import View

from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.models import Group
from django.contrib.auth.forms import PasswordChangeForm
from app.accounts.forms import UserEditForm,UserClientEditForm

from django.contrib.auth import update_session_auth_hash
from django.views.generic import ListView,UpdateView
from django.contrib.auth.models import User

from django.urls import reverse
from django.shortcuts import get_object_or_404

from django.db.models import F

from .forms import CreateUserForm, CorreoForm
from .models import  UserToken, Querys_Client , CorreoEnviado

from django.core.mail import send_mail
from dotenv import load_dotenv
import os

class CreateUserView(LoginRequiredMixin, View):
    def get(self, request):
        # verifico y itero el message para eliminarlo
        if messages.get_messages(request):
            # Itera sobre los mensajes y los elimina de la cola
            for message in messages.get_messages(request):
                pass
        form = CreateUserForm()
        return render(request, 'clients/create.html', {'form': form})

    def post(self, request):
        form = CreateUserForm(request.POST)
        try:
            if form.is_valid():
                user = form.save(commit=False)
                user.is_superuser = False  # No permitir privilegios de super usuario
                user.is_staff = True  # No permitir acceso al sitio de administración
                user.save()

                group = Group.objects.get(name="Cliente")
                user.groups.add(group)

                # Crear y guardar el token de autenticación
                user_token = Token.objects.create(user=user)
                user_token.save()

                messages.success(request, 'Usuario creado con éxito.')
                return redirect('users_clients:crear_usuario')
            else:
                return render(request, 'clients/create.html', {'form': form})
        except Group.DoesNotExist:
            # messages.error(request, 'El grupo "Cliente" no existe. Por favor, contacta al administrador.')
            return redirect('users_clients:crear_usuario')
        except Exception as e:
            #   messages.error(request, f'Ocurrió un error al crear el usuario: {str(e)}')
            return redirect('users_clients:crear_usuario')

from django.db.models import Prefetch
class UserListView(LoginRequiredMixin, ListView):
    model = User
    template_name = 'clients/list_client.html'  
    context_object_name = 'list_user'  
    
    def get_queryset(self):
        id  =  self.request.user.id
        tokens_prefetch = Prefetch('token',queryset=Token.objects.all(),to_attr='prefetched_tokens')
        queryset = User.objects.prefetch_related(tokens_prefetch).all().exclude(id=id)

        return queryset
    
    
class UserUpdateView(LoginRequiredMixin, UpdateView):
    model = User
    form_class = UserClientEditForm
    template_name = 'clients/edit_client.html'
    
    def get_success_url(self):
        return reverse('users_clients:listar_usuario')

    def form_valid(self, form):
        # Procesar la actualización del usuario y su contraseña
        user = form.save(commit=False)
        password = form.cleaned_data.get('password')
        if password:
            user.set_password(password)
        user.save()
        messages.success(self.request, f'El usuario "{user.username}" se ha actualizado exitosamente.')
        return super().form_valid(form)
    


class UserProfileView(LoginRequiredMixin,View):
    def get(self, request):
        usuario = request.user
        form = UserEditForm(instance=usuario)
        password_form = PasswordChangeForm(user=request.user)
        return render(request, 'accounts/profile.html', {'form': form, 'password_form': password_form, 'usuario': usuario})
        # return render (request,'accounts/profile.html',{'form': form, 'usuario': usuario})
    
    def post(self, request):
        usuario = request.user
        form = UserEditForm(request.POST, instance=usuario)
       
        
        if form.is_valid() :
            # Guardar los cambios en el formulario de edición de usuario
            usuario = form.save(commit=False)
            usuario.save()
            messages.success(request, 'Información actualizada correctamente.')
            return redirect('users_clients:datos_pass')
        else:
            messages.error(request, 'Por favor corrige los errores.')
        
        return render(request, 'accounts/profile.html', {'form': form, 'usuario': usuario})

class PasswordChangeView(LoginRequiredMixin, View):
    def get(self, request):
        # verifico y itero el message para eliminarlo
        if messages.get_messages(request):
            # Itera sobre los mensajes y los elimina de la cola
            for message in messages.get_messages(request):
                pass  
        form = PasswordChangeForm(user=request.user)
        return render(request, 'accounts/change_password.html', {'form': form})
    
    def post(self, request):
        form = PasswordChangeForm(user=request.user, data=request.POST)
        
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  # Actualiza la sesión de autenticación del usuario
            messages.success(request, 'Contraseña actualizada correctamente.')
            return redirect('accounts:dashboard')  # Redirige a la misma página para evitar reenvío del formulario
        else:
            messages.error(request, 'Por favor corrige los errores.')
        
        return render(request, 'accounts/change_password.html', {'form': form})
    

class QueryClientsListView(LoginRequiredMixin, ListView):
    model = User
    template_name = 'clients/list_consul_clients.html'  
    context_object_name = 'list_consult'  
    
    def get_queryset(self):
        consult_prefetch = Prefetch('consultas',queryset=Querys_Client.objects.all(),to_attr='consult_')
        queryset = User.objects.prefetch_related(consult_prefetch).all()
        return queryset
    
@login_required
def delete_user(request, id):
    try : 
        user = get_object_or_404(User, id=id)
        user.is_active = not user.is_active
        user.save()
        return redirect("users_clients:listar_usuario")
    except User.DoesNotExist:
        return render(request, "users_clients:error.html", {"error": "El usuario no existe."})
    except Exception as e:
        return render(request, "users_clients:error.html", {"error": str(e)})



@login_required
def documents(request):
    
    codigo = """
    <?php
    $params = json_encode(['numero_dni' => 'INGRESAR_NUMERO_DNI_AQUI']);
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://apiperu.dev/api/dni",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_POSTFIELDS => $params,        
        CURLOPT_HTTPHEADER => [
            'Accept: application/json',
            'Content-Type: application/json',
            'Authorization: token INGRESAR_TOKEN_AQUI' ],));
    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    if ($err) { echo "cURL Error #:" . $err;} else { echo $response; }
    """
    json_ = """ 
    {
        {
        "status": 200,
        "data": {
            "nombre_completo": "BONATTI PAJUELO, DIEGO ANTONIO",
            "nombres": "DIEGO ANTONIO",
            "apellido_paterno": "BONATTI",
            "apellido_materno": "PAJUELO",
            "dni": "77355123",
            "codigo_verificacion": 1,
            "ubigeo_sunat": "",
            "direccion": ""
        },
        "source": "DiegoBoantti.dev",
        "timestamp": "2024-07-20 09:48:10"
    }
    """
    consulta_json = """
    const fetch = require('node-fetch'); 
    const url = 'https://apiperu.dev/api/dni';
    const token = 'INGRESAR_TOKEN_AQUI'; 
    const numeroDNI = 'INGRESAR_NUMERO_DNI_AQUI'; 
    const params = { numero_dni: numeroDNI };
    fetch(url, { 
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${token}`
    },
    body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    """

    context = {
        'codigo' :codigo,
        'url_api' : f'{request.get_host()}',
        'json' : json_,
        'consulta_json':consulta_json
    }
    return render(request,'clients/documents.html', context)


def documents_clients(request):
    
    codigo = """
    <?php
    $params = json_encode(['numero_dni' => 'INGRESAR_NUMERO_DNI_AQUI']);
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://apiperu.dev/api/dni",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_POSTFIELDS => $params,        
        CURLOPT_HTTPHEADER => [
            'Accept: application/json',
            'Content-Type: application/json',
            'Authorization: token INGRESAR_TOKEN_AQUI' ],));
    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    if ($err) { echo "cURL Error #:" . $err;} else { echo $response; }
    """
    json_ = """ 
    {
        {
        "status": 200,
        "data": {
            "nombre_completo": "BONATTI PAJUELO, DIEGO ANTONIO",
            "nombres": "DIEGO ANTONIO",
            "apellido_paterno": "BONATTI",
            "apellido_materno": "PAJUELO",
            "dni": "77355123",
            "codigo_verificacion": 1,
            "ubigeo_sunat": "",
            "direccion": ""
        },
        "source": "DiegoBoantti.dev",
        "timestamp": "2024-07-20 09:48:10"
    }
    """
    consulta_json = """
    const fetch = require('node-fetch'); 
    const url = 'https://apiperu.dev/api/dni';
    const token = 'INGRESAR_TOKEN_AQUI'; 
    const numeroDNI = 'INGRESAR_NUMERO_DNI_AQUI'; 
    const params = { numero_dni: numeroDNI };
    fetch(url, { 
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${token}`
    },
    body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    """

    context = {
        'codigo' :codigo,
        'url_api' : f'{request.get_host()}',
        'json' : json_,
        'consulta_json':consulta_json
    }
    return render(request,'clients/client_documents.html', context)



from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from django.core.mail import EmailMessage
from django.template.loader import render_to_string

# envio de correo eléctronico
def enviar_correo(request):
    if request.method == 'POST':
        load_dotenv()  # Carga las variables de entorno
        form = CorreoForm(request.POST)
        
        if form.is_valid():
            destinatario = form.cleaned_data['destinatario']
            asunto = form.cleaned_data['asunto']
            mensaje = form.cleaned_data['mensaje']
            remitente = os.getenv('USER')  # Asegúrate de que esta variable esté correctamente configurada

            # Envío del correo con formato HTML
            try:
                # Renderizar el contenido HTML del archivo de plantilla
                html_content = render_to_string('email/format.html', {
                    'mensaje': mensaje,  # Pasa cualquier contexto necesario
                })

                # Crear el mensaje
                email = EmailMessage(
                    subject=asunto,
                    body=html_content,
                    from_email=remitente,
                    to=[destinatario]
                )
                email.content_subtype = 'html'  # Importante para enviar contenido HTML
                email.send()

                # Opcional: Guardar el correo enviado en la base de datos
                CorreoEnviado.objects.create(
                    destinatario=destinatario,
                    asunto=asunto,
                    mensaje=mensaje
                )

                # Limpiar el formulario después de enviar  
                return redirect("users_clients:listar_usuario")
            
            
            except Exception as e:
                # Manejar errores de envío de correo
                print(f"Error al enviar el correo: {e}")  # Puedes usar un registro de errores más robusto
                form.add_error(None, "No se pudo enviar el correo. Inténtalo nuevamente.")
    else:
        form = CorreoForm()

    return render(request, 'email/email.html', {'form': form})