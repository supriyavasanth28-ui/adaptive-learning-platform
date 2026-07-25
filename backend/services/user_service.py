from database.database import get_connection


def initialize_server():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT COUNT(*) FROM parents"
    )

    parent_count = cursor.fetchone()[0]

    if parent_count == 0:
        cursor.execute(
            """
            INSERT INTO parents(name)
            VALUES(?)
            """,
            ("Parent",),
        )

        parent_id = cursor.lastrowid

        cursor.execute(
            """
            INSERT INTO students(
                parent_id,
                name
            )
            VALUES (?, ?)
            """,
            (
                parent_id,
                "Student",
            ),
        )

    conn.commit()
    conn.close()


def get_students(parent_id=1):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT *
        FROM students
        WHERE parent_id = ?
        """,
        (parent_id,),
    )

    students = cursor.fetchall()

    conn.close()

    return [
        dict(student)
        for student in students
    ]


def create_student(name, parent_id=1):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO students(
            parent_id,
            name,
            quizScore,
            questionNumber,
            difficultyLevel,
            correctStreak,
            incorrectStreak,
            currentQuestion
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            parent_id,
            name,
            0,      # quiz score
            1,      # question number
            1,      # difficulty
            0,      # correct streak
            0,      # incorrect streak
            None,   # current question
        ),
    )

    conn.commit()

    student_id = cursor.lastrowid

    conn.close()

    return student_id


def rename_student(student_id, name):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        UPDATE students
        SET name = ?
        WHERE id = ?
        """,
        (
            name,
            student_id,
        ),
    )

    conn.commit()
    conn.close()