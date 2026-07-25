from services.recommendation_service import generate_recommendations


def calculate_dashboard(student):
    history = student["history"]

    if len(history) == 0:
        return {
            "accuracy": 0,
            "questionsAnswered": 0,
            "currentStreak": 0,
            "weakTopics": [],
            "topicProgress": [],
            "recommendations": generate_recommendations(student),
        }

    correct_answers = sum(
        1
        for answer in history
        if answer["correct"]
    )

    accuracy = round(
        (correct_answers / len(history)) * 100
    )

    streak = 0

    for answer in reversed(history):
        if answer["correct"]:
            streak += 1
        else:
            break

    topics = {}

    for answer in history:
        topic = answer.get("topic", "unknown")

        if topic not in topics:
            topics[topic] = {
                "correct": 0,
                "total": 0,
            }

        topics[topic]["total"] += 1

        if answer["correct"]:
            topics[topic]["correct"] += 1

    weak_topics = []
    topic_progress = []

    for topic, data in topics.items():
        score = round(
            (data["correct"] / data["total"]) * 100
        )

        if score < 70:
            weak_topics.append({
                "topic": topic,
                "accuracy": score,
            })

        topic_progress.append({
            "topic": topic,
            "progress": score,
        })

    return {
        "accuracy": accuracy,
        "questionsAnswered": len(history),
        "currentStreak": streak,
        "weakTopics": weak_topics,
        "topicProgress": topic_progress,
        "recommendations": generate_recommendations(student),
    }