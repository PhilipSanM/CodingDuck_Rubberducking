from Art import logo

print(logo)
print("Welcome to the secret auction program.") 
others = True

bid = {}

def add_new_bid(person,person_bid):
    bid[person] = person_bid

while(others):
    person = input("What is your name?:")
    person_bid = int(input("What's your bid?:"))
    loop = input("Are there any other bidders? Type 'yes' or 'no'.")
    if loop == 'no':
        others = False
    add_new_bid(person,person_bid)

winner = ""
winner_bid = 0
print(bid)
for name in bid:
    if bid[name] > winner_bid:
        winner = name
        winner_bid = bid[name]
    
print(f"The winner is {winner} with a bid of ${winner_bid}")