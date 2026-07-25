import { useState } from "react";

export default function TextInput({ onAnswer }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const answer = e.target.value;

    setValue(answer);

    if (onAnswer) {
      onAnswer(answer);
    }
  }

  return (
    <input
      type="text"

      value={value}

      onChange={handleChange}

      className="text-answer"
    />
  );
}
