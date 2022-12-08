from random import randrange

from chartjs.views.lines import BaseLineChartView
from django.contrib.auth.mixins import PermissionRequiredMixin

# from django.urls import reverse_lazy
# from django.views.generic import CreateView, DeleteView, ListView, UpdateView
from django.views.generic import TemplateView

from extractapp import models as extractapp_models
from settingapp import models as settingapp_models


class SettingsPageView(PermissionRequiredMixin, TemplateView):
    template_name = f"settingapp/extractsoddrecipient_list.html"
    permission_required = ("settingapp.settings",)

    def get_context_data(self, **kwargs):
        # Get all previous data
        context = super().get_context_data(**kwargs)

        # Create your own data
        context["page"] = self.request.path
        context["menu_static"] = settingapp_models.Menu.objects.filter(deleted=False, menu=True)
        context["menu_scroll"] = settingapp_models.Menu.objects.filter(deleted=False, menu=False)
        return context


class LineChartJSONView(BaseLineChartView):

    chart = None

    def get(self, request, *args, **kwargs):
        self.chart = request.GET
        self.chart.action = self.chart.get("action")
        self.chart.incom = extractapp_models.ExtractsOddIncom.objects
        self.chart.expenditure = extractapp_models.ExtractsOddExpenditure.objects
        return super().get(request, *args, **kwargs)

    def get_labels(self):
        """Return labels for the x-axis."""
        labels = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ]
        if self.chart.get("month"):
            labels = [labels[int(self.chart["month"])]]
        return labels

    def get_providers(self):
        """Return names of datasets."""
        if self.chart.action == "incom":
            return [i.get("title") for i in self.chart.incom.values("title")]
        else:
            return [i.get("title") for i in self.chart.expenditure.values("title")]

    def get_data(self):
        """Return datasets to plot."""
        if self.chart.action == "incom":
            data = [[randrange(50000, 500000) for j in range(7)] for i in range(8)]

        else:
            data = [[randrange(50000, 500000) for j in range(7)] for i in range(16)]

        if self.chart.get("month"):
            data = [[val[int(self.chart["month"])]] for val in data]

        return data


# class ExtractsOddRecipientListView(ListView):
#     model = settingapp_models.ExtractsOddRecipient
#     # paginate_by = 5

#     def get_queryset(self):
#         return super().get_queryset()

#     def get_context_data(self, **kwargs):
#         # Get all previous data
#         context = super().get_context_data(**kwargs)

#         # Create your own data
#         context["page"] = self.request.path
#         context["menu_static"] = settingapp_models.Menu.objects.all().filter(deleted=False, menu=True)
#         context["menu_scroll"] = settingapp_models.Menu.objects.all().filter(deleted=False, menu=False)
#         return context


# class ExtractsOddRecipientCreateView(PermissionRequiredMixin, CreateView):
#     model = settingapp_models.ExtractsOddRecipient
#     fields = "__all__"
#     success_url = reverse_lazy("settingapp:settings")
#     permission_required = ("settingapp.add_settings",)


# class ExtractsOddRecipientUpdateView(PermissionRequiredMixin, UpdateView):
#     model = settingapp_models.ExtractsOddRecipient
#     fields = "__all__"
#     success_url = reverse_lazy("settingapp:settings")
#     permission_required = ("settingapp.change_settings",)


# class ExtractsOddRecipientDeleteView(PermissionRequiredMixin, DeleteView):
#     model = settingapp_models.ExtractsOddRecipient
#     success_url = reverse_lazy("settingapp:settings")
#     permission_required = ("settingapp.delete_settings",)
