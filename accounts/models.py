from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError(_('Users must have an email address'))
        if not username:
            raise ValueError(_('Users must have a username'))
        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            username=username,

        )
        user.is_businesscard_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True, )
    phone = PhoneNumberField()
    firstname = models.CharField(verbose_name=_("first name"), max_length=30)
    lastname = models.CharField(verbose_name=_("last name"), max_length=30)
    email = models.EmailField(verbose_name=_("email"), max_length=60, unique=True)
    username = models.CharField(max_length=30, unique=True, verbose_name=_('Username'))
    last_login = models.DateTimeField(verbose_name=_('last login'), auto_now=True)
    is_businesscard_admin = models.BooleanField(default=False, verbose_name=_('Is Business Card admin'))
    is_servicecenter_admin = models.BooleanField(default=False, verbose_name=_('Is Service Center admin'))
    is_active = models.BooleanField(default=True, verbose_name=_('Is active'))
    is_staff = models.BooleanField(default=False, verbose_name=_('Is staff'))
    is_superuser = models.BooleanField(default=False, verbose_name=_('Is superuser'))
    created_at = models.DateTimeField(auto_now_add=True,editable=False,verbose_name=_('Created at'))
    modified_at = models.DateTimeField(auto_now=True,editable=False,verbose_name=_('Modified at'))
    created_by = models.ForeignKey(
        'User', related_name='%(class)s_createdby', on_delete=models.CASCADE, blank=True, null=True,editable=False,verbose_name=_('Created by'))
    modified_by = models.ForeignKey(
        'User', related_name='%(class)s_modifiedby', null=True, blank=True, on_delete=models.CASCADE,editable=False,verbose_name=_('Modified by'))

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def save(self, *args, **kwargs):
        super(User, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.username)

    def full_name(self):
        return str(f'{self.firstname}  {self.lastname}')

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')
