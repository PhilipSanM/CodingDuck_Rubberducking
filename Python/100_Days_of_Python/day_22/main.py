from turtle import Turtle, Screen
from paddles import Paddle
from ball import Ball
import time

X_POS = (350, -350)


def init_screen():
    screen = Screen()
    screen.title("Pong!")
    screen.setup(width=800, height= 600)
    screen.bgcolor("black")
    screen.listen()
    return screen

def main():
    screen = init_screen()
    screen.tracer(0)
    left_paddle = Paddle(X_POS[0])
    right_paddle = Paddle(X_POS[1])
    ball = Ball()
    screen.onkeypress(left_paddle.go_up, "Up")
    screen.onkeypress(left_paddle.go_down, "Down")
    screen.onkeypress(right_paddle.go_up, "w")
    screen.onkeypress(right_paddle.go_down, "s")


    while True:
        ball.move()
        time.sleep(0.1)
        screen.update()
        if ball.ycor() > 280 or ball.ycor() < -280:
            ball.bounce_top()
        elif ball.xcor() > 380 or ball.xcor() < -380:
            ball.bounce_sides()

    screen.exitonclick()



if __name__ == "__main__":
    main()