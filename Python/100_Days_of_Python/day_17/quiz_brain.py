
class QuizBrain:
    def __init__(self, question):
        self.question_number = 0
        self.question_list = question
        self.score = 0

    def next_question(self):
        user_answer = input(f"Q.{self.question_number + 1}: {self.question_list[self.question_number].question}. ("
                            f"True/False)?:")
        self.check_answer(user_answer, self.question_list[self.question_number].answer)
        self.question_number += 1


    def still_have_question(self):
        if self.question_number <  len(self.question_list):
            return True
        else:
            return False

    def check_answer(self, user_answer, correct_answer):
        user_bool = False
        if user_answer == 'True':
            user_bool = True
        if user_bool == correct_answer:
            self.score += 1
