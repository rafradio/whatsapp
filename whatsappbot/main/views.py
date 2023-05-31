from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Message
from .forms import MessageForm

@csrf_exempt
def index(request):
    if request.method == "POST":
        listLen = request.body
        json_data = json.loads(listLen)
        if json_data['typeWebhook'] == 'incomingMessageReceived':
            makeRecord("incoming", json_data['messageData']['textMessageData']['textMessage'])
            # type = "incoming"
            s4 = json_data['messageData']['textMessageData']['textMessage']
            # data = {
            #     "type": type,
            #     "text": s4
            # }
            # form = MessageForm(data)
            # form.save()
            with open('answer.txt', 'w') as f:
                f.write(s4)
        if json_data['typeWebhook'] == 'outgoingAPIMessageReceived':
            makeRecord("outgoing", json_data['messageData']['extendedTextMessageData']['text'])
            # type = "outgoing"
            # print(json_data['messageData']['extendedTextMessageData']['text'])
            # data = {
            #     "type": type,
            #     "text": s4
            # }
        print(json_data)

    return render(request, 'main/indexOld.html')


def reactApp(request):
    return render(request, 'index.html')

def makeRecord(type, text):
    data = {
        "type": type,
        "text": text
    }
    form = MessageForm(data)
    form.save()


