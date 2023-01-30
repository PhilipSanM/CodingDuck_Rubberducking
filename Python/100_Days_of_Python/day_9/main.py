# # # ================================================================
# # # =============== D I C T I O N A R I E S ========================
# # # ================================================================

# # It works like a hasmap
# bug = "bug"
# programming_dictionary = {
#     bug: "An error in a program that prevents the program from running as expected",
#     "Function" : "A pice of code that you can easily call over and over again",
#     123 : "tree numbers"
# }

# print(programming_dictionary)
# print([4,3,2,1][1])
# print(programming_dictionary[bug], '\n\n')
# print(programming_dictionary[123])

# #  Adding new items to dictionary.
# programming_dictionary["Loop"] = "The action of doing something over and over again"

# print(programming_dictionary)

# # Create and empty dictioneary
# empty_list = []
# empty_dictionary = {}

# ## Wipe an existing dictionary
# # programming_dictionary = {}
# # print(programming_dictionary)

# # Edit an item in a dictionary
# programming_dictionary["bug"] = "New values gg"
# print()
# # Loop through a dictionary
# for key in programming_dictionary:
#     print("Key -> " ,key,"/// Value -> ",programming_dictionary[key])


# # ================================================================
# # =============== C H A L L E N G E ==============================
# # ================================================================

# student_scores = {
#   "Harry": 81,
#   "Ron": 78,
#   "Hermione": 99, 
#   "Draco": 74,
#   "Neville": 62,
# }
# # 🚨 Don't change the code above 👆

# #TODO-1: Create an empty dictionary called student_grades.
# student_grades = {}

# #TODO-2: Write your code below to add the grades to student_grades.👇
# for key in student_scores:
#     value = ""
#     if student_scores[key] >= 91 and student_scores[key] <= 100:
#         value += "Outstanding"
#     elif student_scores[key] >= 81 and student_scores[key] <= 90:
#         value += "Exceeds Expectations"
#     elif student_scores[key] >= 71 and student_scores[key] <= 80:
#         value += "Acceptable"
#     elif student_scores[key] <= 70:
#         value += "Fail"
#     student_grades[key] = value
    

# # 🚨 Don't change the code below 👇
# print(student_grades)

# # ================================================================
# # =========== Nesting lists and dictionaries =====================
# # ================================================================

# #  Nesting a list in a Dictionary

# travel_Log = {
#     "France" : ["Paris", "Lille", "Dijon"],
#     "Germany" : ["Berlin", "Hamburg","Stuttgart"]
# }

# # Nesting Dictionary in a Dictionary

# travel_log_again = {
#     "France" : {"cities_visited": ["Pairs", "Lille", "Dijon"],"total_visits": 12},
#     "Germany" :{"cities_visited": ["Berlin", "Hamburg","Stuttgart"], "total_visits": 5}
# }

# # Multiple dictionaries inside a list

# #Nesting Dictionaries in Lists

# travel_log_list = [
# {
#   "country": "France", 
#   "cities_visited": ["Paris", "Lille", "Dijon"], 
#   "total_visits": 12,
# },
# {
#   "country": "Germany",
#   "cities_visited": ["Berlin", "Hamburg", "Stuttgart"],
#   "total_visits": 5,
# },
# ]


# # ================================================================
# # =============== C H A L L E N G E ==============================
# # ================================================================
travel_log = [
{
  "country": "France",
  "visits": 12,
  "cities": ["Paris", "Lille", "Dijon"]
},
{
  "country": "Germany",
  "visits": 5,
  "cities": ["Berlin", "Hamburg", "Stuttgart"]
},
]
#🚨 Do NOT change the code above

#TODO: Write the function that will allow new countries
#to be added to the travel_log. 👇

def add_new_country(country, visits, cities):
    dictionarie = {
        "country": country,
        "visits": visits,
        "cities": cities
        }
    travel_log.append(dictionarie)



#🚨 Do not change the code below
add_new_country("Russia", 2, ["Moscow", "Saint Petersburg"])
print(travel_log)