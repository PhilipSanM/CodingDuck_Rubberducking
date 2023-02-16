import turtle
from snake import Snake
import time

def screenInit():
    screen = turtle.Screen()
    screen.setup(width=600, height=500)
    screen.title("S N A K E")
    screen.bgcolor("black")

    return screen


def main():
    screen = screenInit()
    screen.tracer(0)
    snake = Snake()

    screen.listen()
    screen.onkey(snake.down, "s")
    screen.onkey(snake.up, "w")
    screen.onkey(snake.right, "d")
    screen.onkey(snake.left, "a")
    while True:
        screen.update()
        time.sleep(0.11)
        snake.move()


    screen.exitonclick()


if __name__ == "__main__":
    main()
