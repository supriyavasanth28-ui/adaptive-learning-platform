from database.database import get_connection


def create_tables():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS parents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT DEFAULT 'Parent',
            quizScore INTEGER DEFAULT 0
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            parent_id INTEGER,
            name TEXT DEFAULT 'Student',
            quizScore INTEGER DEFAULT 0,
            questionNumber INTEGER DEFAULT 0,
            difficultyLevel INTEGER DEFAULT 1,
            correctStreak INTEGER DEFAULT 0,
            incorrectStreak INTEGER DEFAULT 0,
            currentQuestion TEXT,
            FOREIGN KEY(parent_id)
                REFERENCES parents(id)
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS answers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER,
            question_id TEXT,
            topic TEXT,
            answer TEXT,
            correct BOOLEAN,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    """)

    conn.commit()
    conn.close()