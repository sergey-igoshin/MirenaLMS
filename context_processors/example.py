from Menu import MENU


def simple_context_processor(request):
    return {"foo": "bar"}


def menu_context_processor(request):
    return MENU
