from django.db import models



# Create your models here.
class User(models.Model):
    email = models.CharField(max_length=20, verbose_name="邮箱名")
    pwd = models.CharField(max_length=100, verbose_name="密码")
    name = models.CharField(max_length=20, verbose_name="用户名",default=' ')
    icon = models.CharField(max_length=40, default=' ')
    token = models.CharField(max_length=256, default=' ')
    class Meta:
        db_table = 'mgj_user'

class productdetail(models.Model):
    title = models.CharField(max_length=20)
    name = models.CharField(max_length=100)
    img = models.CharField(max_length=100)
    smallImg1 = models.CharField(max_length=100)
    smallImg2 = models.CharField(max_length=100)
    smallImg3 = models.CharField(max_length=100)
    smallImg4 = models.CharField(max_length=100)
    oldprice = models.CharField(max_length=20)
    price = models.CharField(max_length=20)
    store = models.IntegerField()
    sales = models.CharField(max_length=20)
    size = models.CharField(max_length=20)
    number = models.CharField(max_length=20)
    class Meta:
        db_table = 'mgj_goods'

class Cart(models.Model):
    user = models.ForeignKey(User,on_delete=None)
    name = models.CharField(max_length=100)
    number = models.IntegerField()
    price = models.CharField(max_length=100)
    size = models.CharField(max_length=100)
    smallimg = models.CharField(max_length=100)
    is_delete = models.BooleanField(default=False, verbose_name='逻辑删除')
    # order = models.ForeignKey(Order,default="1")

    class Meta:
        db_table = 'mgj_cart'

    def delete(self, using=None, keep_parents=False):
        """重写数据库删除方法实现逻辑删除"""
        self.is_delete = True
        self.save()

class Order(models.Model):
    # 订单号
    identifier = models.CharField(max_length=256)
    # 用户
    user = models.ForeignKey(User)
    # 创建时间
    createtime = models.DateTimeField(auto_now_add=True)
    # 状态
    # -1 过期
    # 0 未付款
    # 1 已付款，未发货
    # 2 已付款，已发货， 【快递】
    # 3 已签收，未评价
    # 4 已评价
    status = models.IntegerField(default=0)
    #cart
    cart = models.ForeignKey(Cart,null=True)
    # name = models.CharField(max_length=100,null=True)
    # number = models.IntegerField(null=True)
    # price = models.CharField(max_length=100,null=True)
    # size = models.CharField(max_length=100,null=True)
    # smallimg = models.CharField(max_length=100,null=True)

    class Meta:
        db_table = 'mgj_order'