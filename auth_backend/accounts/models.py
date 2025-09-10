from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from . import usermanager

class CustomUser(AbstractUser):
    username = None
    phone_number = models.CharField(max_length = 14, unique = True)
    address = models.TextField()

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = []

    objects = usermanager.CustomUserManager()

    def __str__(self):
        return self.phone_number