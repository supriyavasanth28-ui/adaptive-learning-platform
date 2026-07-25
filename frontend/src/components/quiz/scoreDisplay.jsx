export default function ScoreDisplay({ score, total }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="score-card">
      <div className="score-title">⭐ Score</div>

      <div className="score-number">
        {score} / {total}
      </div>
    </div>
  );
}
