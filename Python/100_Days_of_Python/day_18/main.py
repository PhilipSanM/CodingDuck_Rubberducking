import turtle
import random


def make_art(turtle_tommy):
    turtle_tommy.clear()
    turtle_tommy.speed(0)
    for y in range(-300, 300, 15):
        for x in range(-300, 300, 15):
            turtle_tommy.color(random_color())
            turtle_tommy.penup()
            turtle_tommy.setpos(x, y)
            turtle_tommy.pendown()
            turtle_tommy.dot(10)


def make_spirograph(turtle_tommy):
    turtle_tommy.clear()
    turtle_tommy.setpos(0, 0)
    turtle_tommy.speed(0)
    for angle in range(0, 361, 3):
        turtle_tommy.color(random_color())
        turtle_tommy.left(angle)
        turtle_tommy.circle(100)


def random_color():
    red = random.randint(0, 255)
    green = random.randint(0, 255)
    blue = random.randint(0, 255)
    return (red, green, blue)


def make_random_walk(turtle_tommy):
    turtle_tommy.setpos(0, 0)
    turtle_tommy.pensize(5)
    for _ in range(45):
        turtle_tommy.color(random_color())
        angle = random.choice([90, 0, 180, 270])
        turtle_tommy.forward(15)
        turtle_tommy.right(angle)


def make_figures(turtle_tommy):
    sides = 3
    for _ in range(8):
        angle = 360 / sides
        for _ in range(sides):
            turtle_tommy.forward(100)
            turtle_tommy.right(angle)
        sides += 1


def make_dashed_line(turtle_tommy):
    for _ in range(5):
        turtle_tommy.forward(5)
        turtle_tommy.penup()
        turtle_tommy.forward(5)
        turtle_tommy.pendown()


def draw_square(turtle_tommy):
    turtle_tommy.forward(25)
    turtle_tommy.right(90)
    turtle_tommy.forward(25)
    turtle_tommy.right(90)
    turtle_tommy.forward(25)
    turtle_tommy.right(90)
    turtle_tommy.forward(25)
    turtle_tommy.right(90)


def main():
    turtle.colormode(255)
    turtle_tommy = turtle.Turtle()
    turtle_tommy.shape('turtle')
    # draw_square(turtle_tommy)
    # turtle_tommy.clear()
    # make_dashed_line(turtle_tommy)
    # turtle_tommy.clear()
    # make_figures(turtle_tommy)
    # turtle_tommy.clear()
    # make_random_walk(turtle_tommy)
    # make_spirograph(turtle_tommy)

    make_art(turtle_tommy)
    screen = turtle.Screen()
    screen.exitonclick()


if __name__ == '__main__':
    main()
