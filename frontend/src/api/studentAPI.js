const API_URL = "http://localhost:5000";

export async function startQuiz(studentId) {
  const response = await fetch(`${API_URL}/api/student/start`, {
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

export async function saveAnswer(answerData) {
  const response = await fetch(`${API_URL}/api/student/answer`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(answerData),
  });

  return response.json();
}

export async function resetStudent(studentId) {
  const response = await fetch(`${API_URL}/api/student/reset`, {
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

export async function getQuestion(studentId) {
  const response = await fetch(
    `${API_URL}/api/student/question?studentId=${studentId}`,
  );

  return response.json();
}

export async function createStudent(name) {
  const response = await fetch(`${API_URL}/api/student`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name,
    }),
  });

  return response.json();
}

export async function renameStudent(studentId, name) {
  const response = await fetch(
    `http://localhost:5000/api/student/${studentId}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
      }),
    },
  );

  return response.json();
}

export async function deleteStudent(studentId) {
  const response = await fetch(`${API_URL}/api/student/${studentId}`, {
    method: "DELETE",
  });

  return response.json();
}
