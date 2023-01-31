from art import *

print(logo)

# Add
def add(n1,n2):
    return n1 + n2

# Subtract
def subtract(n1,n2):
    return n1 - n2

# multiply
def multiply(n1,n2):
    return n1 * n2

# Divide
def divide(n1,n2):
    return n1 / n2

operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}

num1 = float(input("What's the first number?: "))
num2 = float(input("What's the second number?: "))

for symbol in operations:
    print(symbol)

operation_symbol = input("Pick an operation from the line above: ")
calculation_symbol = operations[operation_symbol]

answer = calculation_symbol(num1,num2)
print(f"{num1} {operation_symbol} {num2} = {answer}")

while True:
    next_opetation = input(f"Type'y to continue with {answer}, or type 'n' to exit: ")
    if next_opetation == 'n':
        break

    operation_symbol = input("Pick an operation from the line above: ")
    calculation_symbol = operations[operation_symbol]
    num3 = float(input("What's the third number?: "))
    previus_answer = answer
    answer = calculation_symbol(answer,num3)
    print(f"{previus_answer} {operation_symbol} {num3} = {answer}")



