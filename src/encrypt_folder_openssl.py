#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Encrypt folder recursively using openssl
Version: 20220105
@author: Pranab Das (GitHub: @pranabdas)
"""
import os
import subprocess
import getpass

# ask folder to encrypt
path = input("Please enter the directoy/path to encrypt: ")

# Remove any trailing '/'
if(path[-1]=='/') :
    path = path[:-1]

# Get absolute path in case relative path is entered
path = os.path.abspath(path)

# New directory name
new_path = path + "_enc"

# check openssl is installed
try:
    openssl_version = subprocess.run(["openssl", "version"], \
        text=True, capture_output=True)
except:
    print("openssl not found. Exiting ...")
    exit()

# ask and confirm password
passwd = getpass.getpass(prompt="Please eneter encryption password: ")
passwd_2 = getpass.getpass(prompt="Please confirm your password: ")

if (passwd == passwd_2):
    pass
else:
    print("Password mismatch! Exiting ...")
    exit()

print("\nPlease wait. Encrypting...")

for root, dirs, files in os.walk(path):

    # Create the folder structure
    if path in root:
        try:
            os.mkdir(root.replace(path, new_path))
        except FileExistsError:
            pass

    # encrypt files using openssl
    if (files != []) :
        for file in files:
            file_path = root + '/' + file
            new_file_path = file_path.replace(path, new_path) + '.enc'

            cmd = f'''openssl enc -e -aes-256-cbc \
                      -salt \
                      -pbkdf2 \
                      -iter 1000000 \
                      -md sha512 \
                      -k {passwd} \
                      -in {file_path} \
                      -out {new_file_path}
                   '''
            subprocess.run(cmd, shell=True, check=True, text=True, \
                universal_newlines=True, executable='/bin/bash')

print("\nDone. Encrypted files are placed under:\n", new_path)

