'''
Program to detect platform/operating system
'''
import os
import sys
import subprocess
import glob

PLATFORM = sys.platform

if PLATFORM == "linux":
    print("hello linux")
elif PLATFORM[:3] == "win":
    print("hello Windows")
elif PLATFORM == "darwin":
    print("hello macOS")


# Get current working directory
current_directory = os.getcwd()
print(current_directory)

# change directory
os.chdir("/tmp")
print(os.getcwd())
os.chdir(current_directory)
print(os.getcwd())

# portability constants
print("os.pathsep:", os.pathsep)
print("os.sep:", os.sep)
print("os.pardir:", os.pardir)
print("os.curdir:", os.curdir)
print("os.linesep:", os.linesep)  # non-printing characters

# os.path tools
# you may create a test file: echo "example.com" > /tmp/links.txt
print(os.path.isdir("/tmp"))
print(os.path.isfile("/tmp/links.txt"))
print(os.path.exists("/tmp"))
print(os.path.getsize("/tmp/links.txt"))

print(os.path.split("/tmp/links.txt"))
print(os.path.join("/tmp", "links.txt"))
print(os.path.dirname("/tmp/links.txt"))
print(os.path.basename("/tmp/links.txt"))

PATHNAME = "/tmp/links.txt"
print(PATHNAME.split(os.sep))
print(os.path.split(PATHNAME))

# run shell commands
print("\nruns system command: ls /tmp")
os.system('ls /tmp')

# subprocess module
print("\nrun system command via subprocess:")
subprocess.call('ls /tmp', shell=True)

# glob
print("\nglob example:")
print(glob.glob("/workspaces/python-tutorial/src/*.py"))
print(glob.glob("*"))
