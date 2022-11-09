from django.urls import path

from todoapp import views
from todoapp.apps import TodoappConfig

app_name = TodoappConfig.name

urlpatterns = [
    path("", views.TodoPageView.as_view()),
]
