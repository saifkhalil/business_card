from django.shortcuts import render, redirect
from .forms import GuidelinesForm, LogoFormSet, ColourPaletteFormSet, TypographyFormSet, GraphicStyleFormSet, ToneOfVoiceFormSet, PhotographyFormSet, ApplicationFormSet
from .models import Guidelines, ColourPalette, Typography, GraphicStyle, ToneOfVoice, Photography, Application, Logo


def create_guidelines(request):
    if request.method == 'POST':
        guidelines_form = GuidelinesForm(request.POST)
        logo_formset = LogoFormSet(request.POST, request.FILES, queryset=Logo.objects.none())
        colour_palette_formset = ColourPaletteFormSet(request.POST, request.FILES, queryset=ColourPalette.objects.none())
        typography_formset = TypographyFormSet(request.POST, request.FILES, queryset=Typography.objects.none())
        graphic_style_formset = GraphicStyleFormSet(request.POST, request.FILES, queryset=GraphicStyle.objects.none())
        tone_of_voice_formset = ToneOfVoiceFormSet(request.POST, request.FILES, queryset=ToneOfVoice.objects.none())
        photography_formset = PhotographyFormSet(request.POST, request.FILES, queryset=Photography.objects.none())
        application_formset = ApplicationFormSet(request.POST, request.FILES, queryset=Application.objects.none())

        if guidelines_form.is_valid() and logo_formset.is_valid() and colour_palette_formset.is_valid() and typography_formset.is_valid() and graphic_style_formset.is_valid() and tone_of_voice_formset.is_valid() and photography_formset.is_valid() and application_formset.is_valid():
            guidelines = guidelines_form.save()
            for form in logo_formset:
                logo = form.save(commit=False)
                logo.save()
                guidelines.Logo.add(logo)
            for form in colour_palette_formset:
                colour_palette = form.save(commit=False)
                colour_palette.save()
                guidelines.ColourPalette.add(colour_palette)
            for form in typography_formset:
                typography = form.save(commit=False)
                typography.save()
                guidelines.Typography.add(typography)
            for form in graphic_style_formset:
                graphic_style = form.save(commit=False)
                graphic_style.save()
                guidelines.GraphicStyle.add(graphic_style)
            for form in tone_of_voice_formset:
                tone_of_voice = form.save(commit=False)
                tone_of_voice.save()
                guidelines.ToneOfVoice.add(tone_of_voice)
            for form in photography_formset:
                photography = form.save(commit=False)
                photography.save()
                guidelines.Photography.add(photography)
            for form in application_formset:
                application = form.save(commit=False)
                application.save()
                guidelines.Application.add(application)

            return redirect('success_url')  # Redirect to a success page

    else:
        guidelines_form = GuidelinesForm()
        logo_formset = LogoFormSet(queryset=Logo.objects.none())
        colour_palette_formset = ColourPaletteFormSet(queryset=ColourPalette.objects.none())
        typography_formset = TypographyFormSet(queryset=Typography.objects.none())
        graphic_style_formset = GraphicStyleFormSet(queryset=GraphicStyle.objects.none())
        tone_of_voice_formset = ToneOfVoiceFormSet(queryset=ToneOfVoice.objects.none())
        photography_formset = PhotographyFormSet(queryset=Photography.objects.none())
        application_formset = ApplicationFormSet(queryset=Application.objects.none())

    return render(request, 'guidelines/new_new.html', {
        'guidelines_form': guidelines_form,
        'logo_formset': logo_formset,
        'colour_palette_formset': colour_palette_formset,
        'typography_formset': typography_formset,
        'graphic_style_formset': graphic_style_formset,
        'tone_of_voice_formset': tone_of_voice_formset,
        'photography_formset': photography_formset,
        'application_formset': application_formset,
    })


# views.py
from django.shortcuts import render
from .models import Guidelines

def index(request):
    guidelines = Guidelines.objects.first()
    context = {
        'guidelines': guidelines
    }
    return render(request, 'guidelines/index.html', context)


