def generate_recommendations(student):
    recommendations = []

    history = student["history"]

    if not history:
        return recommendations

    topic_data = {}

    for answer in history:
        topic = answer.get("topic", "unknown")

        if topic not in topic_data:
            topic_data[topic] = {
                "correct": 0,
                "total": 0,
            }

        topic_data[topic]["total"] += 1

        if answer["correct"]:
            topic_data[topic]["correct"] += 1

    for topic, data in topic_data.items():
        accuracy = round(
            (data["correct"] / data["total"]) * 100
        )

        if accuracy < 70:
            recommendations.append({
                "topic": topic,
                "accuracy": accuracy,
                "message": f"Practice {topic} to improve mastery",
            })

    return recommendations