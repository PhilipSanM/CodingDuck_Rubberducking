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
# # ======================================================================
# # ======================= C H A L L E N G E  ===============================
# # ======================================================================


standard_input = 'Angela, Ben, Jenny, Michael, Chloe';
# Import the random module here

# Split string method
names_string = input("Give me everybody's names, separated by a comma. ")
names = names_string.split(", ")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇

import random
index = random.randint(0,len(names) -1)

name = names[index]
print(f"{name} is going to buy the meal today!")