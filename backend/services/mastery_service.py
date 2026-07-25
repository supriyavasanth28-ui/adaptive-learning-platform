def calculate_mastery(history):
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

    mastery = {}

    for topic, data in topics.items():
        mastery[topic] = round(
            (data["correct"] / data["total"]) * 100
        )

    return mastery