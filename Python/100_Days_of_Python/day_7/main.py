#Step 1 

word_list = ["aardvark", "baboon", "camel"]

#TODO-1 - Randomly choose a word from the word_list and assign it to a variable called chosen_word.
import random 
# random_number = random.randint(0,len(word_list)-1)
# chosen_word = word_list[random_number]
chosen_word = random.choice(word_list)
#TODO-2 - Ask the user to guess a letter and assign their answer to a variable called guess. Make guess lowercase.
standard_input = 'l'
guess_letter = input("Can u give me a guess of the word?").lower()

#TODO-3 - Check if the letter the user guessed (guess) is one of the letters in the chosen_word.
for letter in chosen_word:
    if guess_letter == letter:
        print("You guess the letter!")