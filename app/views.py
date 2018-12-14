import time
import hashlib
import random
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from app.models import User, productdetail, Cart, Order


# Create your views here.

def generate_identifier():
    temp = str(random.randrange(1000,10000)) + str(int(time.time())) + str(random.randrange(1000,10000))
    return temp

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
                return redirect('mgj:index')
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

        return redirect('mgj:index')




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
    data = {}
    if request.method == 'GET':
        token = request.session.get('token')
        if token:
            user = User.objects.get(token=token)
            cart = Cart.objects.filter(user=user).filter(is_delete=0)
            data['cart_num'] = cart.count()
            data['user_name']= user.name
            data['cart'] = cart
            return render(request, 'shopping.html', context=data)
        else:
            return render(request, 'shopping.html')

    else:
        token = request.session.get('token')
        if token:
            user = User.objects.get(token=token)

            name = request.POST.get('name')
            number = request.POST.get('number')
            price = request.POST.get('price')
            size = request.POST.get('size')
            smallimg = request.POST.get('smallimg')

            carts = Cart.objects.filter(user=user).filter(name = name).filter(smallimg = smallimg)
            if carts.filter(size=size).filter(is_delete=0).exists():
                cart = carts.first()
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
                cart.is_delete = 0
                cart.save()
            # 1、 第一次添加的商品是不存在的，要往数据库中添加一条新记录
            return JsonResponse({'msg': '{},添加购物车成功'.format(name), 'number': cart.number, 'status': 1})
        else:
            return JsonResponse({'msg': '添加购物车失败，请先登录', 'status': 0})

def productDetail(request, title):
    token = request.session.get('token')
    if token:
        user = User.objects.get(token=token)
        cart = Cart.objects.filter(user=user).filter(is_delete=0)
        cart_num = cart.count()
        data = {
            'user_name': user.name,
            'cart_num': cart_num
        }
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
        'sales': good.sales,
    }
    return render(request, 'productDetail.html',context=data)


def delorder(request):
    cartid = request.GET.get('cartid')
    cart = Cart.objects.get(pk=cartid)
    cart.delete()
    data = {
        'msg': '购物车删减成功',
        'status': 1
    }
    print(data)
    return JsonResponse(data)


def generateorder(request):
    token = request.session.get('token')
    user = User.objects.get(token=token)
    cartid = request.GET
    identifier = generate_identifier()

    len_ = len(cartid)
    if len_ > 1:
        for i in cartid.items():
            order = Order()
            order.user = user
            order.status = 0
            cart = Cart.objects.get(pk=i[1])
            order.cart = cart
            order.identifier = identifier
            order.save()
            cart.delete()
        data = {
            'msg': '下单成功',
            'status': 1,
            'identifier': identifier
        }
    else:
        order = Order()
        order.user = user
        order.status = 0
        cart = Cart.objects.get(pk=list(cartid.values())[0])
        order.cart = cart
        order.identifier = identifier
        order.save()
        cart.delete()
        data = {
            'msg': '下单成功',
            'status': 1,
            'identifier': identifier
        }
    return JsonResponse(data)

def orderdetail(request,identifier):
    # 找到对应的订单信息
    print(type(identifier))
    token = request.session.get('token')
    user = User.objects.get(token=token)
    cart = Cart.objects.filter(user=user).filter(is_delete=0)
    cart_num = cart.count()
    if identifier == "0":
        orders = Order.objects.filter(user=user.pk)
    else:
        orders= Order.objects.filter(identifier=identifier)
    data = {
        'orders': orders,
        'identifier': identifier,
        'cart_num': cart_num,
        'user_name':user.name
    }
    return render(request, 'orderdetail.html', context=data)

def orderlist(request):
    return None