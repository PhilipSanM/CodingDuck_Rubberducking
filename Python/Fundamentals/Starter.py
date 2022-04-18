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


