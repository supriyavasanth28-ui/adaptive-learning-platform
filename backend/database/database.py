import sqlite3

DATABASE = "data/quiz.db"


def get_connection():
    """Create and return a connection to the quiz database."""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn