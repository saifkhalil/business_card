from django.contrib import admin
from .models import (
    ImageList,
    LogoSection,
    Logo,
    ColourPaletteSection,
    ColourPalette,
    Language,
    Texts,
    Typography,
    GraphicStyle,
    ToneOfVoice,
    Photography,
    Application,
    Guidelines
)



# Register other models with TimeStampedModelAdmin

admin.site.register(Guidelines)
admin.site.register(Logo)
admin.site.register(ColourPalette)
admin.site.register(ColourPaletteSection)
admin.site.register(Typography)
admin.site.register(GraphicStyle)
admin.site.register(ImageList)
admin.site.register(ToneOfVoice)
admin.site.register(Photography)
admin.site.register(Application)
