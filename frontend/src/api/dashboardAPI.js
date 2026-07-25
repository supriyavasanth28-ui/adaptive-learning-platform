const API_URL = "http://localhost:5000";

export async function getDashboard(studentId) {
  const response = await fetch(
    `${API_URL}/api/student/dashboard?studentId=${studentId}`,
  );

  return response.json();
}
