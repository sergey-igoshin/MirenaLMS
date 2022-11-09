from django.views.generic import TemplateView


class TodoPageView(TemplateView):
    template_name = "todoapp/index.html"
