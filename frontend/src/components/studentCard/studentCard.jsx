import "./StudentCard.css";

export default function StudentCard({ student, onSelect, onRename }) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>

      <button onClick={() => onSelect(student)}>Continue</button>

      <button onClick={() => onRename(student)}>Rename</button>
    </div>
  );
}
