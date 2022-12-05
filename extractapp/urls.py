from django.urls import path

from extractapp import views
from extractapp.apps import ExtractappConfig

app_name = ExtractappConfig.name

urlpatterns = [
    path("", views.ExtractsListView.as_view(), name="extracts"),
    path("downloadfile/", views.ExtractsCreateView.as_view(), name="extracts_create"),
    path("<int:pk>/update", views.ExtractsUpdateView.as_view(), name="extracts_update"),
    path("<int:pk>/delete", views.ExtractsDeleteView.as_view(), name="extracts_delete"),
]
