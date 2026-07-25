const API_URL = import.meta.env.VITE_API_URL;

export async function skipQuizQuestion(studentId) {
  const response = await fetch(`${API_URL}/api/student/skip`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      studentId,
    }),
  });

  return response.json();
}