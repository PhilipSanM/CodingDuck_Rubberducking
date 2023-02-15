from turtle import Turtle, Screen
import random

def createTurtle(color):
    turtle = Turtle()
    turtle.shape('turtle')
    turtle.color(color)
    return turtle


def initRace(colors, turtles, y_positions):
    for color in colors:
        turtle = createTurtle(color)
        turtles.append(turtle)
    index_turtle = 0
    for y_position in y_positions:
        turtles[index_turtle].penup()
        turtles[index_turtle].goto(x=-230, y=y_position)
        index_turtle += 1


def startRace(turtles, screen):
    win = False
    while not win:
        for turtle in turtles:
            random_forward = random.randint(0, 10)
            turtle.forward(random_forward)
            if turtle.xcor() > 230:
                win = True
                screen.title(f"{turtle.color()} turtle wins!")



def main():
    screen = Screen()
    screen.setup(width=500, height=400)
    turtles = []
    colors = ['red', 'blue', 'yellow', 'green']
    y_positions = [-70, -40, -10, 20]

    initRace(colors, turtles, y_positions)
    startRace(turtles, screen)

    screen.exitonclick()


if __name__ == "__main__":
    main()
