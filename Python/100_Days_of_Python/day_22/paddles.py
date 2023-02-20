from turtle import Turtle


class Paddle(Turtle):
    def __init__(self, position):
        super().__init__()
        self.penup()
        self.setheading(90)
        self.shape("square")
        self.color("white")
        self.shapesize(stretch_wid=1, stretch_len=5)
        self.setpos(x=position, y=0)

    def go_up(self):
        self.forward(10)

    def go_down(self):
        self.backward(10)
