# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-12-10 13:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='productdetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('name', models.CharField(max_length=100)),
                ('img', models.CharField(max_length=100)),
                ('smallImg1', models.CharField(max_length=100)),
                ('smallImg2', models.CharField(max_length=100)),
                ('smallImg3', models.CharField(max_length=100)),
                ('smallImg4', models.CharField(max_length=100)),
                ('oldprice', models.CharField(max_length=20)),
                ('price', models.CharField(max_length=20)),
                ('store', models.IntegerField()),
                ('sales', models.CharField(max_length=20)),
                ('size', models.CharField(max_length=20)),
                ('number', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'mgj_goods',
            },
        ),
    ]
