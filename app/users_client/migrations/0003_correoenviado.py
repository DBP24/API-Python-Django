# Generated by Django 5.0.7 on 2024-07-25 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users_client', '0002_querys_client'),
    ]

    operations = [
        migrations.CreateModel(
            name='CorreoEnviado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('destinatario', models.EmailField(max_length=254)),
                ('asunto', models.CharField(max_length=255)),
                ('mensaje', models.TextField()),
                ('fecha_envio', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
