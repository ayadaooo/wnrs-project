from django.http import JsonResponse
from .models import Card


def get_cards(request):
    cards = Card.objects.all()
    data = [{"level": card.level, "question": card.question} for card in cards]
    return JsonResponse(data, safe=False)
