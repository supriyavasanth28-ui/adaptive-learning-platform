import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

import Quiz from "./components/quiz/quiz";
import StudentSelector from "./pages/StudentSelector/studentSelector";
import { QuizEngine } from "./engine/quizEngine";
import { questions } from "./data/questions";
import { settings } from "./data/settings";
import { Student } from "./models/student";
import {
  renameStudent as renameStudentAPI,
  createStudent,
  deleteStudent,
} from "./api/studentAPI";
import { getDashboard } from "./api/dashboardAPI";
import ParentDashboard from "./components/dashboard/parentDashboard";

function App() {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [parentMode, setParentMode] = useState(false);
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function loadStudents() {
      const response = await fetch(`${API_URL}/api/students`);
      const data = await response.json();

      setStudents(data);

      const savedId = Number(localStorage.getItem("studentId"));

      setCurrentStudent(data.find((s) => s.id === savedId) || data[0]);
    }

    loadStudents();
  }, []);

  function handleStudentSelect(student) {
    setCurrentStudent(student);

    localStorage.setItem("studentId", student.id);

    window.location.reload();
  }

  async function handleRename(student) {
    const newName = prompt("Enter new name:", student.name);

    if (!newName) return;

    await renameStudentAPI(student.id, newName);

    setCurrentStudent({
      ...currentStudent,
      name: newName,
    });

    setStudents((prev) =>
      prev.map((s) => (s.id === student.id ? { ...s, name: newName } : s)),
    );
  }

  async function handleAddStudent() {
    const name = prompt("Enter student name:");

    if (!name) return;

    const result = await createStudent(name);

    const newStudent = {
      id: result.id,
      name,
    };

    setStudents((prev) => [...prev, newStudent]);

    setCurrentStudent(newStudent);

    localStorage.setItem("studentId", result.id);

    window.location.reload();
  }

  async function handleDeleteStudent(student) {
    await deleteStudent(student.id);

    const updatedStudents = students.filter((s) => s.id !== student.id);

    setStudents(updatedStudents);

    if (currentStudent.id === student.id) {
      if (updatedStudents.length > 0) {
        setCurrentStudent(updatedStudents[0]);

        localStorage.setItem("studentId", updatedStudents[0].id);
      } else {
        setCurrentStudent(null);

        localStorage.removeItem("studentId");
      }
    }
  }

  async function handleParentMode(student) {
    if (parentMode) {
      // go back to quiz
      setParentMode(false);
      setDashboard(null);
      return;
    }

    const data = await getDashboard(student.id);

    setDashboard(data);

    setParentMode(true);
  }

  return (
    <div className="app-layout">
      <div className="student-panel">
        <StudentSelector
          students={students}
          currentStudent={currentStudent}
          onSelectStudent={handleStudentSelect}
          onRename={handleRename}
          onAddStudent={handleAddStudent}
          onDelete={handleDeleteStudent}
          onParentMode={handleParentMode}
        />
      </div>

      <div className="quiz-panel">
        {!currentStudent ? (
          <div>Select or create a student to begin.</div>
        ) : parentMode ? (
          <ParentDashboard
            dashboard={dashboard}
            onClose={() => setParentMode(false)}
          />
        ) : (
          <Quiz key={currentStudent.id} currentStudent={currentStudent} />
        )}
      </div>
    </div>
  );
}

export default App;
