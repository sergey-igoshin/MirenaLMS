from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.views.generic import RedirectView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", RedirectView.as_view(url="mainapp/")),
    path("social_auth/", include("social_django.urls", namespace="social")),
    path("mainapp/", include("mainapp.urls", namespace="mainapp")),
    path("authapp/", include("authapp.urls", namespace="authapp")),
    path("settings/", include("settingapp.urls", namespace="settingapp")),  # "Настройки"
    path("extracts/", include("extractapp.urls", namespace="extractapp")),  # "Выписки"
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
