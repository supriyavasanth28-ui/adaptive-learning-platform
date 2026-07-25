import "./studentSelector.css";

export default function StudentSelector({
  students = [],
  currentStudent,
  onSelectStudent,
  onRename,
  onDelete,
  onParentMode,
  onAddStudent,
}) {
  if (students.length === 0) {
    return (
      <div className="student-selector">
        <h2>Students</h2>

        <p>No students yet</p>

        <button onClick={onAddStudent}>Add Student</button>
      </div>
    );
  }

  if (!currentStudent) {
    return (
      <div className="student-selector">
        <h2>Students</h2>

        <p>Select a student</p>
      </div>
    );
  }

  const sortedStudents = [
    currentStudent,
    ...students.filter((s) => s.id !== currentStudent.id),
  ];

  return (
    <div className="student-selector">
      <h2>Students</h2>

      {sortedStudents.map((student) => (
        <div
          key={student.id}

          className={
            student.id === currentStudent.id ? "student active" : "student"
          }

          onClick={() => onSelectStudent(student)}
        >
          <span>{student.name}</span>

          {student.id === currentStudent.id && (
            <div className="student-actions">
              <button
                className="icon-button"
                title="Rename student"
                onClick={(e) => {
                  e.stopPropagation();

                  onRename(student);
                }}
              >
                ✏
              </button>

              <button
                className="icon-button"
                title="Student/Parent Mode"
                onClick={(e) => {
                  e.stopPropagation();

                  onParentMode(student);
                }}
              >
                👨‍👩‍👧
              </button>

              <button
                className="icon-button delete"
                title="Delete Student"
                onClick={(e) => {
                  e.stopPropagation();

                  onDelete(student);
                }}
              >
                ×
              </button>
            </div>
          )}
        </div>
      ))}

      <button onClick={onAddStudent}>Add Student</button>
    </div>
  );
}
