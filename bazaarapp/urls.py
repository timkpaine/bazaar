from django.urls import path
from bazaarapp import views
import rest_framework
from rest_framework import serializers, status
from rest_framework.response import Response


class MessageSerializer(serializers.Serializer):
    message = serializers.CharField()


class EchoView(rest_framework.views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = MessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

urlpatterns = [
    # path('', views.index, name='bazaar'),
    path(r'api/echo/', EchoView.as_view()),
    path(r'', views.FrontendAppView.as_view()),
]
