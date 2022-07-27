# # ====================================================================
# # ===================== FLOW WITH IF =================================
# # ====================================================================
# print("Welcome to the rollercoaster!")
standard_input = '34'
# height = int(input("What is your height in cm?")) 

# if height> 120:
#     print("You can ride the roller coster")
# else:
#     print("Sorry, you have to grwo taller befpre you can raide.")

# # >= <=
# # == equal if is equal
# # != not equal to

# # ====================================================================
# # ===================== CHALLENGE =================================
# # ====================================================================
# # Write a program that works out whether if a given number is an odd or even number.

# # Even numbers can be divided by 2 with no remainder.

# # e.g. 86 is even because 86 ÷ 2 = 43

# # 43 does not have any decimal places. Therefore the division is clean.

# # e.g. 59 is odd because 59 ÷ 2 = 29.5

# # 🚨 Don't change the code below 👇
# number = int(input("Which number do you want to check? "))
# # 🚨 Don't change the code above 👆

# #Write your code below this line 👇

# if number % 2 == 0:
#     print("This is an even number.")
# else:
#     print("This is an odd number.")


# # ====================================================================
# # =================== NESTED IF / ELIF ===============================
# # ====================================================================
# print("Welcome to the rollercoaster!")

# height = int(input("What is your height in cm?")) 

# if height> 120:
#     print("You can ride the roller coster")
#     age = int(input("What is your age?"))
#     if age < 12:
#         print("Please pay $5")
#     elif age <= 18:
#         print("Please pay $7")
#     else:
#         print("Please pay $12")

# else:
#     print("Sorry, you have to grwo taller befpre you can raide.")

# # ====================================================================
# # ===================== CHALLENGE =================================
# # ====================================================================
# # Write a program that interprets the Body Mass Index (BMI) based on a user's weight and height.

# # It should tell them the interpretation of their BMI based on the BMI value.

# # Under 18.5 they are underweight
# # Over 18.5 but below 25 they have a normal weight
# # Over 25 but below 30 they are slightly overweight
# # Over 30 but below 35 they are obese
# # Above 35 they are clinically obese.

# # 🚨 Don't change the code below 👇
# height = float(input("enter your height in m: "))
# weight = float(input("enter your weight in kg: "))
# # 🚨 Don't change the code above 👆

# #Write your code below this line 👇

# bmi = weight / height**2
# if bmi < 18.5:
#     print(f"Your BMI is {int(round(bmi))}, you are underweight.")
# elif bmi < 25:
#     print(f"Your BMI is {int(round(bmi))}, you have a normal weight.")
# elif bmi < 30:
#     print(f"Your BMI is {int(round(bmi))}, you are slightly overweight.")
# elif bmi < 35:
#     print(f"Your BMI is {int(round(bmi))}, you are obese.")
# else:
#     print(f"Your BMI is {int(round(bmi))}, you are clinically obese.")

# # # ====================================================================
# # # ===================== CHALLENGE =================================
# # # ====================================================================

# # Write a program that works out whether if a given 
# # year is a leap year. A normal year has 365 days, leap years have 366, 
# # with an extra day in February. The reason why we have
# # leap years is really fascinating, this video does it more justice:

# # on every year that is evenly divisible by 4 **except** 
# # every year that is evenly divisible 
# # by 100 **unless** the year is also evenly divisible by 400

# # 🚨 Don't change the code below 👇
# year = int(input("Which year do you want to check? "))
# # 🚨 Don't change the code above 👆

# #Write your code below this line 👇

# if year % 4 == 0:
#     leap_year = True
#     if year % 100 == 0:
#         leap_year = False
#         if year % 400 == 0:
#             leap_year = True
#         else:
#             leap_year = False
#     else:
#         leap_year = True
# else:
#     leap_year = False

# if leap_year:
#     print("Leap year.")
# else:
#     print("Not leap year.")


# # ====================================================================
# # =================== MULTIPLE IF STATEMENT ==========================
# # ====================================================================
# print("Welcome to the rollercoaster!")

# height = int(input("What is your height in cm?")) 

# if height> 120:
#     print("You can ride the roller coster")
#     age = int(input("What is your age?"))
#     if age < 12:
#         print("Child tickets are $5")
#         bill = 5
#     elif age <= 18:
#         print("Your tickets are $7")
#         bill = 7
#     else:
#         print("Adult tickets are $12")
#         bill = 12
#     want_photo = input("Do you want a photo taken? Y or N.")
#     if want_photo =="Y":
#         bill += 3
#     print(f"You have to pay ${bill}")

# else:
#     print("Sorry, you have to grwo taller befpre you can raide.")


