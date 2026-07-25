export default function Recommendations({ recommendations }) {
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="recommendations">
        <h2>🎉 Great job!</h2>

        <p>No weak areas right now.</p>
      </div>
    );
  }

  return (
    <div className="recommendations">
      <h2>Recommended Practice</h2>

      {recommendations.map((item) => (
        <div className="recommendation-card" key={item.topic}>
          <h3>{item.topic}</h3>

          <p>Accuracy: {item.accuracy}%</p>

          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}
