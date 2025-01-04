from celery import shared_task

from .resetemail import password_reset_token_created




@shared_task(name='password_reset_task')
def password_reset_task(sender, instance, reset_password_token, *args, **kwargs):
    return password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs)

