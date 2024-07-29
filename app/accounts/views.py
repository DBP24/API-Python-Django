from django.shortcuts import render, redirect
from django.urls import reverse_lazy

from .forms import  LoginForm

from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView, LogoutView

from django.contrib import messages
from django.views.generic import FormView


class UserLoginView(LoginView):
  template_name = 'accounts/login.html'
  form_class = LoginForm

  def dispatch(self, request, *args, **kwargs): 
        if self.request.user.is_authenticated:
            return redirect(reverse_lazy('accounts:dashboard'))
        return super().dispatch(request, *args, **kwargs)   

from django.contrib.auth.models import User,Group
from rest_framework.authtoken.models import Token
from app.users_client.models import Querys_Client

@login_required
def dashboard(request):
    if request.user.groups.filter(name="Administrador").exists():
        # consultar los usuarios
        list_user = User.objects.exclude(id=request.user.id).prefetch_related('token')
        total_clients = User.objects.exclude(id=request.user.id).count()
        total_token = Token.objects.all().count()
        total_querys = Querys_Client.objects.all().count()
        total_admin = Group.objects.get(name='Administrador')
        usuarios_administradores = total_admin.user_set.all().count
        context = {
            # 'list_user' : zip(list_user,token),
            'list_user' : list_user,
            'name_user' : request.user,
            'total_clients' : total_clients,
            'total_querys' : total_querys,
            'total_token' : total_token,
            'total_admin' : usuarios_administradores
        }
        return render(request,'accounts/dashboard.html',context)
    else:
        # return render(request,'accounts/clients.html',{'section': 'Cliente'})
        logout(request)
        msg = "Usted no cuenta con permisos para acceder"
        return render(request,'accounts/login.html',{'msg': msg})
    # return render(request,'blog/list.html',context)

@login_required
def logout_view(request):
    logout(request)
    return redirect('/login')

