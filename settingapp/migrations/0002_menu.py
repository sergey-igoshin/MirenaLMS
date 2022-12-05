# Generated by Django 3.2.16 on 2022-11-30 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("settingapp", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Menu",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=256, verbose_name="Title")),
                ("url", models.CharField(max_length=256, verbose_name="Url")),
                ("badge", models.SmallIntegerField(default=0, verbose_name="Badge")),
                ("icon", models.TextField(null=True, verbose_name="icon")),
                ("menu", models.BooleanField(default=False)),
                ("deleted", models.BooleanField(default=False)),
            ],
            options={
                "verbose_name": "Menu",
                "verbose_name_plural": "Menu",
            },
        ),
    ]
