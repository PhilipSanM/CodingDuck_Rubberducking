# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
# =-=-=-=-=-=-=-=-=-=-=-=-   D A Y   # 10 =-=-=-=-=-=-=-==-=-=-=-=-=-=
# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
# B E G I N N E R
# FUNCTIONS WITH OUTPUTS
# 
# Date: January - 31 - 2023
# ====================================================================


# # def format_name(f_name):
# #     formated_f_name = f_name.title()
# #     return f"name: {f_name} formated -> {formated_f_name}"

# # print(format_name("luis"))

# # #Functions with Outputs
# # def format_name(f_name, l_name):
# #   if f_name == "" or l_name == "":
# #     return "You didn't provide valid inputs."
# #   formated_f_name = f_name.title()
# #   formated_l_name = l_name.title()
# #   f"Result: {formated_f_name} {formated_l_name}"

# #Return as an early exit
# def format_name(f_name, l_name):
#   """Take a first and last name and format it 
#   to return the title case version of the name."""
#   if f_name == "" or l_name == "":
#     return "You didn't provide valid inputs."
#   formated_f_name = f_name.title()
#   formated_l_name = l_name.title()
#   return f"Result: {formated_f_name} {formated_l_name}"


# #Storing output in a variable
# formatted_name = format_name(input("Your first name: "), input("Your last name: "))
# print(formatted_name)
# #or printing output directly
# print(format_name(input("What is your first name? "), input("What is your last name? ")))

# #Already used functions with outputs.
# length = len(formatted_name)

# # ================================================================
# # =============== C H A L L E N G E ==============================
# # ================================================================

# def is_leap(year):
#   if year % 4 == 0:
#     if year % 100 == 0:
#       if year % 400 == 0:
#         return True
#       else:
#         return False
#     else:
#       return True
#   else:
#     return False

# def days_in_month(year, month):
#     month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  
#     if is_leap(year):
#         return month_days[month - 1] + 1 if month == 2 else month_days[month - 1]
#     else:
#         return month_days[month - 1]


# #🚨 Do NOT change any of the code below 
# year = int(input("Enter a year: "))
# month = int(input("Enter a month: "))
# days = days_in_month(year, month)
# print(days)


# # ================================================================
# # =============== D O C S T R I N G S ============================
# # ================================================================

"""
This a docstring

"""

# Explanation to function like this
def sum_two(num1,num2):
    """
    This code will sum two numbers and return it
    """
    return num1 + num2

sum_two()