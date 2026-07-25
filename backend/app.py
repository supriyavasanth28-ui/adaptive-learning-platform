import json

from flask import Flask, jsonify, request
from flask_cors import CORS

from database.database import get_connection
from database.schema import create_tables
from models.adaptive_engine import AdaptiveEngine
from services.analytics_service import calculate_dashboard
from services.quiz_service import QuizService
from services.student_service import (
    delete_student,
    get_history,
    get_student,
    save_answer,
    update_student,
)
from services.user_service import create_student, initialize_server, rename_student


app = Flask(__name__)

CORS(app)

QUIZ_LENGTH = 20

with open("data/questions.json") as file:
    QUESTIONS = json.load(file)

for category in QUESTIONS["category"]:
    for index, question in enumerate(category["questions"]):
        if "id" not in question:
            question["id"] = category["name"] + "_" + str(index)


@app.route("/")
def home():
    return jsonify({"message": "Adaptive Learning API running"})


@app.route("/api/student/start", methods=["POST"])
def start_quiz():
    data = request.json
    student_id = data["studentId"]

    student = get_student(student_id)

    if student is None:
        return jsonify({"error": "Student not found"}), 404

    student["quizScore"] = 0
    student["questionNumber"] = 1
    student["currentQuestion"] = None

    update_student(student_id, student)

    return jsonify({"message": "Quiz started"})


@app.route("/api/student/answer", methods=["POST"])
def receive_answer():

    data = request.json

    return jsonify({"message": "Answer received", "data": data})


@app.route("/api/student/question", methods=["GET"])
def get_question():

    student_id = request.args.get("studentId", type=int)

    student = get_student(student_id)

    if student is None:
        return jsonify({"error": "Student not found"}), 404

    student["history"] = get_history(student_id)
    student.setdefault("currentQuestion", None)
    student.setdefault("quizScore", 0)
    student.setdefault("questionNumber", 1)

    adaptive = AdaptiveEngine(student, QUESTIONS)

    if student.get("currentQuestion"):
        question_id = student["currentQuestion"]

        for category in QUESTIONS["category"]:
            for q in category["questions"]:
                if q["id"] == question_id:
                    question = q
    else:
        question = adaptive.select_question()

        student["currentQuestion"] = question["id"]

        update_student(student_id, student)

    if "choices" in question:
        question["type"] = "choice"
    else:
        question["type"] = "text"

    return jsonify(
        {
            "question": question,
            "score": student["quizScore"],
            "questionNumber": student["questionNumber"],
        }
    )


@app.route("/api/student/submit", methods=["POST"])
def submit_answer():

    data = request.json

    student_id = data["studentId"]
    question_id = data["questionId"]
    user_answer = data["answer"]

    question = None
    question_topic = None

    for category in QUESTIONS["category"]:
        for q in category["questions"]:
            if q.get("id") == question_id:
                question = q
                question_topic = category["name"]

    if question is None:
        return jsonify({"error": "Question not found"}), 404

    quiz = QuizService(QUESTIONS)

    correct = quiz.check_answer(question, user_answer)

    student = get_student(student_id)

    if student is None:
        return jsonify({"error": "Student not found"}), 404

    student["history"] = get_history(student_id)

    if correct:
        student["quizScore"] += 1
        student["correctStreak"] += 1
        student["incorrectStreak"] = 0

        if student["correctStreak"] >= 3:

            student["difficultyLevel"] += 1

            student["correctStreak"] = 0

    else:
        student["incorrectStreak"] += 1
        student["correctStreak"] = 0

        if student["incorrectStreak"] >= 2:

            student["difficultyLevel"] -= 1

            student["incorrectStreak"] = 0

    student["difficultyLevel"] = max(1, min(3, student["difficultyLevel"]))

    student["questionNumber"] += 1
    finished = student["questionNumber"] > QUIZ_LENGTH

    save_answer(student_id, question_id, question_topic, user_answer, correct)

    if finished:
        return jsonify(
            {
                "correct": correct,
                "score": student["quizScore"],
                "questionNumber": student["questionNumber"],
                "finished": True,
            }
        )

    adaptive = AdaptiveEngine(student, QUESTIONS)

    next_question = adaptive.select_question()

    if "choices" in next_question:
        next_question["type"] = "choice"
    else:
        next_question["type"] = "text"

    student["currentQuestion"] = next_question["id"]
    update_student(student_id, student)

    return jsonify(
        {
            "correct": correct,
            "score": student["quizScore"],
            "questionNumber": student["questionNumber"],
            "finished": False,
            "next": next_question,
        }
    )


@app.route("/api/student/skip", methods=["POST"])
def skip_question():

    data = request.json
    student_id = data["studentId"]

    student = get_student(student_id)

    if student is None:
        return jsonify({"error": "Student not found"}), 404
    student["history"] = get_history(student_id)
    student["questionNumber"] += 1

    finished = student["questionNumber"] > QUIZ_LENGTH

    if finished:
        student["currentQuestion"] = None

        update_student(student_id, student)

        return jsonify(
            {
                "questionNumber": QUIZ_LENGTH,
                "score": student["quizScore"],
                "finished": True,
            }
        )

    adaptive = AdaptiveEngine(student, QUESTIONS)

    next_question = adaptive.select_question()

    if "choices" in next_question:
        next_question["type"] = "choice"
    else:
        next_question["type"] = "text"

    student["currentQuestion"] = next_question["id"]

    update_student(student_id, student)

    return jsonify(
        {
            "next": next_question,
            "questionNumber": student["questionNumber"],
            "score": student["quizScore"],
            "finished": False,
        }
    )


@app.route("/api/student/dashboard", methods=["GET"])
def dashboard():

    student_id = request.args.get("studentId", type=int)

    student = get_student(student_id)

    if student is None:
        return jsonify({"error": "Student not found"}), 404

    student["history"] = get_history(student_id)

    dashboard_data = calculate_dashboard(student)

    return jsonify(dashboard_data)


@app.route("/api/student", methods=["POST"])
def add_student():

    data = request.json

    student_id = create_student(data["name"])

    return jsonify({"id": student_id})


@app.route("/api/student/<int:id>", methods=["PUT"])
def rename(id):

    data = request.json

    rename_student(id, data["name"])

    return jsonify({"message": "updated"})


@app.route("/api/students", methods=["GET"])
def get_students_info():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT id, name
        FROM students
        """
    )

    students = cursor.fetchall()

    conn.close()

    return jsonify([dict(student) for student in students])


@app.route("/api/student/<int:id>", methods=["DELETE"])
def delete_student_route(id):

    delete_student(id)

    return jsonify({"message": "deleted"})


if __name__ == "__main__":

    create_tables()

    initialize_server()

    app.run(debug=True, port=5000)
