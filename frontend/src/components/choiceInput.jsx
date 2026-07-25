import { useState } from "react";

export default function ChoiceInput({ choices, onAnswer }) {
  const [selected, setSelected] = useState("");

  function handleChange(choice) {
    setSelected(choice);
    onAnswer(choice);
  }

  return (
    <div className="choices">
      {choices.map((choice) => (
        <label
          key={choice}
          className={
            selected === choice ? "choice-option selected" : "choice-option"
          }
        >
          <input
            type="radio"
            name="answer"
            value={choice}
            checked={selected === choice}
            onChange={() => handleChange(choice)}
          />

          <span>{choice}</span>
        </label>
      ))}
    </div>
  );
}
