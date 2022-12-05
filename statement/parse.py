from datetime import datetime

# from extractapp import models as extractapp_models
# from settingapp import models as settingapp_models


def rep(value):
    value = value.replace(
        "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ" or "Общество с ограниченной ответственностью" or "ООО ООО", "ООО"
    ).replace(
        "ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ" or "Индивидуальный предприниматель" or "Индивидуальный Предприниматель", "ИП"
    )
    return value


def gen_data(count):
    return {f"{i + 1}": 0 for i in range(count)}


def parse_file():
    # data = file.read().decode('cp1251').splitlines()
    # with open('statement/Export_to_1c_30.09.22.txt', 'rb') as file:
    # with open('statement/statement_2.txt', 'rb') as file:
    # with open('statement/Выписка_40802810602620010223_01.10.2022–31.10.2022.txt', 'rb') as file:
    with open("statement/statement_27.09.2022-27.10.2022.txt", "rb") as file:
        data = file.read().decode("cp1251").splitlines()

    content = []
    # print(data.splitlines())
    if data[0] == "1CClientBankExchange":
        bank = ""
        a = dict()
        section = False
        create_content = False
        expenditure = 16
        incom = 8
        for d in data:

            if d == "":
                continue

            s = d.split("=")
            if s[0] == "Отправитель":
                bank = s[1]
                continue
            if s[0] == "КонецРасчСчет":
                section = True
                continue

            if s[0] == "СекцияДокумент":
                a.update({"bank": bank, "document_section": s[1]})
                continue

            if s[0] == "Номер" and section:
                a.update({"number": s[1]})
                continue

            if s[0] == "Сумма" and section:
                a.update({"amount": s[1]})
                continue

            if (s[0] == "Плательщик" and section) or (s[0] == "Плательщик1" and section):
                if s[1] == "":
                    continue
                a.update({"payer": rep(s[1])})
                continue

            if s[0] == "ПлательщикСчет" and section:
                a.update({"payer_payment_account": s[1]})
                continue

            if s[0] == "ПлательщикИНН" and section:
                a.update({"payer_of_inn": s[1]})
                continue

            if (s[0] == "Получатель" and section) or (s[0] == "Получатель1" and section):
                if s[1] == "":
                    continue
                a.update({"recipient": rep(s[1])})
                continue

            if s[0] == "ПолучательСчет" and section:
                a.update({"recipient_payment_account": s[1]})
                continue

            if s[0] == "ПолучательИНН" and section:
                a.update({"recipient_of_inn": s[1]})
                continue

            if s[0] == "НазначениеПлатежа" and section:
                a.update({"purpose_of_payment": s[1]})
                continue

            if (s[0] == "ДатаПоступило" and section) or (s[0] == "ДатаСписано" and section):
                if s[1] == "":
                    continue

                a.update({"date": datetime.strptime(s[1], "%d.%m.%Y").strftime("%Y-%m-%d")})

                if s[0] == "ДатаПоступило":
                    a.update({"data": gen_data(incom), "status": True})
                else:
                    a.update({"data": gen_data(expenditure), "status": False})

                continue

            if s[0] == "КонецДокумента" and section:
                print(a.copy())
                print()
                a.clear()
        return
    print(content)
    return


if __name__ == "__main__":
    parse_file()
