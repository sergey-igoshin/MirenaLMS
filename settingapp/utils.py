import math
from datetime import datetime

from django.conf import settings
from django.http import QueryDict

from extractapp import models as extractapp_models


class Utilites:
    obj = None

    def two_parts(self, obj):
        n = math.ceil(len(obj) / 2)
        return [obj[i : i + n] for i in range(0, len(obj), n)]

    def validate_values(self, obj):
        copy_dict = QueryDict.copy(obj)
        copy_dict.pop("csrfmiddlewaretoken")

        for k, v in copy_dict.items():
            if not v.isdigit():
                copy_dict[k] = "0"

        return copy_dict

    def is_transaction(self, obj):
        return obj.amount == sum(float(value) for value in obj.data.values())

    def recipient_payer_replace(self):
        return (
            self.s[1]
            .replace("ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ", "ИП")
            .replace("Индивидуальный предприниматель", "ИП")
            .replace("Индивидуальный Предприниматель", "ИП")
            .replace("ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ", "ООО")
            .replace("Общество с ограниченной ответственностью", "ООО")
            .replace("ООО ООО", "ООО")
        )

    def gen_data(self, obj):
        return {"data": {f"{i.pk}": 0 for i in obj}}


class ParseFile(Utilites):
    title_file = settings.TITLE_FILE
    dictionary_parse = settings.DICTIONARY_PARSE
    title_parse = settings.TITLE_PARSE

    def f(self):
        if self.s[0] in self.dictionary_parse.keys():
            for k, v in self.dictionary_parse.items():
                if self.s[0] == k:
                    if v == "recipient" or v == "payer":
                        self.s[1] = self.recipient_payer_replace()

                    if v == "date":
                        self.s[1] = datetime.strptime(self.s[1], "%d.%m.%Y").strftime("%Y-%m-%d")
                        if self.s[0] == "ДатаПоступило":
                            self.a.update({"status": True})
                            self.data = self.incom
                        else:
                            self.a.update({"status": False})
                            self.data = self.expenditure

                    self.a.update({v: self.s[1]})

                    return True
        return False

    def parse_file(self, file):
        contents = file.read().decode("cp1251").splitlines()

        if contents[0] == self.title_file:
            self.a = dict()
            section = False
            self.expenditure = self.gen_data(extractapp_models.ExtractsOddExpenditure.objects.all())
            self.incom = self.gen_data(extractapp_models.ExtractsOddIncom.objects.all())

            for content in contents:
                if content == "":
                    continue

                self.s = content.split("=")

                if not section:

                    if self.s[0] == "Отправитель":
                        self.bank = self.s[1]
                        continue
                    if self.s[0] == "КонецРасчСчет":
                        section = True
                        continue

                if section and self.s[0] != "КонецФайла":

                    if self.s[0] == "КонецДокумента":
                        if not extractapp_models.Extracts.objects.filter(**self.a):
                            if self.a.get("payer_of_inn") == self.a.get("recipient_of_inn"):
                                self.a.update({"deleted": True})
                            self.a.update(self.data)
                            extractapp_models.Extracts.objects.create(**self.a)
                        self.a.clear()
                        continue

                    if not self.s[1]:
                        continue

                    self.a.update({"bank": self.bank})

                    if self.f():
                        continue
            return
        return