# # ====================================================================
# # ====================== PIZZA ORDER =================================
# # ====================================================================
# # 🚨 Don't change the code below 👇
# print("Welcome to Python Pizza Deliveries!")
# size = input("What size pizza do you want? S, M, or L ")
# add_pepperoni = input("Do you want pepperoni? Y or N ")
# extra_cheese = input("Do you want extra cheese? Y or N ")
# # 🚨 Don't change the code above 👆

# #Write your code below this line 👇
# bill = 0
# if size == 'S':
#     bill = 15
#     if add_pepperoni == 'Y':
#         bill += 2
# elif size == 'M':
#     bill = 20
#     if add_pepperoni == 'Y':
#         bill += 3
# elif size == 'L':
#     bill = 25
#     if add_pepperoni == 'Y':
#         bill += 3
# else:
#     print("Select a correct order")
# if extra_cheese == 'Y':
#     bill += 1

# print(f"Your final bill is: ${bill}.")


# # # ====================================================================
# # # ===================== LOGICAL OPERATORS ============================
# # # ====================================================================

# # and
# # or
# # not
# if height> 120:
#     print("You can ride the roller coster")
#     age = int(input("What is your age?"))
#     if age < 12:
#         print("Child tickets are $5")
#         bill = 5
#     elif age <= 18:
#         print("Your tickets are $7")
#         bill = 7
#     elif age >= 45 and age <= 55:
#         print("Have a free ride on us!")
#     else:
#         print("Adult tickets are $12")
#         bill = 12
#     want_photo = input("Do you want a photo taken? Y or N.")
#     if want_photo =="Y":
#         bill += 3
#     print(f"You have to pay ${bill}")

# else:
#     print("Sorry, you have to grwo taller befpre you can raide.")



# You are going to write a program that tests the compatibility between two people.

# To work out the love score between two people:

# Take both people's names and check for the number of times the letters in the 
# word TRUE occurs. Then check for the number of times the letters in the word LOVE occurs. 
# Then combine 
# these numbers to make a 2 digit number.

# For Love Scores less than 10 or greater than 90, the message should be:

# "Your score is **x**, you go together like coke and mentos."

# For Love Scores between 40 and 50, the message should be:

# "Your score is **y**, you are alright together."

# Otherwise, the message will just be their score. e.g.:

# "Your score is **z**."

# # # ====================================================================
# # # ===================== CHALLENGE =================================
# # # ====================================================================
# # 🚨 Don't change the code below 👇
# print("Welcome to the Love Calculator!")
# name1 = input("What is your name? \n")
# name2 = input("What is their name? \n")
# # 🚨 Don't change the code above 👆

# #Write your code below this line 👇
# score_d = 0
# score_u = 0
# names = (name1 + name2).lower()
# score_d += names.count('t')
# score_d += names.count('r')
# score_d += names.count('u')
# score_d += names.count('e')
# score_u += names.count('l')
# score_u += names.count('o')
# score_u += names.count('v')
# score_u += names.count('e')

# score = int(str(score_d) + str(score_u))
# if score < 10 or score > 90:
#     print(f"Your score is {score}, you go together like coke and mentos.")
# elif score > 40 and score < 50:
#     print(f"Your score is {score}, you are alright together.")
# else:
#     print(f"Your score is {score}.")

# # ====================================================================
# # =================== TREASURE ISLAND ================================
# # ====================================================================

print('''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/_____ /
*******************************************************************************
''')
print("Welcome to Treasure Island.")
print("Your mission is to find the treasure.")

#https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Treasure%20Island%20Conditional.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1oDe4ehjWZipYRsVfeAx2HyB7LCQ8_Fvi%26export%3Ddownload

#Write your code below this line 👇

choice1 = input(
    'You\'re at a cross road. Where do you want to go? Type "left" or "right" \n'
).lower()
if choice1 == "left":
    choice2 = input(
        'You\'ve come to a lake. There is an island in the middle of the lake. Type "wait" to wait for a boat. Type "swim" to swim across. \n'
    ).lower()
    if choice2 == "wait":
        choice3 = input(
            "You arrive at the island unharmed. There is a house with 3 doors. One red, one yellow and one blue. Which colour do you choose? \n"
        ).lower()
        if choice3 == "red":
            print("It's a room full of fire. Game Over.")
        elif choice3 == "yellow":
            print("You found the treasure! You Win!")
        elif choice3 == "blue":
            print("You enter a room of beasts. Game Over.")
        else:
            print("You chose a door that doesn't exist. Game Over.")
    else:
        print("You get attacked by an angry trout. Game Over.")
else:
    print("You fell into a hole. Game Over.")