from django.core.mail import send_mail

from django.template.loader import render_to_string
from django.urls import reverse
from django.http import HttpResponse,HttpRequest
from django.conf import settings

def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
     context = {
        'current_user': reset_password_token.user,
        'username': reset_password_token.user.name,
        'email': reset_password_token.user.email,
        'reset_password_url': "{}?token={}".format(
            instance.request.build_absolute_uri(reverse('password_reset:reset-password-confirm')),
            reset_password_token.key)
    }
     subject = 'forgot password'
     body = render_to_string('forgot.txt',context)
     return send_mail(subject,body,settings.DEFAULT_FROM_EMAIL,[reset_password_token.user.email,])

