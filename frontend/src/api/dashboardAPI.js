const API_URL = import.meta.env.VITE_API_URL;

export async function getDashboard(studentId) {
  const response = await fetch(
    `${API_URL}/api/student/dashboard?studentId=${studentId}`,
  );

  return response.json();
}
