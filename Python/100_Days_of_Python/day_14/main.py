from art import logo,vs
from game_data import *
import random
import os
os.system("cls")


def game_start():
    os.system("cls")
    print(logo) 
    random_number_A = random.randint(0,len(data) - 1)
    random_number_B = random.randint(0,len(data) - 1)
    while random_number_A == random_number_B:
        random_number_B = random.randint(0,len(data) - 1)
    
    print(f"Compare A: {data[random_number_A]['name']}, a {data[random_number_A]['description']}, from {data[random_number_A]['country']}.")
    print(vs)
    print(f"Against B: {data[random_number_B]['name']}, a {data[random_number_B]['description']}, from {data[random_number_B]['country']}.")
    
    if data[random_number_A]['follower_count'] >= data[random_number_B]['follower_count']:
        winner =  data[random_number_A]
        looser = data[random_number_B]
    else:
        winner = data[random_number_B]
        looser = data[random_number_A]
    
    if input("Who has more followers? Type 'A' or 'B':") == 'A':
        user_selection = data[random_number_A]
    else:
        user_selection = data[random_number_B]
    
    
    # game
    score = 0
    while user_selection['follower_count'] == winner['follower_count']:
        os.system("cls")
        print(logo) 
        score += 1
        print(f"You're right! Current score: {score}.")
        random_choise = random.randint(0,len(data) -1)
        # Dont repeat
        while data[random_choise] == winner:
            random_choise = random.randint(0,len(data) - 1)

        print(f"Compare A: {winner['name']}, a {winner['description']}, from {winner['country']}.")
        print(vs)
        print(f"Against B: {data[random_choise]['name']}, a {data[random_choise]['description']}, from {data[random_choise]['country']}.")

        ex_winner = winner
        if input("Who has more followers? Type 'A' or 'B':") == 'A':
            user_selection = ex_winner
        else:
            user_selection = data[random_choise]    
            
        if data[random_choise]['follower_count'] >= winner['follower_count']:
            winner =  data[random_choise]






    os.system("cls")
    print(logo) 
    print(f"Sorry, that's wrong. Final score: {score}")



game_start()
    