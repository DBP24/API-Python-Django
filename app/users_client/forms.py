# en tu_app/forms.py
import re
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from django.utils.translation import gettext_lazy as _

class CreateUserForm(UserCreationForm):
    username = forms.CharField(label="Nombre de Usuario",help_text='Requerido. Únicamente letras, dígitos y @/./+/-/_')
    first_name = forms.CharField(max_length=30, required=True,label="Nombres")
    last_name = forms.CharField(max_length=30, required=True,label="Apellidos")
    email = forms.EmailField(max_length=254, help_text='Requerido. Únicamente email válido')
    


    error_messages = {
        'password_mismatch': 'Las contraseñas no coinciden.',
        'username_exists': 'Este nombre de usuario ya está en uso.',
        'email_exists': 'Este correo electrónico ya está registrado.'
    }
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['password1'].help_text = 'Requerido. Al menos 8 caracteres.'
        self.fields['password2'].help_text = 'Requerido. Repita la contraseña.'

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'password1', 'password2')
    
    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get('username')
        email = cleaned_data.get('email')

        # Verificar si el nombre de usuario ya existe
        if User.objects.filter(username=username).exists():
            self.add_error('username', self.error_messages['username_exists'])

        # Verificar si el correo electrónico ya existe
        if User.objects.filter(email=email).exists():
            self.add_error('email', self.error_messages['email_exists'])

        return cleaned_data
    



class CorreoForm(forms.Form):
    destinatario = forms.EmailField(label="Correo electrónico", widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Ingrese el correo electrónico'}))
    asunto_choices = [
        ('solicitar_token', 'Solicitar Token'),
        ('desarrollo_aplicativo', 'Desarrollo Aplicativo'),
        ('otros', 'Otros'),
    ]
    asunto = forms.ChoiceField(choices=asunto_choices, widget=forms.Select(attrs={'class': 'form-control'}))
    mensaje = forms.CharField(widget=forms.Textarea(attrs={'class': 'form-control', 'rows': 5, 'placeholder': 'Ingrese el mensaje'}))
