stages = ['''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========
''', '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========
''', '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========
''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========
''', '''
  +---+
  |   |
      |
      |
      |
      |
=========
''']
import random
word_list = ["aardvark", "baboon", "camel"]
chosen_word = random.choice(word_list)

#Testing code
print(f'Pssst, the solution is {chosen_word}.')

#TODO-1: - Create an empty List called display.
#For each letter in the chosen_word, add a "_" to 'display'.
#So if the chosen_word was "apple", display should be ["_", "_", "_", "_", "_"] with 5 "_" representing each letter to guess.
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
        print(stages[lives_left])
        if lives_left == 0:
            print(" YOU LOSE!")
    else:
        print(f"Lives left: {lives_left}")
        print(stages[lives_left])

        
    # for letter in display:
    #     print(letter," ", end="")
    
    print(f"{' '.join(display)}")
    # for letter in display:
    #     if letter == "_":
    #         win = False
    #         break
    #     else:
    #         win = True
    if "_" not in display:
        print(" YOU WON!")
        win = True
