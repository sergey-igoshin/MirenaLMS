from django.urls import path

from todoapp import views
from todoapp.apps import TodoappConfig

app_name = TodoappConfig.name

urlpatterns = [
    path("", views.TodoPageView.as_view(), name="todo_page"),
    path("contacts/", views.ContactsPageView.as_view(), name="contacts"),
    path("login/", views.LoginPageView.as_view(), name="login"),
]
