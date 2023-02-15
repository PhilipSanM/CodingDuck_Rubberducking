from turtle import Screen, Turtle

turtle_timmy = Turtle()
screen = Screen()


def forward():
    turtle_timmy.forward(1)

def backward():
    turtle_timmy.back(1)


def clockLeft():
    new_heading = turtle_timmy.heading() + 10
    turtle_timmy.setheading(new_heading)

def clockRight():
    turtle_timmy.right(1)


def clear():
    turtle_timmy.clear()

def main():
    screen.listen()
    screen.onkeypress(forward, 'w')
    screen.onkeypress(backward, 's')
    screen.onkeypress(clockLeft, 'a')
    screen.onkeypress(clockRight, 'd')
    screen.onkey(key='c',fun=clear)
    screen.exitonclick()


if __name__ == '__main__':
    main()
