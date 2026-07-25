export default function QuizComplete({ score, total, onRestart }) {
  const accuracy = Math.round((score / total) * 100);

  return (
    <div className="quiz-card">
      <h1>🎉 Quiz Complete!</h1>

      <h2>
        Score: {score}/{total}
      </h2>

      <p>Accuracy: {accuracy}%</p>

      <button onClick={onRestart}>Try Again</button>
    </div>
  );
}
