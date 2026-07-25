class QuizService:
    def __init__(self, questions):
        self.questions = questions

    def check_answer(self, question, user_answer):
        user_answer = str(user_answer).strip().lower()

        for answer in question["answer"]:
            if str(answer).strip().lower() == user_answer:
                return True

        return False