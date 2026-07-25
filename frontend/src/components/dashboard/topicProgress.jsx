export default function TopicProgress({ topics = [] }) {
  return (
    <div className="topic-progress">
      <h2>Topic Progress</h2>

      {topics.map((topic) => (
        <div key={topic.topic} className="topic-row">
          <div className="topic-header">
            <span>{topic.topic}</span>

            <span>{topic.progress}%</span>
          </div>

          <div className="progress-track">
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
  );
}
