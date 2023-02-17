import turtle
from snake import Snake
import time
from food import Food
from scoreboard import Scoreboard


def screenInit():
    screen = turtle.Screen()
    screen.setup(width=600, height=600)
    screen.title("S N A K E")
    screen.bgcolor("black")

    return screen


def main():
    screen = screenInit()
    screen.tracer(0)
    snake = Snake()
    food = Food()
    scoreboard = Scoreboard()

    screen.listen()
    screen.onkey(snake.down, "s")
    screen.onkey(snake.up, "w")
    screen.onkey(snake.right, "d")
    screen.onkey(snake.left, "a")
    game_over = False
    while not game_over:
        screen.update()
        time.sleep(0.05)
        snake.move()
        scoreboard.print_score()
        if snake.head.distance(food) < 15:
            food.refresh()
            scoreboard.increment()
            snake.extend()

        if snake.head.xcor() > 288 or snake.head.xcor() < -288 or snake.head.ycor() > 288 or snake.head.ycor() < -288:
            scoreboard.game_over()
            game_over = True

        for segment in snake.segments[1:]:
            if snake.head.distance(segment) < 10:
                scoreboard.game_over()
                game_over = True

    screen.exitonclick()


if __name__ == "__main__":
    main()
