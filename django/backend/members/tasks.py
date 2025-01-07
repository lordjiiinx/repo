from celery import shared_task

from .resetemail import password_reset_token_created
from .joinedemail import send_mail_function




@shared_task(name='password_reset_task')
def password_reset_task(sender, instance, reset_password_token, *args, **kwargs):
    return password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs)

@shared_task(name='send_email_task2')
def send_email_task2(mail,department,joined_date,name):
    return send_mail_function(mail,department,joined_date,name)