export default function Feedback({ message }) {
  if (!message) {
    return null;
  }

  const correct = message.toLowerCase().includes("correct");

  return (
    <div className={correct ? "feedback correct" : "feedback incorrect"}>
      <div className="feedback-icon">{correct ? "🟢" : "🔴"}</div>

      <div>
        <div className="feedback-title">
          {correct ? "Correct!" : "Try Again"}
        </div>

        <div className="feedback-message">
          {correct ? "Great job! Keep going!" : "Look carefully and try again."}
        </div>
      </div>
    </div>
  );
}
