# Generated by Django 4.1.7 on 2024-07-11 07:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('guideline', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='guidelines',
            name='Application',
        ),
        migrations.RemoveField(
            model_name='guidelines',
            name='ColourPalette',
        ),
        migrations.RemoveField(
            model_name='guidelines',
            name='GraphicStyle',
        ),
        migrations.RemoveField(
            model_name='guidelines',
            name='Logos',
        ),
        migrations.RemoveField(
            model_name='guidelines',
            name='Photography',
        ),
        migrations.RemoveField(
            model_name='guidelines',
            name='ToneOfVoice',
        ),
        migrations.RemoveField(
            model_name='guidelines',
            name='Typography',
        ),
        migrations.AddField(
            model_name='application',
            name='guidelines',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='applications', to='guideline.guidelines'),
        ),
        migrations.AddField(
            model_name='colourpalette',
            name='guidelines',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='colour_palette_sections', to='guideline.guidelines'),
        ),
        migrations.AddField(
            model_name='graphicstyle',
            name='guidelines',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='graphic_styles', to='guideline.guidelines'),
        ),
        migrations.AddField(
            model_name='logo',
            name='guidelines',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='logos', to='guideline.guidelines'),
        ),
        migrations.AddField(
            model_name='photography',
            name='guidelines',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='photographies', to='guideline.guidelines'),
        ),
        migrations.AddField(
            model_name='toneofvoice',
            name='guidelines',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tone_of_voices', to='guideline.guidelines'),
        ),
        migrations.AddField(
            model_name='typography',
            name='guidelines',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='typographies', to='guideline.guidelines'),
        ),
    ]
