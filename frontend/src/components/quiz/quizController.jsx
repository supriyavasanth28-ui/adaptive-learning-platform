export default function QuizController({ onSubmit, onSkip, disabled }) {
  return (
    <div className="quiz-controls">
      <button className="secondary-button">← Previous</button>

      <button className="secondary-button" onClick={onSkip}>
        Skip
      </button>

      <button className="primary-button" onClick={onSubmit} disabled={disabled}>
        Submit →
      </button>
    </div>
  );
}
