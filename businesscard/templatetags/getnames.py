from django import template
from django.template.defaultfilters import stringfilter
register = template.Library()


@register.filter
@stringfilter
def getnames(value: str,number: int):
    return ' '.join(value.split()[number-1:number])