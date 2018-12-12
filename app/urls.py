from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index/$', views.index, name='index'),
    url(r'^login/$', views.login, name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^mine/$', views.mine, name='mine'),
    url(r'^checkemail/$', views.checkemail, name='checkemail'),
    url(r'^shopping/$', views.shopping, name='shopping'),
    url(r'^productDetail/(?P<title>\d+)$', views.productDetail, name='productDetail'),
    url(r'^delorder/$', views.delorder, name='delorder'),
]