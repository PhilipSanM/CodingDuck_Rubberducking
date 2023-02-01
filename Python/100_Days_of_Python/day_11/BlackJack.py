# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
# =-=-=-=-=-=-=-=-=-=-=-=-   D A Y   # 11 =-=-=-=-=-=-=-==-=-=-=-=-=-=
# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
# B E G I N N E R
# BLACK JACK GAME
# 
# Date: February - 01 - 2023
# ====================================================================

############### Blackjack Project #####################

#Difficulty Normal 😎: Use all Hints below to complete the project.
#Difficulty Hard 🤔: Use only Hints 1, 2, 3 to complete the project.
#Difficulty Extra Hard 😭: Only use Hints 1 & 2 to complete the project.
#Difficulty Expert 🤯: Only use Hint 1 to complete the project.

############### Our Blackjack House Rules #####################

## The deck is unlimited in size. 
## There are no jokers. 
## The Jack/Queen/King all count as 10.
## The the Ace can count as 11 or 1.
## Use the following list as the deck of cards:
cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
## The cards in the list have equal probability of being drawn.
## Cards are not removed from the deck as they are drawn.
## The computer is the dealer.

##################### Hints #####################

# Libraries
import art
import random as rdm

# Functions

def random_card(cards):
    # return cards[rdm.randint(0,len(cards)-1)]
    return rdm.choice(cards)

def print_card_dealer(dealer):
    for i in range(len(dealer)):
        if i == 0:
            print("[ ? ", end = "")
        elif i == len(dealer) - 1:
            print(f", {dealer[i]}]")
        else:
            print(f",{dealer[i]} ", end = "")


def decide(count_dealer,count_player):
    if count_player == count_dealer or count_dealer > 21 and count_dealer > 21:
        return "Draw 🙃"
    elif count_player > 21:
     return "You went over. You lose 😭"
    elif count_dealer > 21:
        return "Opponent went over. You win 😁"
    elif count_player > count_dealer:
        return "You win 😃"
    else:
        return "You lose 😤"


def game():
    print(art.logo)
    dealer = [random_card(cards),random_card(cards)]
    player = [random_card(cards),random_card(cards) ]
    while True:
        print("Your cards are: ")
        print(player)
        print("\n Dealer cards: ")
        print_card_dealer(dealer)
        new_card = input("Type 'y' to get another card, type 'n' to pass: ")
        if new_card == 'y':
            player.append(random_card(cards))
        else:
            break
    count_player = sum(player)
    count_dealer = sum(dealer)
    print(f"Dealer cards were: {dealer} and the sum of that is: {count_dealer}, and")
    print(f"Your cards were: {player} and the sum of that is: {count_player}, so:")
    print(decide(count_dealer,count_player))


        
            
        


# Main
while input("Do you want to play a game of Blackjack? Type 'y' or 'n': ") == 'y':
    print("\n\n\n\n\n\n")
    game()

