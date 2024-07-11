from django.db import models
from django.contrib.auth import get_user_model
from ckeditor.fields import RichTextField
from easy_thumbnails.fields import ThumbnailerImageField
from django.core.exceptions import ValidationError
import re


User = get_user_model()
# Create your models here.

## Base Models ##
class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(
        auto_now_add=True, editable=False, verbose_name='Created at')
    modified_at = models.DateTimeField(
        auto_now=True, editable=False, verbose_name='Modified at')
    created_by = models.ForeignKey(
        User, related_name='%(class)s_createdby', on_delete=models.CASCADE, blank=True, null=True, editable=False,
        verbose_name='Created by')
    modified_by = models.ForeignKey(
        User, related_name='%(class)s_modifiedby', null=True, blank=True, on_delete=models.CASCADE, editable=False,
        verbose_name='Modified by')

    class Meta:
        abstract = True

## Color Fields ##

class CMYKField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 15
        super().__init__(*args, **kwargs)

    def clean(self, value, model_instance):
        # Add validation for CMYK format
        if not re.match(r'^\d{1,3},\d{1,3},\d{1,3},\d{1,3}$', value):
            raise ValidationError('Invalid CMYK format')
        return value

class RGBField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 11
        super().__init__(*args, **kwargs)

    def clean(self, value, model_instance):
        # Add validation for RGB format
        if not re.match(r'^\d{1,3},\d{1,3},\d{1,3}$', value):
            raise ValidationError('Invalid RGB format')
        return value

class HEXField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 7
        super().__init__(*args, **kwargs)

    def clean(self, value, model_instance):
        # Add validation for HEX format
        if not re.match(r'^#?[0-9A-Fa-f]{6}$', value):
            raise ValidationError('Invalid HEX format')
        return value

class PMSField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 10  # Adjust the max_length as per your PMS code format
        super().__init__(*args, **kwargs)

    def clean(self, value, model_instance):
        # Add validation for PMS format, example validation pattern
        if not re.match(r'^[A-Za-z0-9\-]+$', value):
            raise ValidationError('Invalid PMS format')
        return value

