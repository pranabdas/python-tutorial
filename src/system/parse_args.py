'''
Collect command-line options in a dictionary
python3 parse_args.py -i input.txt -o results.txt
'''


def get_opts(argv):
    opts = {}
    while argv:
        if argv[0][0] == '-':  # find "-name value" pairs
            opts[argv[0]] = argv[1]  # dict key is "-name" arg
            argv = argv[2:]
        else:
            argv = argv[1:]

    return opts


if __name__ == '__main__':
    from sys import argv  # example client code
    my_args = get_opts(argv)

    if '-i' in my_args:
        print(my_args['-i'])

    print(my_args)
