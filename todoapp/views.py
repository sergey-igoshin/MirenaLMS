from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import TemplateView

# class TodoPageView(TemplateView):
#     template_name = "todoapp/index.html"

#     def get_context_data(self, **kwargs):
#         # Get all previous data
#         context = super().get_context_data(**kwargs)
#         # Create your own data
#         context["news_title"] = "Громкий новостной заголовок"
#         context["news_preview"] = "Предварительное описание, которое заинтересует каждого"
#         return context


class TodoPageView(LoginRequiredMixin, TemplateView):
    template_name = "todoapp/index.html"
    login_url = reverse_lazy("authapp:login")

    def get_context_data(self, **kwargs):
        # Get all previous data
        context = super().get_context_data(**kwargs)
        # Create your own data
        context["news_title"] = "Громкий новостной заголовок"
        context["news_preview"] = "Предварительное описание, которое заинтересует каждого"
        return context


class ContactsPageView(TemplateView):
    template_name = "todoapp/contacts.html"


class LoginPageView(TemplateView):
    template_name = "todoapp/login.html"


class DocSitePageView(TemplateView):
    template_name = "todoapp/doc_site.html"
