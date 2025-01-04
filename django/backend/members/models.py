from django.db import models
from django.conf import settings
from datetime import datetime

from django.contrib.auth.models import AbstractUser,BaseUserManager

class UserManager(BaseUserManager):

    use_in_migration = True

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is Required')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff = True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser = True')

        return self.create_user(email, password, **extra_fields)


class newuser(AbstractUser):

    username = None
    
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    groupss = models.CharField(max_length=100)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']


class departments(models.Model):
  member =models.ForeignKey(settings.AUTH_USER_MODEL,on_delete = models.CASCADE)
  department = models.CharField(max_length=120)
  joined_date = models.DateTimeField(default=datetime.now)
  name = models.CharField(max_length=120)
  group = models.CharField(max_length=120)
 
class events(models.Model):
    date = models.DateTimeField()
    event = models.CharField(max_length=400)
    department = models.CharField(max_length=120)
    


# Create your models here.


# Create your models here.
