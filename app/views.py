import time

import hashlib
import random
from django.http import JsonResponse

from django.shortcuts import render, redirect


# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from app.models import User, productdetail, Cart


def index(request):
    token = request.session.get('token')
    data = {}
    mgj_goods = productdetail.objects.all()
    data['mgj_goods'] = mgj_goods;
    if token:
        user = User.objects.get(token=token)
        data['user_name'] = user.name
        return render(request, 'mainPage.html', context=data)
    return render(request, 'mainPage.html', context=data)


def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        email = request.POST.get('email')
        pwd = request.POST.get('password')
        try:
            # 不存在，会抛出异常
            # 多个时，会抛出异常　【email是唯一约束】
            user = User.objects.get(email=email)
            if user.pwd == generate_pwd(pwd):
                user.token = generate_token()
                user.save()
                request.session['token'] = user.token
                return redirect('mgj:mine')
            else:
                return render(request, 'login.html', context={'p_err': '密码错误'})
        except:
            return render(request, 'login.html', context={'u_err': '账号不存在'})


def generate_pwd(pwd):
    md5 = hashlib.md5()
    md5.update(pwd.encode('utf-8'))
    return  md5.hexdigest()


def generate_token():
    token = str(time.time()) + str(random.random())
    md5 = hashlib.md5()
    md5.update(token.encode('utf-8'))
    return md5.hexdigest()


def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        user = User()
        user.email = request.POST.get('email')
        user.pwd = generate_pwd(request.POST.get('password'))
        user.name = request.POST.get('name')

        # 状态保持
        user.token = generate_token()
        user.save()
        request.session['token'] = user.token

        return redirect('mgj:mine')

def mine(request):
    # 获取用户信息
    token = request.session.get('token')
    mgj_goods = productdetail.objects.all()

    data = {}

    if token:
        user = User.objects.get(token=token)
        data['name'] = user.name
        data['icon'] = user.icon
        data['mgj_goods'] = mgj_goods

    return render(request, 'mainPage.html', context=data)


def checkemail(request):

    # 邮箱
    email = request.GET.get('email')

    users = User.objects.filter(email=email)
    if users.exists():
        return JsonResponse({'msg': '账号已被占用!', 'status': 0})
    else:
        return JsonResponse({'msg': '账号是可以使用!', 'status': 1})

@csrf_exempt
def shopping(request):
    if request.method == 'GET':
        return render(request, 'shopping.html')
    elif request.method == 'POST':
        token = request.session.get('token')
        user = User.objects.get(token=token)

        name = request.POST.get('name')
        number = request.POST.get('number')
        print(number)
        price = request.POST.get('price')
        size = request.POST.get('size')
        smallimg = request.POST.get('smallimg')

        carts = Cart.objects.filter(user=user).filter(name = name).filter(smallimg = smallimg)
        if carts.filter(size=size).exists():
            cart = carts.first()
            print(cart)
            cart.number += eval(number)
            cart.save()
        else:
            cart = Cart()
            cart.user = user
            cart.name = name
            cart.price = price
            cart.size = size
            cart.smallimg = smallimg
            cart.number = number
            cart.save()
        # 1、 第一次添加的商品是不存在的，要往数据库中添加一条新记录
        return JsonResponse({'msg': '{},添加购物车成功'.format(name), 'number': cart.number, 'status': 1})


def productDetail(request, title):
    goods = productdetail.objects.filter(title=title)
    good = goods.first()
    data = {
        'name': good.name,
        'img' : good.img,
        'smallImg1': good.smallImg1,
        'smallImg2': good.smallImg2,
        'smallImg3': good.smallImg3,
        'smallImg4': good.smallImg4,
        'oldprice' : good.oldprice,
        'price': good.price,
        'store': good.store,
        'sales': good.sales
    }
    return render(request, 'productDetail.html',context=data)