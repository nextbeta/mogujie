# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-12-12 04:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20181212_1214'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='number',
            field=models.IntegerField(),
        ),
    ]
