from django.core.management.base import BaseCommand
from guideline.models import Language

class Command(BaseCommand):
    help = 'Populate the Language model with common languages'

    def handle(self, *args, **kwargs):
        languages = [
            ('en', 'English'),
            ('es', 'Spanish'),
            ('fr', 'French'),
            ('de', 'German'),
            ('zh', 'Chinese'),
            ('ja', 'Japanese'),
            ('ru', 'Russian'),
            ('ar', 'Arabic'),
            ('hi', 'Hindi'),
            ('pt', 'Portuguese'),
            ('it', 'Italian'),
            ('ko', 'Korean'),
            ('tr', 'Turkish'),
            ('nl', 'Dutch'),
            ('sv', 'Swedish'),
            ('pl', 'Polish'),
            ('fi', 'Finnish'),
            ('no', 'Norwegian'),
            ('da', 'Danish'),
            ('he', 'Hebrew'),
            ('el', 'Greek'),
            ('th', 'Thai'),
            ('vi', 'Vietnamese'),
            ('id', 'Indonesian'),
            ('ms', 'Malay'),
            ('cs', 'Czech'),
            ('hu', 'Hungarian'),
            ('ro', 'Romanian'),
            ('sk', 'Slovak'),
            ('bg', 'Bulgarian'),
            ('uk', 'Ukrainian'),
            ('hr', 'Croatian'),
            ('sr', 'Serbian'),
            ('lt', 'Lithuanian'),
            ('lv', 'Latvian'),
            ('et', 'Estonian'),
            ('sl', 'Slovenian'),
            ('mt', 'Maltese'),
        ]

        for Code, Name in languages:
            Language.objects.get_or_create(Code=Code, Name=Name)

        self.stdout.write(self.style.SUCCESS('Successfully populated the Language model'))