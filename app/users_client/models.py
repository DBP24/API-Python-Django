from django.db import models
from django.conf import settings
import uuid
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class UserToken(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='token')
    token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Token de {self.user.username}'

class Querys_Client(models.Model):
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='consultas')
    fecha_consulta = models.DateTimeField(default=timezone.now)
    detalle = models.TextField()

    def __str__(self):
        return f" {self.detalle} "
    


class CorreoEnviado(models.Model):
    destinatario = models.EmailField()
    asunto = models.CharField(max_length=255)
    mensaje = models.TextField()
    fecha_envio = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.asunto
