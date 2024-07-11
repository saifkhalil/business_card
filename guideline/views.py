# views.py

from django.shortcuts import render, redirect
from .forms import GuidelinesForm, ToneOfVoiceFormSet, GraphicStyleFormSet, ColourPaletteFormSet, LogoFormSet, TypographyFormSet, ApplicationFormSet, PhotographyFormSet

def guidelines_add_view(request):
    if request.method == 'POST':
        guidelines_form = GuidelinesForm(request.POST)
        toneofvoice_formset = ToneOfVoiceFormSet(request.POST, prefix='toneofvoice')
        graphicstyle_formset = GraphicStyleFormSet(request.POST, request.FILES, prefix='graphicstyle')
        colourpalette_formset = ColourPaletteFormSet(request.POST, prefix='colourpalette')
        logo_formset = LogoFormSet(request.POST, request.FILES, prefix='logo')
        typography_formset = TypographyFormSet(request.POST, prefix='typography')
        application_formset = ApplicationFormSet(request.POST, prefix='application')
        photography_formset = PhotographyFormSet(request.POST, request.FILES, prefix='photography')

        if guidelines_form.is_valid() and toneofvoice_formset.is_valid() and graphicstyle_formset.is_valid() and colourpalette_formset.is_valid() and logo_formset.is_valid() and typography_formset.is_valid() and application_formset.is_valid() and photography_formset.is_valid():
            new_guidelines = guidelines_form.save(commit=False)
            new_guidelines.save()

            toneofvoice_formset.instance = new_guidelines
            toneofvoice_formset.save()

            graphicstyle_formset.instance = new_guidelines
            graphicstyle_formset.save()

            colourpalette_formset.instance = new_guidelines
            colourpalette_formset.save()

            logo_formset.instance = new_guidelines
            logo_formset.save()

            typography_formset.instance = new_guidelines
            typography_formset.save()

            application_formset.instance = new_guidelines
            application_formset.save()

            photography_formset.instance = new_guidelines
            photography_formset.save()

            return redirect('success_url')  # Replace with your success URL
    else:
        guidelines_form = GuidelinesForm()
        toneofvoice_formset = ToneOfVoiceFormSet(prefix='toneofvoice')
        graphicstyle_formset = GraphicStyleFormSet(prefix='graphicstyle')
        colourpalette_formset = ColourPaletteFormSet(prefix='colourpalette')
        logo_formset = LogoFormSet(prefix='logo')
        typography_formset = TypographyFormSet(prefix='typography')
        application_formset = ApplicationFormSet(prefix='application')
        photography_formset = PhotographyFormSet(prefix='photography')

    context = {
        'guidelines_form': guidelines_form,
        'toneofvoice_formset': toneofvoice_formset,
        'graphicstyle_formset': graphicstyle_formset,
        'colourpalette_formset': colourpalette_formset,
        'logo_formset': logo_formset,
        'typography_formset': typography_formset,
        'application_formset': application_formset,
        'photography_formset': photography_formset,
    }

    return render(request, 'guidelines/guidelines_form.html', context)
