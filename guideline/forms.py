from django import forms
from django.forms import BaseModelFormSet, modelformset_factory
from .models import Guidelines, Logo, ColourPalette, Typography, GraphicStyle, ToneOfVoice, Photography, Application


class GuidelinesForm(forms.ModelForm):
    class Meta:
        model = Guidelines
        fields = ['Introduction']


class LogoForm(forms.ModelForm):
    class Meta:
        model = Logo
        fields = ['Description', 'Image']


class ColourPaletteForm(forms.ModelForm):
    class Meta:
        model = ColourPalette
        fields = ['Title', 'Description']


class TypographyForm(forms.ModelForm):
    class Meta:
        model = Typography
        fields = ['Title', 'Description', 'Language']


class GraphicStyleForm(forms.ModelForm):
    class Meta:
        model = GraphicStyle
        fields = ['Title', 'Description', 'Images']


class ToneOfVoiceForm(forms.ModelForm):
    class Meta:
        model = ToneOfVoice
        fields = ['Description']


class PhotographyForm(forms.ModelForm):
    class Meta:
        model = Photography
        fields = ['Title', 'Description', 'Images']


class ApplicationForm(forms.ModelForm):
    class Meta:
        model = Application
        fields = ['Title', 'Images']


# Create formsets manually
LogoFormSet = modelformset_factory(Logo, form=LogoForm, extra=1, can_delete=True)
ColourPaletteFormSet = modelformset_factory(ColourPalette, form=ColourPaletteForm, extra=1, can_delete=True)
TypographyFormSet = modelformset_factory(Typography, form=TypographyForm, extra=1, can_delete=True)
GraphicStyleFormSet = modelformset_factory(GraphicStyle, form=GraphicStyleForm, extra=1, can_delete=True)
ToneOfVoiceFormSet = modelformset_factory(ToneOfVoice, form=ToneOfVoiceForm, extra=1, can_delete=True)
PhotographyFormSet = modelformset_factory(Photography, form=PhotographyForm, extra=1, can_delete=True)
ApplicationFormSet = modelformset_factory(Application, form=ApplicationForm, extra=1, can_delete=True)
