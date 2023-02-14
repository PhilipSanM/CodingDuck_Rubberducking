MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}


def insert_coins():
    quarters = int(input("how many quarters?"))
    dimes = int(input("how many dimes?"))
    nickles = int(input("how many nickles?"))
    pennies = int(input("how many pennies?"))
    coins = [quarters, dimes, nickles, pennies]
    return coins


def check_status():
    pass


def report():
    pass


def make_latte():
    if check_status():
        user_coins = insert_coins()


def make_espresso():
    pass


def make_cappuccino():
    pass


def main():
    print(MENU['espresso']['ingredients']['water'])


if __name__ == "__main__":
    main()
