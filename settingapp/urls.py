from django.urls import path

# from settingapp.views import line_chart, line_chart_json
from django.views.generic import TemplateView

from settingapp import views
from settingapp.apps import SettingappConfig

app_name = SettingappConfig.name

urlpatterns = [
    path("", views.SettingsPageView.as_view(), name="settings"),
    # path("", views.ExtractsOddRecipientListView.as_view(), name="settings"),
    # path("settings/create/", views.ExtractsOddRecipientCreateView.as_view(), name="settings_create"),
    # path("settings/<int:pk>/update", views.ExtractsOddRecipientUpdateView.as_view(), name="settings_update"),
    # path("settings/<int:pk>/delete", views.ExtractsOddRecipientDeleteView.as_view(), name="settings_delete"),
    path("chartJSON/", views.LineChartJSONView.as_view(), name="line_chart_json"),
    path("chart/", TemplateView.as_view(template_name="line_chart.html")),
]
