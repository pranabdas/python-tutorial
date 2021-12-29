---
title: Miscellaneous projects
sidebar_label: Miscellaneous
---

### Running shell commands in python

Single line shell commands example:
```python
import subprocess

subprocess.run("echo 'hello'", shell=True, check=True, text=True)

subprocess.run('cd /tmp; pwd', shell=True)
```

Multiline example:
```python

cmd = '''cd /tmp;
pwd;
'''

subprocess.run(cmd, shell=True, check=True, text=True, \
    universal_newlines=True, executable='/bin/bash')
```

:::tip

Conversely, you can also include [python code in shell script](
https://pranabdas.github.io/linux/shell-scripting#running-python-code-in-bash-script).

:::

### Jupyter notebooks of various python projects

- [Quantum Design SQUID data loader](
https://github.com/pranabdas/python-tutorial/blob/master/notebooks/Quantum-Design-SQIUD-data-loader.ipynb)
- [How to encrypt (and decrypt) a directory?](
https://github.com/pranabdas/python-tutorial/blob/master/notebooks/encrypt-decrypt-directory.ipynb)
- [Encryption pandas dataframe](
https://github.com/pranabdas/python-tutorial/blob/master/notebooks/dataframe-encryption.ipynb)
- [Encrypt and upload to Dropbox](
https://github.com/pranabdas/python-tutorial/blob/master/notebooks/encrypt-dropbox.ipynb)
- [Save any data as text in Google Docs](
https://github.com/pranabdas/python-tutorial/blob/master/notebooks/save-any-data-as-text-in-google-docs.ipynb)
- [Singapore traffic camera](
https://github.com/pranabdas/python-tutorial/blob/master/notebooks/singapore-traffic-camera.ipynb)
