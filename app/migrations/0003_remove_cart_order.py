# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-12-13 02:44
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20181213_1043'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='order',
        ),
    ]