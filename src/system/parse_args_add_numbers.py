'''
python3 parse_args_add_numbers.py 3 4 5 6
'''
import sys

args = sys.argv
args.pop(0)  # pop the first item which is program name itself

total = 0

for nums in args:
    total = total + float(nums)

print("total =", total)
