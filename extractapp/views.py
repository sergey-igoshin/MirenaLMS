# import logging
# import math
# from dateutil.parser import parse
# from datetime import datetime

# from django.conf import settings
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.http import HttpResponseRedirect

# from django.shortcuts import get_object_or_404
# from django.template.loader import render_to_string
from django.urls import reverse_lazy
from django.views.generic import DeleteView, ListView, TemplateView, UpdateView

from extractapp import models as extractapp_models
from settingapp import models as settingapp_models
from settingapp.utils import ParseFile, Utilites

# from django.forms.models import model_to_dict
# from django.core import serializers
# import json
# from django.http.response import HttpResponseRedirect
# u = Utilites()


class ExtractsListView(PermissionRequiredMixin, ListView, Utilites):
    model = extractapp_models.Extracts
    permission_required = ("extractapp.add_extracts",)
    paginate_by = 10

    def get_queryset(self, *args, **kwargs):
        return super().get_queryset().filter(deleted=False)

    def get_context_data(self, **kwargs):
        # Get all previous data
        context = super().get_context_data(**kwargs)
        # Create your own data
        context["odd_expenditure"] = self.two_parts(extractapp_models.ExtractsOddExpenditure.objects.all())
        context["odd_incom"] = self.two_parts(extractapp_models.ExtractsOddIncom.objects.all())
        context["page"] = self.request.path
        context["menu_static"] = settingapp_models.Menu.objects.filter(deleted=False, menu=True)
        context["menu_scroll"] = settingapp_models.Menu.objects.filter(deleted=False, menu=False)
        return context


class ExtractsCreateView(PermissionRequiredMixin, TemplateView, ParseFile):
    permission_required = ("extractapp.add_extracts",)
    page = "/extracts/"

    def post(self, request, *args, **kwargs):
        file = request.FILES["file"]
        self.parse_file(file)
        count = extractapp_models.Extracts.objects.filter(transaction=False, deleted=False).count()
        settingapp_models.Menu.objects.filter(url=self.page).update(badge=count)

        return HttpResponseRedirect(reverse_lazy("extractapp:extracts"))


class ExtractsUpdateView(PermissionRequiredMixin, UpdateView, Utilites):
    model = extractapp_models.Extracts
    fields = []
    success_url = reverse_lazy("extractapp:extracts")
    permission_required = ("extractapp.change_extracts",)
    page = "/extracts/"

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        self.object.data = self.validate_values(self.request.POST)
        self.object.transaction = self.is_transaction(self.object)
        self.object.save()

        count = super().get_queryset().filter(transaction=False, deleted=False).count()
        settingapp_models.Menu.objects.filter(url=self.page).update(badge=count)

        return super().post(request, *args, **kwargs)


class ExtractsDeleteView(PermissionRequiredMixin, DeleteView):
    model = extractapp_models.Extracts
    success_url = reverse_lazy("extractapp:extracts")
    permission_required = ("extractapp.delete_extracts",)
