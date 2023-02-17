from turtle import Turtle
import random as rd


class Food(Turtle):
    def __init__(self):
        super().__init__()
        self.color("blue")
        self.shape("circle")
        self.penup()
        self.shapesize(stretch_wid=0.5, stretch_len=0.5)
        self.speed("fastest")
        x = rd.randint(-280, 280)
        y = rd.randint(-280, 280)
        self.goto(x, y)

    def refresh(self):
        x = rd.randint(-280, 280)
        y = rd.randint(-280, 280)
        self.goto(x, y)
