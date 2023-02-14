"""
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==--=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-  D A Y  #17  =-=-=-=-=-=-=-=-=-=-
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 I N T E R M E D I A T E
 OOP

 Date: February - 12 - 2023

"""


# For a class remember to use PascalCase  than camelCase
class User:
    def __init__(self, user_id, user_name='kaka'):  # Constructor
        self.user_id = user_id
        self.userName = user_name
        self.followers = 0
        self.following = 0

    #       Methods
    def follow(self, user):  # Always u need a self parameter
        user.followers += 1
        self.following += 1


user_2 = User(2)

user_1 = User(1)
print(user_1.user_id)
print(user_1.userName)
print(user_1)

user_1.follow(user_2)
print(user_1.followers)
print(user_2.followers)


class Car:
    def __init__(self):
        self.seats = 2
