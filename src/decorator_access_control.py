def login_required(f):
    def wrapper(user):
        from getpass import getpass
        name = input("Please enter username: ")
        password = getpass("Please enter your password: ")
        if (name == user["name"]) and (password == user["password"]):
            f(user)
        else:
            print("Access denied!")

    return wrapper


@login_required
def restricted_program(user):
    print("Welcome", user["name"])


if __name__ == "__main__":
    user = {"name": "python", "password": "zft9"}
    restricted_program(user)
