const API = "http://localhost:5000";

export async function getQuestion(studentId) {
  const response = await fetch(
    `${API}/api/student/question?studentId=${studentId}`,
  );
  return response.json();
}
