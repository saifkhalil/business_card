from django.contrib import admin

from .models import (
    ImageList,
    LogoSection,
    Logo,
    ColourPalette,
    ColourPaletteSection,
    Language,
    Texts,
    Typography,
    GraphicStyle,
    ToneOfVoice,
    Photography,
    Application,
    Guidelines
)


class TimeStampedModelAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'modified_at', 'created_by', 'modified_by')


# Inline admin classes
class LogoSectionInline(admin.TabularInline):
    model = LogoSection
    extra = 1


class LogoInline(admin.TabularInline):
    model = Logo
    extra = 1
    inlines = [
        LogoSectionInline
    ]


class ColourPaletteSectionInline(admin.TabularInline):
    model = ColourPaletteSection
    extra = 1


class ColourPaletteInline(admin.TabularInline):
    model = ColourPalette
    extra = 0
    inlines = [
        ColourPaletteSectionInline
    ]


class TypographyInline(admin.StackedInline):
    model = Typography
    extra = 0


class GraphicStyleInline(admin.TabularInline):
    model = GraphicStyle
    extra = 0


class ToneOfVoiceInline(admin.TabularInline):
    model = ToneOfVoice
    extra = 0


class PhotographyInline(admin.TabularInline):
    model = Photography
    extra = 0


class ApplicationInline(admin.TabularInline):
    model = Application
    extra = 0


# Register models with inlines
@admin.register(Guidelines)
class GuidelinesAdmin(admin.ModelAdmin):
    inlines = [
        LogoInline,
        ColourPaletteInline,
        TypographyInline,
        GraphicStyleInline,
        ToneOfVoiceInline,
        PhotographyInline,
        ApplicationInline,
    ]
    list_display = ('id', 'Introduction', 'created_at', 'modified_at')
    list_filter = ('created_at', 'modified_at')
    search_fields = ('Introduction',)


# Register other models separately
@admin.register(ImageList)
class ImageListAdmin(TimeStampedModelAdmin):
    pass


@admin.register(Language)
class LanguageAdmin(TimeStampedModelAdmin):
    pass


@admin.register(Texts)
class TextsAdmin(TimeStampedModelAdmin):
    pass


@admin.register(ColourPalette)
class ColourPalette(TimeStampedModelAdmin):
    model = ColourPalette
    extra = 0
    inlines = [
        ColourPaletteSectionInline
    ]
