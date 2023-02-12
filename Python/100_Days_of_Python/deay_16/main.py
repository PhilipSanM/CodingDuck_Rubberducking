# import turtle
#
#
# # Declaring a new class of Turtle call Carlos
# carlos = turtle.Turtle()
# carlos.shape("turtle")
# carlos_screen = turtle.Screen()
# carlos.color("blue")
# carlos.forward(150)
#
# carlos_screen.exitonclick()

import prettytable

table = prettytable.PrettyTable()
table.add_column('Pokemon Name', ['squirlte', 'Pikachu'])
table.add_column('Type', ['Water', 'Electricity'])
print(table)

table.align = 'r'
