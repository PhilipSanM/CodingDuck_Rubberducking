from art import logo, alphabet

print(logo)

def caesar(text,shift,direction):
    if direction == 'decode':
        shift *= -1
    cipher_text = ""
    for letter in text:
        if letter in alphabet:
            cipher_text += alphabet[alphabet.index(letter) + shift] 
        else: 
            cipher_text += letter
    print(f"The {direction} text is {cipher_text}")
    
continue_program = True  

while(continue_program):
    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
    text = input("Type your message:\n").lower()
    shift = int(input("Type the shift number:\n"))
    shift %= 26
    caesar(text,shift,direction)
    end = input("Do u want to continue ? type y/n \n")
    if end == 'n':
        continue_program = False
    


