from django.contrib import admin
from .models import Querys_Client ,CorreoEnviado
# Register your models here.

@admin.register(Querys_Client)
class Querys_ClientAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'fecha_consulta', 'detalle')
    search_fields = ('usuario__email', 'detalle')
    list_filter = ('fecha_consulta',)

    def usuario_email(self, instance):
        return instance.usuario.email
    usuario_email.short_description = 'Email del usuario'

@admin.register(CorreoEnviado)
class CorreEnviadoAdmin(admin.ModelAdmin):
    list_display = ('asunto','destinatario','fecha_envio')