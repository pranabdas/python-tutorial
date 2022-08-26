#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Add two numbers (integers or float).
"""


from typing import Union


def add_two_numbers(a: Union[int, float], b: Union[int, float]) -> Union[int, float]:
    '''
    add_two_numbers(2, 2.5)
    '''
    return a + b


if __name__ == "__main__":
    print(add_two_numbers(3, 4))
    print(add_two_numbers(3.2, 4.5))
    print(add_two_numbers(3, 4.5))