## Image List Model ##
class ImageList(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Image = ThumbnailerImageField(
        upload_to='logo_images', blank=False, null=False, verbose_name='Image')


## Logo Models ##
class LogoSection(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Title = models.CharField(
        max_length=250, blank=False, null=False, verbose_name='Title')
    Description = RichTextField(default='',
                                    blank=False, null=False, verbose_name='Description')
    Image = ThumbnailerImageField(
        upload_to='logo_images', blank=False, null=False, verbose_name='Image')
    Images = models.ForeignKey(to='ImageList', on_delete=models.CASCADE, blank=True, null=True, verbose_name='ImageList')
    Logo = models.ForeignKey(to='Logo', on_delete=models.CASCADE, blank=True, null=True, verbose_name='LogoSection')
    IsActive = models.BooleanField(default=False)

class Logo(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Description = RichTextField(default='',
                                    blank=False, null=False, verbose_name='Description')
    Image = ThumbnailerImageField(
        upload_to='logo_images', blank=False, null=False, verbose_name='Image')
    guidelines = models.ForeignKey('Guidelines', on_delete=models.CASCADE, blank=True, null=True, related_name='logos')



## Colour Palette Models ##
class ColourPaletteSection(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Title = models.CharField(
        max_length=250, blank=False, null=False, verbose_name='Title')
    PMS = PMSField(blank=True, null=True, verbose_name='PMS')
    CMYK = CMYKField(blank=True, null=True, verbose_name='CMYK')
    RGB = RGBField(blank=True, null=True, verbose_name='RGB')
    HEX = HEXField(blank=True, null=True, verbose_name='HEX')
    ColourPalette = models.ForeignKey(to='ColourPalette', on_delete=models.CASCADE, blank=True, null=True, verbose_name='ColourPalette')
    IsActive = models.BooleanField(default=False)

class ColourPalette(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Title = models.CharField(
        max_length=250, blank=False, null=False, verbose_name='Title')
    Description = RichTextField(default='',
                                    blank=False, null=False, verbose_name='Description')
    guidelines = models.ForeignKey('Guidelines', on_delete=models.CASCADE, blank=True, null=True, related_name='colour_palette_sections')


## Typography Models ##

class Language(TimeStampedModel):
    Code = models.CharField(max_length=10, unique=True)
    Name = models.CharField(max_length=100)

    def __str__(self):
        return self.Name

class Texts(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Text = RichTextField(default='',
                                    blank=False, null=False, verbose_name='text')
    IsActive = models.BooleanField(default=False)

class Typography(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Title = models.CharField(
        max_length=250, blank=False, null=False, verbose_name='Title')
    Description = RichTextField(default='',
                                    blank=False, null=False, verbose_name='Description')
    Language = models.ForeignKey('Language', on_delete=models.CASCADE)
    TypeWeights = RichTextField(default='',
                                    blank=True, null=True, verbose_name='Type Weights')
    KerningTracking = RichTextField(default='',
                                    blank=True, null=True, verbose_name='Kerning & Tracking')
    Leading = RichTextField(default='',
                                    blank=True, null=True, verbose_name='Leading')
    TypeColour = RichTextField(default='',
                                    blank=True, null=True, verbose_name='Type Colour')
    ImproperUse = RichTextField(default='',
                                    blank=True, null=True, verbose_name='Improper Use')

    Texts = models.ForeignKey(to='Texts', on_delete=models.CASCADE, blank=True, null=True, verbose_name='Texts')
    guidelines = models.ForeignKey('Guidelines', on_delete=models.CASCADE, blank=True, null=True, related_name='typographies')

## Graphic Style Models ##
class GraphicStyle(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Title = models.CharField(
        max_length=250, blank=False, null=False, verbose_name='Title')
    Description = RichTextField(default='',
                                    blank=False, null=False, verbose_name='Description')
    Image = ThumbnailerImageField(
        upload_to='logo_images', blank=False, null=False, verbose_name='Image')
    Usage = RichTextField(default='',
                                    blank=False, null=False, verbose_name='Usage')
    Images = models.ForeignKey(to='ImageList', on_delete=models.CASCADE, blank=True, null=True, verbose_name='Image List')
    guidelines = models.ForeignKey('Guidelines', on_delete=models.CASCADE, blank=True, null=True, related_name='graphic_styles')


## Tone of Voice Models ##
class ToneOfVoice(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Description = RichTextField(default='',
                                    blank=False, null=False, verbose_name='Description')
    IsActive = models.BooleanField(default=False)
    guidelines = models.ForeignKey('Guidelines', on_delete=models.CASCADE, blank=True, null=True, related_name='tone_of_voices')


## Photo graphy Models ##

class Photography(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Title = models.CharField(
        max_length=250, blank=False, null=False, verbose_name='Title')
    Description = RichTextField(default='',
                                    blank=False, null=False, verbose_name='Description')
    Images = models.ForeignKey(to='ImageList', on_delete=models.CASCADE, blank=True, null=True, verbose_name='Images')
    IsActive = models.BooleanField(default=False)
    guidelines = models.ForeignKey('Guidelines', on_delete=models.CASCADE, blank=True, null=True, related_name='photographies')


## Applications Models ##

class Application(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Title = models.CharField(
        max_length=250, blank=False, null=False, verbose_name='Title')
    Images = models.ForeignKey(to='ImageList', on_delete=models.CASCADE, blank=True, null=True, verbose_name='Images')
    IsActive = models.BooleanField(default=False)
    guidelines = models.ForeignKey('Guidelines', on_delete=models.CASCADE, blank=True, null=True, related_name='applications')

## Guideline Model ##
class Guidelines(TimeStampedModel):
    id = models.AutoField(primary_key=True, )
    Introduction = models.CharField(
        max_length=250, blank=False, null=False, verbose_name='Introduction')



