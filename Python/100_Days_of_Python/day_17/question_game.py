import data
import question_model
from question_model import *
import quiz_brain


def main():
    question_bank = []
    for question_data in data.question_data:
        question = question_model.Question(question_data['text'], question_data['answer'])
        question_bank.append(question)

    quiz = quiz_brain.QuizBrain(question_bank)

    while quiz.still_have_question():
        quiz.next_question()

    print(f"Completed with a score of: {quiz.score} ")


if __name__ == '__main__':
    main()
