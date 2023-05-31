from rest_framework.response import Response
from rest_framework.decorators import api_view
from main.models import Message
import json 
from datetime import date, datetime
from django.core.serializers.json import DjangoJSONEncoder

@api_view(['GET'])
def getData(request):
    dictMessages = {}
    arrMessag = []
    text = 'hi'
    if request.method == 'GET': 
        messages = Message.objects.all()
        
        for message in messages:
            data = {
                "id": message.id,
                "type": message.type,
                "text": message.text
            }
            arrMessag.append(data)
        # dictMessages = {
        #         'messages': arrMessag
        #     }
   
        with open('answer.txt', 'r') as reader:
            text = reader.read()
        with open('answer1.json', 'w') as f:
            f.write(json.dumps(dictMessages))
        
    return Response(json.dumps(arrMessag))

