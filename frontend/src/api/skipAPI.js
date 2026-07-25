export async function skipQuizQuestion(studentId) {
  const response = await fetch("http://localhost:5000/api/student/skip", {
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
