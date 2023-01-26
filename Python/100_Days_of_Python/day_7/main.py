import hangman_art 
from hangman_words import word_list 
import random

print(hangman_art.logo)
chosen_word = random.choice(word_list)

#Testing code
print(f'Pssst, the solution is {chosen_word}.')

display = []
for _ in range(len(chosen_word)):
    display.append("_")
    # display += "_"

win = False
lives_left = 6
while(not win and lives_left > 0 ):
    print()
    guess = input("Guess a letter: ").lower()
    for index in range(len(chosen_word)):
        letter = chosen_word[index]
        if letter == guess:
            display[index] = letter
    if guess not in display:
        lives_left -= 1
        print(f"Lives left: {lives_left}")
        print(hangman_art.stages[lives_left])
        if lives_left == 0:
            print(" YOU LOSE!")
    else:
        print(f"Lives left: {lives_left}")
        print(hangman_art.stages[lives_left])

    print(f"{' '.join(display)}")
    if "_" not in display:
        print(" YOU WON!")
        win = True
