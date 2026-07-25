from database.database import get_connection


def get_student(student_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT *
        FROM students
        WHERE id = ?
        """,
        (student_id,),
    )

    student = cursor.fetchone()

    conn.close()

    if student is None:
        return None

    return dict(student)


def update_student(student_id, data):
    conn = get_connection()

    try:
        cursor = conn.cursor()

        fields = []
        values = []

        allowed_fields = {
            "quizScore",
            "questionNumber",
            "difficultyLevel",
            "correctStreak",
            "incorrectStreak",
            "currentQuestion",
        }

        for key, value in data.items():
            if key in allowed_fields:
                fields.append(f"{key} = ?")
                values.append(value)

        if not fields:
            return

        values.append(student_id)

        query = f"""
            UPDATE students
            SET {", ".join(fields)}
            WHERE id = ?
        """

        cursor.execute(query, values)

        conn.commit()

    finally:
        conn.close()


def delete_student(student_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        DELETE FROM students
        WHERE id = ?
        """,
        (student_id,),
    )

    conn.commit()
    conn.close()


def get_history(student_id="default"):
    conn = get_connection()

    try:
        cursor = conn.cursor()

        cursor.execute(
            """
            SELECT
                question_id,
                topic,
                answer,
                correct
            FROM answers
            WHERE student_id = ?
            ORDER BY id
            """,
            (student_id,),
        )

        rows = cursor.fetchall()

    finally:
        conn.close()

    return [
        dict(row)
        for row in rows
    ]


def save_answer(
    student_id,
    question_id,
    topic,
    answer,
    correct,
):
    conn = get_connection()

    try:
        cursor = conn.cursor()

        cursor.execute(
            """
            INSERT INTO answers (
                student_id,
                question_id,
                topic,
                answer,
                correct
            )
            VALUES (?, ?, ?, ?, ?)
            """,
            (
                student_id,
                question_id,
                topic,
                answer,
                correct,
            ),
        )

        conn.commit()

    finally:
        conn.close()