### Encrypt file using AES-256 before backing up to Dropbox

```python
import dropbox 
from getpass import getpass
from simplecrypt import encrypt, decrypt
from io import BytesIO
import numpy as np

# Open the text file and read as binary 
#fid = open('/Users/Pranab/Dropbox/Shared/ARPES_PC/Plots/SNO_Mar2019.pxp', 'rb')
fid = open('example_spectrum.txt', 'rb')
file_bin_data = fid.read()
fid.close()

# encrypt your data 
encdata = encrypt(getpass("Data encryption password: "), file_bin_data)

# Get your Dropbox Access token and create dropbox object
# Here I've encrypted access token, you can get yours at 
# https://www.dropbox.com/developers/apps/create

# dbx = dropbox.Dropbox('Access token')
dbx = dropbox.Dropbox(decrypt(getpass("Dropbox access token password: "), b'sc\x00\x02\xb6\xd2q\xc2\x7fs\xc3H\x07\x96*\xacS\xb3w$a"\xf7\x0c\x8b\xce\xf6\xcb\x08\xd7\xff\xf4\xc8\'\xaa\xb3Q\xecg\xaf\x04T3\xd9\xe1\xcd\xb1\n\xefN\xedE\xf1\xaf4\x17\xebRE\xf1\xf6\xa9,X=\x88n\x12y\xc86N\xa0\xaf\xbf#\x82\x86\xab\x96\xf9\x86\xbaHc\xef\x8cq?i\x96\xa7@\xf5\x92a\xf0\x91\xbe\x1c\n\x86^\xfe`X\xe4\xa7\x08NN\x08\x9c/\xa4{v\x19n\x1a<\x85@\x9a\x07\x8a\xa4\xc8\x8c\x158\xf3').decode('utf8'))

# Write encrypted data to specific dropbox location (Note the Overwrite mode)
# If the file size is more than 150 MB, we need to create upload session. 

CHUNK_SIZE = 150*1024*1024
file_size = len(encdata)

if file_size <= CHUNK_SIZE: 
    dbx.files_upload(encdata, '/ARPES_Data/data.enc', mode=dropbox.files.WriteMode.overwrite)
    
else:
    encdata = BytesIO(encdata)
    upload_session_start_result = dbx.files_upload_session_start(encdata.read(CHUNK_SIZE))
    cursor = dropbox.files.UploadSessionCursor(session_id=upload_session_start_result.session_id, offset=encdata.tell())
    commit = dropbox.files.CommitInfo(path="/ARPES_Data/large_data.enc", mode=dropbox.files.WriteMode.overwrite)

    while encdata.tell() < file_size:
        if ((file_size - encdata.tell()) <= CHUNK_SIZE):
            dbx.files_upload_session_finish(encdata.read(CHUNK_SIZE), cursor, commit)
        else:
            dbx.files_upload_session_append(encdata.read(CHUNK_SIZE), cursor.session_id, cursor.offset)
            cursor.offset = encdata.tell()
```

    Data encryption password: ········
    Dropbox access token password: ········

#### Read from Dropbox and decrypt 

```python
# Read the file from Dropbox
md, read_encdata = dbx.files_download('/ARPES_Data/large_data.bin')
read_encdata = read_encdata.content

# Decrypt and write to local storage 
data_bin = decrypt(getpass("Decryption password: "), read_encdata)

fid = open('file.pxp', 'wb')
fid.write(data_bin)
fid.close()
```

    Decryption password: ········
