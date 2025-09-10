from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from . import models

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only = True,
        required = True,
        validators = [validate_password]
    )
    password_2 = serializers.CharField(
        write_only = True,
        required = True
    )
    class Meta:
        model = models.CustomUser
        fields = ['id', 'phone_number', 'first_name', 'last_name', 'address', 'password', 'password_2']
        extra_kwargs = {
            'password' : {'write_only' : True},
            'address' : {'required': False}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password_2']:
            raise serializers.ValidationError("Passwords don't match.")
        return attrs

    def create(self, validated_data):
        user = models.CustomUser.objects.create_user(
            phone_number = validated_data['phone_number'],
            first_name = validated_data.get('first_name', ''),
            last_name = validated_data.get('last_name', ''),
            address = validated_data.get('address', ''),
            password = validated_data['password']
        )
        return user
    
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ['id', 'phone_number', 'first_name', 'last_name', 'address']