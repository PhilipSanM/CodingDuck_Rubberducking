# import math
# # ================================================================
# # =============== F U N C T I O N S  P A R A M E T E R S =========
# # ================================================================

# def greet_with_name(name):
#     print("Hello " + name)
#     print(f"Hi {name}")

# def greet_with(name, location):
#     print("Hi "+ name)
#     print(f"What is like {location}")


# # # ================================================================
# # # =============== C H A L L E N G E ==============================
# # # ================================================================
# #Write your code below this line 👇
# def paint_calc(height, width, cover):
#     number_cans = math.ceil((height*width)/cover)
#     print(number_cans)


# #Write your code above this line 👆
# # Define a function called paint_calc() so that the code below works.   

# # 🚨 Don't change the code below 👇
# test_h = 3
# # int(input("Height of wall: "))
# test_w = 9
# # int(input("Width of wall: "))
# coverage = 5
# paint_calc(height=test_h, width=test_w, cover=coverage)





# # ================================================================
# # =============== C H A L L E N G E ==============================
# # ================================================================



# #Write your code below this line 👇
# def prime_checker(number):
#     for denominator in range(2,number):
#         if number%denominator == 0:
#             print("It's not a prime number.")
#             return 
#     print("It's a prime number.")

# #Write your code above this line 👆
    
# #Do NOT change any of the code below👇
# n = int(input("Check this number: "))
# prime_checker(number=n)


# # ================================================================
# # ======== C A E S A R  C I P H E R ==============================
# # ================================================================


alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
text = input("Type your message:\n").lower()
shift = int(input("Type the shift number:\n"))

def caesar(text,shift,direction):
    if direction == 'decode':
        shift *= -1
    cipher_text = ""
    for letter in text:
        cipher_text += alphabet[alphabet.index(letter) + shift] 
    print(f"The {direction} text is {cipher_text}")
    
caesar(text,shift,direction)









#        ___           ___                       ___                   ___     
#       /\  \         /\__\          ___        /\__\      ___        /\  \                  _ 
#      /::\  \       /:/  /         /\  \      /:/  /     /\  \      /::\  \      __   ___.--'_`.
#     /:/\:\  \     /:/__/          \:\  \    /:/  /      \:\  \    /:/\:\  \    ( _`.'. -   'o` )  
#    /::\~\:\  \   /::\  \ ___      /::\__\  /:/  /       /::\__\  /::\~\:\  \   _\.'_'      _.-'  
#   /:/\:\ \:\__\ /:/\:\  /\__\  __/:/\/__/ /:/__/     __/:/\/__/ /:/\:\ \:\__\ ( \`. )    //\`   
#   \/__\:\/:/  / \/__\:\/:/  / /\/:/  /    \:\  \    /\/:/  /    \/__\:\/:/  /  \_`-'`---'\\__,  
#        \::/  /       \::/  /  \::/__/      \:\  \   \::/__/          \::/  /    \`        `-\  
#         \/__/        /:/  /    \:\__\       \:\  \   \:\__\           \/__/      `               
#                     /:/  /      \/__/        \:\__\   \/__/                   
#                     \/__/                     \/__/                          

