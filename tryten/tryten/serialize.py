from rest_framework import serializers
from tryten.models import ToDo
class ToDoSerializer(serializers.ModelSerializer):
	class Meta:
		model = ToDo
		fields='id', 'text', 'done'