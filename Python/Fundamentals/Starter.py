# ====================
# == INPUT & OUTPUT ==
# ====================
# number1 = int(input("Insert a number1: "))
# number2 = int(input("Insert a number1: "))
# number3 = int(input("Insert a number1: "))
# print("The numbers are: {},{},{}, and the largest number is: {}, and the smallest number is: {}".format(number1,
# number2, number3, max(number1, number2, number3), min(number1, number2, number3)))
#

# ====================
# ====== RANDOM ======
# ====================
# import random
#
# winnerNumber = random.randint(1, 10)
# userNumber = int(input("Please insert a number between 1 - 10: "))
# if winnerNumber == userNumber:
#     print("You win")
# else:
#     print("You Lose, the number was: {}".format(winnerNumber))


# # ====================
# # ====== Values ======
# # ====================
# print("{}".format(type(True)))
# print("{}".format(type(2+2)))
# print("{}".format(type("HELLO")))
# print("{}".format(type(max(1, 2, 3))))


# # ====================
# # ====== EXERCISE #1 =
# # ====================
# title = "Welcome to the cheese test"
# print(title + "\n" + "="*len(title) + "\n")
# points = 0
#
# option = input("First Question: What do you do, if u see a cheese cake?\n"
#                "A - I run away \n"
#                "B - I bit a little\n"
#                "C - I eat all the cake\n"
#                ": ")
# if option == "A":
#     # This is:  points = points + 0
#     points += 0  # nice
# elif option == "B":
#     # This is:  points = points + 5
#     points += 5
# elif option == "C":
#     points += 10
# else:
#     print("That's an incorrect value")
#     exit()
#
# option = input("Second Question: How do u like ur burger?\n"
#                "A - without cheese \n"
#                "B - With a little cheese\n"
#                "C - With extra cheese\n"
#                ": ")
# if option == "A":
#     # This is:  points = points + 0
#     points += 0  # nice
# elif option == "B":
#     # This is:  points = points + 5
#     points += 5
# elif option == "C":
#     points += 10
# else:
#     print("That's an incorrect value")
#     exit()
#
#
# option = input("Third Question: R u lactose intolerant?\n"
#                "A - Yes \n"
#                "B - No\n"
#                "C - Yes, but i always eat cheese\n"
#                ": ")
# if option == "A":
#     # This is:  points = points + 0
#     points += 0  # nice
# elif option == "B":
#     # This is:  points = points + 5
#     points += 5
# elif option == "C":
#     points += 10
# else:
#     print("That's an incorrect value")
#     exit()
#
# print(points)
#
# if points >= 25:
#     print("Congrats you love the cheese")
# elif points >= 15:
#     print("You just like the cheese")
# else:
#     print("Bro you hate cheese")


# ====================
# ====== EXERCISE #2 =
# ====================
#
# dollar_euro = 0.91
# pound_euro = 1.18
#
# option = input("Select an option:\n"
#                "A.- Covert dollar to euro\n"
#                "B.- Convert euro to dollar\n"
#                "C.- Convert pound to euro\n"
#                "D.- Convert euro to pound\n"
#                ":")
#
# text = "Introduce the amount of {} to convert: "
#
# if option == "A":
#     amount_of_money = float(input(text.format("dollar")))
#     print("The amount of euro is: {}".format(amount_of_money*dollar_euro))
# elif option == "B":
#     amount_of_money = float(input(text.format("Euro")))
#     print("The amount of euro is: {}".format(amount_of_money/dollar_euro))
# elif option == "C":
#     amount_of_money = float(input(text.format("Pound")))
#     print("The amount of euro is: {}".format(amount_of_money*pound_euro))
# elif option == "D":
#     amount_of_money = float(input(text.format("Euro")))
#     print("The amount of euro is: {}".format(amount_of_money/pound_euro))
# else:
#     print("You don't select a correct option")

# ====================
# ====== EXERCISE #3 =
# ====================
# option = input("[I]IOS or [A]Android?: ")
# best_phone = "none"
# if option == "A":
#     option = input("Do you have enough money [Y/N]: ")
#     if option == "Y":
#         option = input("Do you want to change your phone camera [Y/N]: ")
#         if option == "Y":
#             best_phone = "Google Pixel"
#         else:
#             best_phone = "Xiaomi xd"
#     else:
#         best_phone = "Whatever chinese product with andorid"
# elif option == "I":
#     option = input("Do you have enough money [Y/N]: ")
#     if option == "Y":
#         best_phone = "Iphone ultra plus Max"
#     else:
#         best_phone = "Whatever iphone"
# else:
#     print("That's not an option")
#
# print("Your best movil is: {}".format(best_phone))
# print("Your best phone is: " + best_phone)
