#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Calculate individual tax in Singapore
Version: 20220107
@author: Pranab Das (GitHub: @pranabdas)
"""

income = input("Please enter your taxable yearly income (in SGD): ")

# check input is not null
if income:
    pass
else:
    print("Input not recognized.")
    exit()

# check input is number
try:
    income = float(income)
except:
    print("Please enter number (float or integer) input.")
    exit()

if   (income <=      0):
    print("You have no positive income. There is no tax.")
    exit()
elif (income <=  20000):
    print("Good news. You don't have to pay any income tax.")
    exit()
elif (income <=  30000):
    tax =         (income -  20000) *  2.0 / 100
elif (income <=  40000):
    tax =   200 + (income -  30000) *  3.5 / 100
elif (income <=  80000):
    tax =   550 + (income -  40000) *  7.0 / 100
elif (income <= 120000):
    tax =  3350 + (income -  80000) * 11.5 / 100
elif (income <= 160000):
    tax =  7950 + (income - 120000) * 15.0 / 100
elif (income <= 200000):
    tax = 13950 + (income - 160000) * 18.0 / 100
elif (income <= 240000):
    tax = 21150 + (income - 200000) * 19.0 / 100
elif (income <= 280000):
    tax = 28750 + (income - 240000) * 19.5 / 100
elif (income <= 320000):
    tax = 36550 + (income - 280000) * 20.0 / 100
else:
    tax = 44550 + (income - 320000) * 22.0 / 100

print("Payable tax: SGD", round(tax, 2))
print("Your take home amount: SGD", round(income-tax, 2))

