#Number Guessing Game Objectives:

# Include an ASCII art logo.
# Allow the player to submit a guess for a number between 1 and 100.
# Check user's guess against actual answer. Print "Too high." or "Too low." depending on the user's answer. 
# If they got the answer correct, show the actual answer to the player.
# Track the number of turns remaining.
# If they run out of turns, provide feedback to the player. 
# Include two different difficulty levels (e.g., 10 guesses in easy mode, only 5 guesses in hard mode).

from Art import *
import random

print(logo)

def game():
    print("I'm thinking of a number between 1 and 100.")
    difficulty = input("Choose a difficulty. Type 'easy' or 'hard': ")

    if difficulty == 'easy':
        lives = 10
    else:
        lives = 5
    win = False
    random_number = random.randint(0,101)

    if 100 - random_number > random_number:
        aux = random_number // 2
    else:
        aux = 100 - random_number // 2



    while lives > 0 and not win:
        print(f"You have {lives} attemps remaining to guess the number.")
        guess_number = int(input("Make a guess: "))
        if guess_number > random_number:
            if guess_number > random_number + aux:
                print("Too hight")
            else:
                print("Hight")
            lives -= 1
        elif guess_number < random_number:
            if guess_number < random_number - aux:
                print("Too Low")
            else:
                print("Low")
            lives -= 1
        elif guess_number == random_number:
            print("You guess it! CONGRATS")
            win = True
    
    if not win:
        print(" YOU LOST")
        print(f"The number was {random_number}")


game()


