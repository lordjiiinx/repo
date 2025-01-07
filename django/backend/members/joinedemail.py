from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.conf import settings

def send_mail_function(mailmade,department,joined_date,name):

    context = {
        'department' : department,
        'joined' : joined_date,
        'name' : name
        
    }
    subject = 'new department member'
    body = render_to_string('joined.txt',context)
    return send_mail(subject,body,settings.DEFAULT_FROM_EMAIL,[mailmade,])
