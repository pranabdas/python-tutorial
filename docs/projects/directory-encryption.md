### Encrypt and decrypt directory using python pycrypto (AES-256)
Here we will encrypt a directory recursively, and later decrypt the same. 

##### Encryption:


```python
import os
from getpass import getpass
from simplecrypt import encrypt, decrypt

path = '.' # let's do it with current directory

# Remove any trailing '/'
if(path[-1]=='/') :
    path = path[:-1]

# Get absolute path in case relative path is entered 
path = os.path.abspath(path)

# New directory name
new_path = path + "_enc"

password = getpass("Enter encryption password: ")
print('Please wait. Encrypting...')

for root, dirs, files in os.walk(path):  
    
    # Create the folder structure
    if path in root:
        try:
            os.mkdir(root.replace(path, new_path))
        except FileExistsError:
            pass
    
    # Open, encrypt, and write each file        
    if (files != []) : 
        for file in files: 
            file_path = root + '/' + file
            fid = open(file_path, 'rb')
            data = fid.read()
            fid.close()
            encdata = encrypt(password, data)
            
            # append file names with .enc prefix
            new_file_path = file_path.replace(path, new_path) + '.enc'
            fid = open(new_file_path, 'wb')
            fid.write(encdata)
            fid.close()

print('Done!')
```

    Enter encryption password: ········
    Please wait. Encrypting...
    Done!


##### Decryption:


```python
import os
from getpass import getpass
from simplecrypt import encrypt, decrypt

path = '../python_notes_enc/' 

# Remove any trailing '/'
if(path[-1]=='/') :
    path = path[:-1]

# Get absolute path in case relative path is entered
path = os.path.abspath(path)

# New directory name
new_path = path + '_copy'

password = getpass("Enter decryption password: ")
print('Please wait. Decrypting...')
    
for root, dirs, files in os.walk(path):   
    
    # Create new folder structure
    if path in root:
        try:
            os.mkdir(root.replace(path, new_path))
        except FileExistsError:
            pass
    
    # Open, decrypt, and save each file
    if (files != []) : 
        for file in files: 
            file_path = root + '/' + file
            fid = open(file_path, 'rb')
            encdata = fid.read()
            fid.close()
            data = decrypt(password, encdata)
            
            # Remove the .enc prefix from file names
            new_file_path = file_path.replace(path, new_path)[:-4]
            fid = open(new_file_path, 'wb')
            fid.write(data)
            fid.close()

print('Done!')
```

    Enter decryption password: ········
    Please wait. Decrypting...
    Done!
