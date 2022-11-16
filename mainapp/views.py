from django.contrib.auth.mixins import PermissionRequiredMixin
from django.shortcuts import get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import CreateView, DeleteView, DetailView, ListView, TemplateView, UpdateView

from mainapp import models as mainapp_models


class MainPageView(TemplateView):
    template_name = "mainapp/index.html"


class NewsListView(ListView):
    model = mainapp_models.News
    paginate_by = 5

    def get_queryset(self):
        return super().get_queryset().filter(deleted=False)


class NewsCreateView(PermissionRequiredMixin, CreateView):
    model = mainapp_models.News
    fields = "__all__"
    success_url = reverse_lazy("mainapp:news")
    permission_required = ("mainapp.add_news",)


class NewsDetailView(DetailView):
    model = mainapp_models.News


# class NewsUpdateView(PermissionRequiredMixin, UpdateView):
#     model = mainapp_models.News
#     fields = "__all__"
#     success_url = reverse_lazy("mainapp:news")
#     permission_required = ("mainapp.change_news",)


class NewsDeleteView(PermissionRequiredMixin, DeleteView):
    model = mainapp_models.News
    success_url = reverse_lazy("mainapp:news")
    permission_required = ("mainapp.delete_news",)


class CoursesListView(TemplateView):
    template_name = "mainapp/courses_list.html"

    def get_context_data(self, **kwargs):
        context = super(CoursesListView, self).get_context_data(**kwargs)
        context["objects"] = mainapp_models.Courses.objects.all()[:7]
        return context


class CoursesDetailView(TemplateView):
    template_name = "mainapp/courses_detail.html"

    def get_context_data(self, pk=None, **kwargs):
        context = super(CoursesDetailView, self).get_context_data(**kwargs)
        context["course_object"] = get_object_or_404(mainapp_models.Courses, pk=pk)
        context["lessons"] = mainapp_models.Lesson.objects.filter(course=context["course_object"])
        context["teachers"] = mainapp_models.CourseTeachers.objects.filter(course=context["course_object"])
        return context


class ContactsPageView(TemplateView):
    template_name = "mainapp/contacts.html"


class DocSitePageView(TemplateView):
    template_name = "mainapp/doc_site.html"


class NewsUpdateView(PermissionRequiredMixin, UpdateView):
    model = mainapp_models.News
    fields = "__all__"
    success_url = reverse_lazy("mainapp:news")
    permission_required = ("mainapp.change_news",)


# class NewsUpdateView(LoginRequiredMixin, TemplateView):
#     template_name = "mainapp/news_form.html"
#     login_url = reverse_lazy("authapp:login")


#     def post(self, request, *args, **kwargs):
#         try:
#             if request.POST.get("title"):
#                 print(request.POST.get("title"))
#                 # request.object.title = request.POST.get("title")
#             # if request.POST.get("first_name"):
#             #     request.user.first_name = request.POST.get("first_name")
#             # if request.POST.get("last_name"):
#             #     request.user.last_name = request.POST.get("last_name")
#             # if request.POST.get("age"):
#             #     request.user.age = request.POST.get("age")
#             # if request.POST.get("email"):
#             #     request.user.email = request.POST.get("email")

#             messages.add_message(request, messages.INFO, _("Saved!"))
#         except Exception as exp:
#             messages.add_message(
#                 request,
#                 messages.WARNING,
#                 mark_safe(f"Something goes worng:<br>{exp}"),
#             )
#         return HttpResponseRedirect(reverse_lazy("mainapp:news"))
