from turtle import Turtle

POS = [0, -20, -40]
UP = 90
DOWN = 270
RIGHT = 0
LEFT = 180


class Snake():
    def __init__(self):
        self.segments = []
        self.create_snake()
        self.head = self.segments[0]

    def create_snake(self):
        for i in range(3):
            segment = Turtle()
            segment.shape("square")
            segment.color("white")
            segment.penup()
            segment.speed(7)
            segment.setpos(x=POS[i], y=0)
            self.segments.append(segment)

    def move(self):
        for seg_index in range(len(self.segments) - 1, 0, -1):
            x = self.segments[seg_index - 1].xcor()
            y = self.segments[seg_index - 1].ycor()
            self.segments[seg_index].goto(x, y)
        self.segments[0].forward(20)

    def up(self):
        if self.head.heading() != DOWN:
            self.head.setheading(UP)

    def down(self):
        if self.head.heading() != UP:
            self.head.setheading(DOWN)

    def right(self):
        if self.head.heading() != LEFT:
            self.head.setheading(RIGHT)

    def left(self):
        if self.head.heading() != RIGHT:
            self.head.setheading(LEFT)
