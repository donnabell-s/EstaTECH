from django.db import models
from django.contrib.auth.models import AbstractUser 
import phgeograpy



class User(AbstractUser):

    ROLE_CHOICES=[
        ('admin','Admin'),
        ('user','User'),
        ('agent','agent'),
    ]

    role=models.CharField(max_length=10,choices=ROLE_CHOICES,default='user')

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


class Property(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_roles', null=True, blank=True )
    agent = models.ForeignKey(User, on_delete=models.CASCADE,  related_name='agent_roles', null=True, blank=True)
    title = models.CharField(max_length=100)
    price = models.IntegerField(default=0)

    # REGION_CHOICES = [(region.slug, region.name) for region in phgeograpy.regions()]
    region=models.CharField(max_length=100, null=True, blank=True)
    # PROVINCES_CHOICES=[(p, p) for p in phgeograpy.provinces()]
    province=models.CharField(max_length=100, null=True, blank=True)
    # MUNICIPALITIES_CHOICES=[(p, p) for p in phgeograpy.municipalities()]
    municipality=models.CharField(max_length=100, null=True, blank=True)


    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,  null=True, blank=True )
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

    # REGION_CHOICES = [(region.slug, region.name) for region in phgeograpy.regions()]
    region=models.CharField(max_length=100, null=True, blank=True)
    # PROVINCES_CHOICES=[(p, p) for p in phgeograpy.provinces()]
    province=models.CharField(max_length=100, null=True, blank=True)
    # MUNICIPALITIES_CHOICES=[(p, p) for p in phgeograpy.municipalities()]
    municipality=models.CharField(max_length=100, null=True, blank=True)

# Create your models here.
