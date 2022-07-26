#===============================================================
#============= WELCOME DAY 2 ===================================
#===============================================================


# #===============================================================
# #============= PRIMITIVE DATA TYPES ===================================
# #===============================================================

# #Counting the number of characters in a string
# print(len("Hello World"));
# #using len () function to count the number of characters in a string

# #Strings are sequences of characters
# print("Hello World"[0]);
# print("Hello World"[1]);
# print("Hello World"[2]);
# #using + to concatenate strings
# print("Hello" + " World");

# #Intergers are numbers
# print(123+ 345);
# #float 
# print(1.23 + 3.45);
# #boolean
# print(True);
# print(False);
# #Also you can do this number 12_3
# print(12_3);
# #===============================================================
# #============= TYPE Error, Checking and Conversions ===================================
# #===============================================================
# standard_input = 'hello world'
# num_char = len(input("Whats your name? "))
# print("Your name has "+ str(num_char) +" characters")
# # You only can concatenate strings with strings
# # print("Your name has "+ num_char +" characters")

# #function type() returns the type of the object

# print(type(standard_input))
# print(type(num_char))
# print(type(True))
# print(type(1.23))
# print(12_3)
# print(type(12_3))

# new_num_char = str(num_char)
# print("Your name has "+ new_num_char+" characters")

# a =23
# print(type(a))

# print(70 + float("100.5"))
# print(str(70)+ str(100.5))

# # ================================================================
# # ============== CODING EXERCISE =================================
# # ================================================================
# # Write a program that adds the digits in a 2 digit number. 
# # e.g. if the input was 35, then the output should be 3 + 5 = 8

# # 🚨 Don't change the code below 👇
# two_digit_number = input("Type a two digit number: ")
# # 🚨 Don't change the code above 👆

# ####################################
# #Write your code below this line 👇

# print(int(str(two_digit_number)[0])+ int(str(two_digit_number)[1]))

# # ================================================================
# # =========== MATHEMATICAL OPERATIONS ============================
# # ================================================================

print(6/3)
print(type(6/3))#float

print(2**2) #2^2
print(2**3) #2^3
print(3 * 3 + 3 / 3 - 3)


# # ================================================================
# # ============== CODING EXERCISE =================================
# # ================================================================
# # Write a program that calculates the Body Mass Index (BMI) from a user's weight and height.

# # The BMI is a measure of some's weight taking
# #  into account their height. e.g. If a tall person and a shor
# #  t person both 
# # weigh the same amount, the short person is usually
# #  more overweight.
# # 🚨 Don't change the code below 👇
# height = input("enter your height in m: ")
# weight = input("enter your weight in kg: ")
# # 🚨 Don't change the code above 👆

# #Write your code below this line 👇

# bmi = float(weight) / float(height)**2
# print(int(bmi))

# # ================================================================
# # ============== NUMBER MANIPULATION AND F Strings ===============
# # ================================================================
# print(8/3)#2.6666666
# print(int(8/3))#2
# #Round
# print(round(8/3))#3

# #Round for positions
# print(round(8/3, 2)) # 2.67
# #Round for positions
# print(round(8/3, 1)) # 2.7

# #Also you can have the doble // for making the interger more faster without the cast

# print(8//3) #2 and is also an int

# result = 4/2
# result /=2 # result = result/2
# print(result)
# #wHEN you divide it will transform the variable into a float
# #+=
# #-=

# score =0 
# #painful
# print("your score is " + str(score))

# #f-string
# print(f"you score is {score}")
# #for making all the converting more easier


# # # ================================================================
# # # ============== CODING EXERCISE =================================
# # # ================================================================

# # https://waitbutwhy.com/2014/05/life-weeks.html

# # Create a program using maths and f-Strings that tells us how
# #  many days, weeks, months we have left if we live until 90 years old.



# # 🚨 Don't change the code below 👇
# age = input("What is your current age?")
# # 🚨 Don't change the code above 👆

# #Write your code below this line 👇

# age_number = int(age)
# until_90 = 90 - age_number
# days = 365
# months = 12
# weeks = 48

# print(
#     f"You have {days*until_90} days, {weeks*until_90} weeks, and {months*until_90} months left."
# )

# ANSWER
# #If the bill was $150.00, split between 5 people, with 12% tip. 
# #Each person should pay (150.00 / 5) * 1.12 = 33.6
# #Round the result to 2 decimal places.
# print("Welcome to the tip calculator!")
# bill = float(input("What was the total bill? $"))
# tip = int(input("How much tip would you like to give? 10, 12, or 15? "))
# people = int(input("How many people to split the bill?"))

# tip_as_percent = tip / 100
# total_tip_amount = bill * tip_as_percent
# total_bill = bill + total_tip_amount
# bill_per_person = total_bill / people
# final_amount = round(bill_per_person, 2)

# print(f"Each person should pay: ${final_amount}")