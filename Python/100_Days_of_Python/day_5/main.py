# ==========================================================
# =================== F O R   L O O P ======================
# ==========================================================

# fruits = ["Apple" , "Banana", "Pineapple"]

# for fruit in fruits:
#     print(fruit)
#     print(fruit + " Pie")
#     print(fruits)

# # ==========================================================
# # =================== C H A L L  E N G E ===================
# # ==========================================================


# # 🚨 Don't change the code below 👇
# standard_input = "156 178 165 171 187"
# student_heights = input("Input a list of student heights ").split()
# for n in range(0, len(student_heights)):
#   student_heights[n] = int(student_heights[n])
# # 🚨 Don't change the code above 👆

# #Write your code below this row 👇
# sum_heights = 0
# number_heights = 0
# for height in student_heights:
#     sum_heights += height
#     number_heights += 1
# average = sum_heights/number_heights
# print (average)

# # ==========================================================
# # =================== C H A L L  E N G E ===================
# # ==========================================================


# # 🚨 Don't change the code below 👇
# standard_input = "78 65 89 86 55 91 64 89"
# student_scores = input("Input a list of student scores ").split()
# for n in range(0, len(student_scores)):
#   student_scores[n] = int(student_scores[n])
# print(student_scores)
# # 🚨 Don't change the code above 👆

# #Write your code below this row 👇
# max_score = 0
# for score in student_scores:
#     if max_score < score:
#         max_score = score

# x = str(max_score)
# print(f"The highest score in the class is: {max_score}")

# # ==========================================================
# # =================== F O R  I N  R A N G E ================
# # ==========================================================

# for number in range(1,10):
#     print(number)
# print('////////')
# # with a step
# for number in range(1,10,3):
#     print(number)

# total = 0
# #Gauss
# for number in range(1,101):
#     total += number
# print(total)

# # ==========================================================
# # =================== C H A L L  E N G E ===================
# # ==========================================================
# #Write your code below this row 👇
# sum_total = 0
# for number in range(2,101,2):
#     sum_total += number
# print(sum_total)


# # ==========================================================
# # =================== C H A L L  E N G E ===================
# # ==========================================================

# #Write your code below this row 👇
# for number in range(1,101):
#     if number%5 == 0 and number%3 == 0:
#         print("FizzBuzz")
#     elif number%3 == 0:
#         print("Fizz")
#     elif number%5 == 0:
#         print("Buzz")
#     else:
#         print(number)


# # ==========================================================
# # =================== C H A L L  E N G E ===================
# # ==========================================================

#Password Generator Project
import random
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to the PyPassword Generator!")
nr_letters= 9
nr_symbols = 7
nr_numbers = 5

#Eazy Level - Order not randomised:
#e.g. 4 letter, 2 symbol, 2 number = JduE&!91
password = ""
for number in range(1, nr_letters + 1):
    random_number = random.randint(0,len(letters) )
    password += letters[random_number]

for number in range(1, nr_symbols + 1):
    random_number = random.randint(0,len(symbols) )
    password += symbols[random_number]

for number in range(1, nr_numbers + 1):
    random_number = random.randint(0,len(numbers) )
    password += numbers[random_number]

print(password)

#Hard Level - Order of characters randomised:
#e.g. 4 letter, 2 symbol, 2 number = g^2jk8&P


