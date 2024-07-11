from django import forms
from django.forms import inlineformset_factory
from .models import Guidelines, Logo, ColourPalette, Typography, GraphicStyle, ToneOfVoice, Photography, Application

class GuidelinesForm(forms.ModelForm):
    class Meta:
        model = Guidelines
        fields = ['Introduction']

ToneOfVoiceFormSet = inlineformset_factory(Guidelines, ToneOfVoice, fields=('Description', 'IsActive'), extra=1, can_delete=True)
GraphicStyleFormSet = inlineformset_factory(Guidelines, GraphicStyle, fields=('Title', 'Description', 'Image', 'Usage', 'Images'), extra=1, can_delete=True)
ColourPaletteFormSet = inlineformset_factory(Guidelines, ColourPalette, fields=('Title', 'Description'), extra=1, can_delete=True)
LogoFormSet = inlineformset_factory(Guidelines, Logo, fields=('Description', 'Image'), extra=1, can_delete=True)
TypographyFormSet = inlineformset_factory(Guidelines, Typography, fields=('Title', 'Description', 'Language', 'TypeWeights', 'KerningTracking', 'Leading', 'TypeColour', 'ImproperUse', 'Texts'), extra=1, can_delete=True)
ApplicationFormSet = inlineformset_factory(Guidelines, Application, fields=('Title', 'Images', 'IsActive'), extra=1, can_delete=True)
PhotographyFormSet = inlineformset_factory(Guidelines, Photography, fields=('Title', 'Description', 'Images', 'IsActive'), extra=1, can_delete=True)