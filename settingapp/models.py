from django.db import models
from django.utils.translation import gettext_lazy as _

# class ExtractsOddRecipient(models.Model):
#     title = models.CharField(max_length=256, verbose_name="Title")  # Название

#     def __str__(self) -> str:
#         return f"{self.pk} {self.title}"

#     class Meta:
#         verbose_name = _("Extracts Odd Recipient")
#         verbose_name_plural = _("Extracts Odd Recipient")


class Menu(models.Model):
    title = models.CharField(max_length=256, verbose_name="Title")  # Название
    url = models.CharField(max_length=256, verbose_name="Url")  # Ссылка
    badge = models.SmallIntegerField(default=0, verbose_name="Badge")  # Бейдж
    icon = models.TextField(null=True, verbose_name="icon")  # Путь к иконке
    menu = models.BooleanField(default=False)  # False - scroll, True - static
    deleted = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.pk} {self.title}"

    def delete(self, *args):
        self.deleted = True
        self.save()

    class Meta:
        ordering = ("-menu",)
        verbose_name = _("Menu")
        verbose_name_plural = _("Menu")
