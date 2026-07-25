const API = import.meta.env.VITE_API_URL;

export async function getQuestion(studentId) {
  const response = await fetch(
    `${API}/api/student/question?studentId=${studentId}`,
  );
  return response.json();
}
