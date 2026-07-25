import random
from services.mastery_service import calculate_mastery


class AdaptiveEngine:
    def __init__(self, student, questions):
        self.student = student
        self.questions = questions

    def create_pool(self):
        pool = []

        for category in self.questions["category"]:
            for question in category["questions"]:
                q = {
                    **question,
                    "topic": question.get("topic", category["name"]),
                    "difficulty": question.get("difficulty", 1),
                }

                if "id" not in q:
                    q["id"] = category["name"] + "_" + str(len(pool))

                pool.append(q)

        return pool

    def select_question(self):
        pool = self.create_pool()

        mastery = calculate_mastery(
            self.student["history"]
        )

        weighted_pool = []

        for question in pool:
            topic = question["topic"]
            score = mastery.get(topic, 0)

            # Topic weighting
            if score < 50:
                weight = 5
            elif score < 80:
                weight = 3
            else:
                weight = 1

            # Difficulty weighting
            if question["difficulty"] == self.student["difficultyLevel"]:
                weight += 3

            weighted_pool.extend([question] * weight)

        return random.choice(weighted_pool)