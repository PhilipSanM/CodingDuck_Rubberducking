# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
# =-=-=-=-=-=-=-=-=-=-=-=-   D A Y   # 12 =-=-=-=-=-=-=-==-=-=-=-=-=-=
# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
# B E G I N N E R
# SCOPE & NUMBER GUESSING GAME
# 
# Date: February - 02 - 2023
# ====================================================================


# # ================================================================
# # =============== S C O P E ==============================
# # ================================================================

# Global Scope
player_health = 10

# Local Scope
def drink_potion():
    potion_strength = 2
    print(potion_strength) # 2
    print(player_health)  # 10

# Error
# print(potion_strenght)

drink_potion()

# Py Don't have Block Scope

game_level = 3
enemies = ['skeleton','Zombie']

if game_level < 5:
    new_enemy = enemies[0]
# This works
print(new_enemy)


enemies = 'Skeleton'

def increase_enemies():
    enemies = "Zombie"
    print(enemies) #zombie

increase_enemies()
print(enemies) # skeleton


# If ypu want to modify a variable use globa
value = 2
def increase():
    global value
    value +=1
    
increase()

print(value) # 3

# but this works
def increase_2():
    return value + 1


increase_2() # 4
print(value) # 3

# # ================================================================
# # =============== C O N S T A N T ==============================
# # ================================================================

# Uppercase for constants

PI = 3.141519