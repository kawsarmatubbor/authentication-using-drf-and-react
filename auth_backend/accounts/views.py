from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from . import serializers


@api_view(['POST'])
def registration_view(request):
    serializer = serializers.RegistrationSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_view(request):
    serializer = serializers.ProfileSerializer(request.user)
    return Response(serializer.data)