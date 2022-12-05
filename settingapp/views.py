from django.contrib.auth.mixins import PermissionRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import CreateView, DeleteView, ListView, UpdateView

# from Menu import MENU
from settingapp import models as settingapp_models

# def get_active(active):
#     menu = MENU
#     for item in menu["menu"]["a"]:
#         for val in item.values():
#             if val == active:
#                 item["active"] = True
#                 return menu
#     return menu


class ExtractsOddRecipientListView(ListView):
    model = settingapp_models.ExtractsOddRecipient
    # paginate_by = 5

    def get_queryset(self):
        return super().get_queryset()

    def get_context_data(self, **kwargs):
        # Get all previous data
        context = super().get_context_data(**kwargs)
        # Create your own data
        # context["list"] = MENU  # get_active("settings")
        context["page"] = self.request.path
        context["menu_static"] = settingapp_models.Menu.objects.all().filter(deleted=False, menu=True)
        context["menu_scroll"] = settingapp_models.Menu.objects.all().filter(deleted=False, menu=False)
        return context


class ExtractsOddRecipientCreateView(PermissionRequiredMixin, CreateView):
    model = settingapp_models.ExtractsOddRecipient
    fields = "__all__"
    success_url = reverse_lazy("settingapp:settings")
    permission_required = ("settingapp.add_settings",)


class ExtractsOddRecipientUpdateView(PermissionRequiredMixin, UpdateView):
    model = settingapp_models.ExtractsOddRecipient
    fields = "__all__"
    success_url = reverse_lazy("settingapp:settings")
    permission_required = ("settingapp.change_settings",)


class ExtractsOddRecipientDeleteView(PermissionRequiredMixin, DeleteView):
    model = settingapp_models.ExtractsOddRecipient
    success_url = reverse_lazy("settingapp:settings")
    permission_required = ("settingapp.delete_settings",)


# class ExtractsOddRecipientPageView(TemplateView):
#     page = "settings"
#     template_name = f"settingapp/{page}.html"

#     def get_context_data(self, **kwargs):
#         # Get all previous data
#         context = super().get_context_data(**kwargs)
#         # Create your own data
#         context["list"] = get_active(self.page)

#         return context
