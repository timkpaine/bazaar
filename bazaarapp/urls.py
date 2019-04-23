from django.urls import path
from bazaarapp import views

urlpatterns = [
    # path('', views.index, name='bazaar'),
    path(r'', views.FrontendAppView.as_view()),
]
