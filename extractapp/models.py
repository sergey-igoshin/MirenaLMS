import json

from django.db import models
from django.utils.translation import gettext_lazy as _


class Extracts(models.Model):
    bank = models.CharField(max_length=256, verbose_name="Bank")  # Отправитель
    document_section = models.CharField(max_length=256, verbose_name="Document section")  # СекцияДокумент
    number = models.CharField(max_length=50, verbose_name="Number")  # Номер
    date = models.DateField(verbose_name="Date")  # Дата
    amount = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="The amount", default=0)  # Сумма
    status = models.BooleanField(default=False)  # Поступило Списано
    payer = models.CharField(max_length=256, verbose_name="Payer")  # Плательщик
    payer_payment_account = models.CharField(max_length=50, verbose_name="Payer payment account")  # ПлательщикРасчСчет
    payer_of_inn = models.CharField(max_length=50, verbose_name="Payer of INN")  # ПлательщикИНН
    recipient = models.CharField(max_length=100, verbose_name="Recipient")  # Получатель
    recipient_payment_account = models.CharField(
        max_length=100, verbose_name="Recipient payment account"
    )  # ПолучательРасчСчет
    recipient_of_inn = models.CharField(max_length=50, verbose_name="Payer of INN")  # ПолучательИНН
    purpose_of_payment = models.CharField(max_length=256, verbose_name="Purpose of payment")  # НазначениеПлатежа
    data = models.JSONField(null=True)
    transaction = models.BooleanField(default=False)  # Транзакция
    deleted = models.BooleanField(default=False)  # Скрыть из выборки

    def __str__(self) -> str:
        self.data = json.loads(self.data)
        return f"{self.pk} {self.payer}"

    def delete(self, *args):
        self.deleted = True
        self.save()

    class Meta:
        verbose_name = _("Extracts")
        verbose_name_plural = _("Extracts")
        ordering = (
            "transaction",
            "-date",
        )


class ExtractsOddExpenditure(models.Model):
    title = models.CharField(max_length=256, verbose_name="Title")  # Название

    def __str__(self) -> str:
        return f"{self.pk} {self.title}"

    class Meta:
        verbose_name = _("Extracts Odd Expenditure")
        verbose_name_plural = _("Extracts Odd Expenditure")


class ExtractsOddIncom(models.Model):
    title = models.CharField(max_length=256, verbose_name="Title")  # Название

    def __str__(self) -> str:
        return f"{self.pk} {self.title}"

    class Meta:
        verbose_name = _("Extracts Odd Incom")
        verbose_name_plural = _("Extracts Odd Incom")
