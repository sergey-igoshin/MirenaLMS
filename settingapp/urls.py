from django.urls import path

from settingapp import views
from settingapp.apps import SettingappConfig

app_name = SettingappConfig.name

urlpatterns = [
    path("", views.ExtractsOddRecipientListView.as_view(), name="settings"),
    path("settings/create/", views.ExtractsOddRecipientCreateView.as_view(), name="settings_create"),
    path("settings/<int:pk>/update", views.ExtractsOddRecipientUpdateView.as_view(), name="settings_update"),
    path("settings/<int:pk>/delete", views.ExtractsOddRecipientDeleteView.as_view(), name="settings_delete"),
]
