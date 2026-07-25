const API = import.meta.env.VITE_API_URL;

export async function submitAnswer(data) {
  const response = await fetch(`${API}/api/student/submit`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return response.json();
}
