from turtle import Turtle


class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.score = 0
        self.penup()
        self.hideturtle()
        self.color("white")
        self.goto(0, 280)



    def increment(self):
        self.score += 1

    def print_score(self):
        self.clear()
        self.write(arg=f"Score: {self.score}", align="center")

    def game_over(self):
        self.goto(0, 0)
        self.write(arg=f"GAME OVER", align="center")
