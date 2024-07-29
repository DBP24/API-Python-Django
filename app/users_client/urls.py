from django.urls import path
from .views import  *
from django.views.decorators.csrf import csrf_exempt

app_name = 'users_clients'
urlpatterns = [

    # clients crud
    path('listar_usuario/', UserListView.as_view(), name='listar_usuario'),
    path('crear-usuario/', CreateUserView.as_view(), name='crear_usuario'),
    path('eliminar/<int:id>/', delete_user, name='eliminar_usuario'),
    path('user/<int:pk>/update/', UserUpdateView.as_view(), name='user_update'),

    # profile
    path('editar_perfil/', UserProfileView.as_view(), name='datos_perfil'),
    path('editar_contraseña/', PasswordChangeView.as_view(), name='datos_pass'),

    # List query Clients
    path('listas_consultas/', QueryClientsListView.as_view(), name='consultas_clientes'),

    # Documents
    path('documentsapi/', documents,name="documents"),
    path('clients_documentsapi/', documents_clients,name="documents_clients"),

    # email
    path('email/', enviar_correo,name="send_email")

]

