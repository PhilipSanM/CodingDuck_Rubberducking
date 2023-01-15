# # ======================================================================
# # ======================== RANDOM MODULE ===============================
# # ======================================================================
# import random 
# # import my-module

# random_interger = random.randint(1,10)
# print(random_interger)
# # print(pi)

# #This is from 0.000000 to 0.999999
# random_float = random.random()
# print(random_float)

# # Now if you multiply this for a number like 5
# #  0.000000 - 4.99999999
# # Expanding that range
# print(random_float*5)
# # # ======================================================================
# # # ======================= CODING EXERCISE ===============================
# # # ======================================================================

# #Write your code below this line 👇
# #Hint: Remember to import the random module first. 🎲
# import random

# number = random.randint(0, 1)
# if number == 0:
#     print('Heads')
# else:
#     print('Tails')


# # ======================================================================
# # =======================  L I S T S  ===============================
# # ======================================================================

# # A group pice of data in one variable, with order
# # DECLARATION OF A LIST:
# # It has an order 
# states_of_america = ["Delaware","Pennsylvania","Texas"]

# print(states_of_america[0]) #First item - Delaware
# print(states_of_america[-1]) # -1 Last Item - Texas

# states_of_america[1] = "lol"
# print(states_of_america)

# # At the end of the list
# states_of_america.append("Last new item")
# print(states_of_america)
# # # ======================================================================
# # # ======================= C H A L L E N G E  ===============================
# # # ======================================================================


# standard_input = 'Angela, Ben, Jenny, Michael, Chloe';
# # Import the random module here

# # Split string method
# names_string = input("Give me everybody's names, separated by a comma. ")
# names = names_string.split(", ")
# # 🚨 Don't change the code above 👆

# #Write your code below this line 👇

# import random
# index = random.randint(0,len(names) -1)

# name = names[index]
# print(f"{name} is going to buy the meal today!")


# # # ======================================================================
# # # ======================= C H A L L E N G E  ===============================
# # # ======================================================================



# # 🚨 Don't change the code below 👇
# row1 = ["⬜️","️⬜️","️⬜️"]
# row2 = ["⬜️","⬜️","️⬜️"]
# row3 = ["⬜️️","⬜️️","⬜️️"]
# map = [row1, row2, row3]
# print(f"{row1}\n{row2}\n{row3}")
# position = input("Where do you want to put the treasure? ")
# # 🚨 Don't change the code above 👆

# #Write your code below this row 👇
# x = int(int(position)/10)
# y = int(position) - x*10
# map[y-1][x-1] = 'X'




# #Write your code above this row 👆

# # 🚨 Don't change the code below 👇
# print(f"{row1}\n{row2}\n{row3}")


import random

rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

#Write your code below this line 👇
options = [rock, paper , scissors]

user = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.\n"))
random_number = random.randint(0,2)

if user <=2 and user >=0:
  print(options[user],options[random_number])

  if user == 0 and random_number == 2:
    print("You win!")
  elif user == 2 and random_number == 0:
    print("You lose")
  elif user == 1 and random_number == 0:
    print("You win")
  elif user == 0 and random_number == 1:
    print("You lose")
  elif user == 2 and random_number == 1:
    print("You win")
  elif user == 1 and random_number == 2:
    print("You lose")
  elif random_number == user:
    print("It's a draw")
  else:
    print("No one win ;/")
else:
  print("You typed an invalid number, you lose!") 

