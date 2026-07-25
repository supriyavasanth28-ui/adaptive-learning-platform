import "./parentDashboard.css";

export default function ParentDashboard({ dashboard }) {
  if (!dashboard) {
    return <div className="parent-dashboard">Loading...</div>;
  }

  return (
    <div className="parent-dashboard">
      <div className="dashboard-header">
        <h2>Parent Dashboard</h2>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Accuracy</h3>

          <p className="stat-number">{dashboard.accuracy}%</p>
        </div>

        <div className="stat-card">
          <h3>Questions</h3>

          <p className="stat-number">{dashboard.questionsAnswered}</p>
        </div>

        <div className="stat-card">
          <h3>Current Streak</h3>

          <p className="stat-number">🔥 {dashboard.currentStreak}</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Topic Progress</h3>

        {dashboard.topicProgress.map((topic) => (
          <div className="progress-item" key={topic.topic}>
            <div className="progress-header">
              <span>{topic.topic}</span>

              <span className="progress-percent">{topic.progress}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${topic.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-section">
        <h3>Areas To Practice</h3>

        {dashboard.recommendations.map((item) => (
          <div className="recommendation-card" key={item.topic}>
            <p>{item.topic}</p>

            <p>Current mastery: {item.accuracy}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
