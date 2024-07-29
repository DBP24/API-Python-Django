import re
from django import forms

from django.contrib.auth.forms import AuthenticationForm,UsernameField
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _


from django.contrib.auth.models import User
from django.contrib.auth.forms import PasswordChangeForm

class LoginForm(AuthenticationForm):
  username = UsernameField(
      widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "Usuario"}),
      error_messages={
            'required': _("El campo de usuario es obligatorio."),
        }
      )
  password = forms.CharField(
      strip=False,
      widget=forms.PasswordInput(attrs={"class": "form-control", "placeholder": "Contraseña"}),
      error_messages={
        'required': 'El campo de contraseña es obligatorio',
        'min_length': 'La contraseña debe tener al menos %(limit_value)d caracteres'
    },
    min_length=4
  )

  error_messages = {
        'invalid_login': "Las credenciales que has proporcionado no son válidas. Por favor, inténtalo de nuevo.",
        'inactive': _("Esta cuenta está inactiva."),
    }
  
  def clean_username(self):
        username = self.cleaned_data['username']
        if not re.match(r'^[a-zA-Z0-9]+$', username):
            raise forms.ValidationError(_("El nombre de usuario solo puede contener letras y números."))
        return username

  # def clean_password(self):
  #   password = self.cleaned_data['password']
  #   if not re.match(r'^[a-zA-Z0-9]+$', password):
  #      raise forms.ValidationError(_("La contraseña solo puede contener letras y números."))
  #   return password
 
class UserEditForm(forms.ModelForm):
    
    password_change_form = PasswordChangeForm

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']
        # fields = ['username', 'first_name', 'last_name', 'email', 'is_active', 'is_staff', 'is_superuser']
        labels = {
            'username': 'Nombre de usuario',
            'first_name': 'Nombre',
            'last_name': 'Apellido',
            'email': 'Correo electrónico',
            # 'is_active': 'Activo',
            # 'is_staff': 'Staff',
            # 'is_superuser': 'Superusuario',
        }

class UserClientEditForm(forms.ModelForm):
    
    password_change_form = PasswordChangeForm

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email','is_active']
        # fields = ['username', 'first_name', 'last_name', 'email', 'is_active', 'is_staff', 'is_superuser']
        labels = {
            'username': 'Nombre de usuario',
            'first_name': 'Nombre',
            'last_name': 'Apellido',
            'email': 'Correo electrónico',
            'is_active': 'Activo',

        }