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
    user = models.ForeignKey(User)
    name = models.CharField(max_length=100)
    number = models.IntegerField()
    price = models.CharField(max_length=100)
    size = models.CharField(max_length=100)
    smallimg = models.CharField(max_length=100)
    class Meta:
        db_table = 'mgj_cart'
