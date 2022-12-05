from django import template
from django.utils.safestring import mark_safe

register = template.Library()


@register.filter
def email_to_link(value):
    return mark_safe(f"<a href='mailto:{value}'>{value}</a>")


@register.filter
def email_to_link2(value):
    return mark_safe(f"<a href='mail:{value}'>{value}</a>")


@register.filter
def two_parts(lst):
    n = int(len(lst) / 2)
    for i in range(0, len(lst), n):
        yield lst[i : i + n]


@register.filter
def cut(value, arg):
    return value.get(str(arg))


@register.filter
def text_posted(value):
    if value:
        return mark_safe(f"<div class='text-posted small'>Разнесено</div>")
    return mark_safe(f"<div class='text-not_posted small'>Не разнесено</div>")
