#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: Decrypt folder recursively using openssl
Version: 20221202
@author: Pranab Das (GitHub: @pranabdas)
Run: python3 filename.py
"""
import os
import subprocess
import getpass

# ask folder to encrypt
path = input("Please enter the directory/path to encrypt: ")

# Remove any trailing '/'
if (path[-1] == "/"):
    path = path[:-1]

# Get absolute path in case relative path is entered
path = os.path.abspath(path)

# New directory name
if (path[-4:] == "_enc"):
    new_path = path[:-4] + "_dec"
else:
    new_path = path + "_dec"

# check openssl is installed
try:
    openssl_version = subprocess.run(["openssl", "version"],
                                     text=True, capture_output=True)
except:
    print("openssl not found. Exiting ...")
    exit()

# ask password
passwd = getpass.getpass(prompt="Please enter decryption password: ")

print("\nPlease wait. Decrypting...")

for root, dirs, files in os.walk(path):

    # Create the folder structure
    if path in root:
        try:
            os.mkdir(root.replace(path, new_path))
        except FileExistsError:
            pass

    # decrypt files
    if (files != []):
        for file in files:
            file_path = root + "/" + file
            new_file_path = file_path.replace(path, new_path) + ".enc"
            if (file_path[-4:] == ".enc"):
                new_file_path = file_path.replace(path, new_path)[:-4]
            else:
                new_file_path = file_path.replace(path, new_path)

            cmd = f'''openssl enc -d -aes-256-cbc \
                      -salt \
                      -iter 1000000 \
                      -md sha512 \
                      -k {passwd} \
                      -in {file_path} \
                      -out {new_file_path}
                   '''
            subprocess.run(cmd, shell=True, check=True, text=True,
                           universal_newlines=True, executable="/bin/bash")

print("\nDone. Decrypted files are placed under:\n", new_path)
