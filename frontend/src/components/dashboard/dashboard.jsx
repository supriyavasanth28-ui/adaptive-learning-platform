import { useEffect, useState } from "react";

import StatCard from "./statCard";
import TopicProgress from "./topicProgress";
import Recommendations from "./recommendations";

import { getDashboard } from "../../api/dashboardAPI";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const result = await getDashboard();

      setData(result);
    }

    load();
  }, []);

  if (!data) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div className="dashboard">
      <h1>📊 My Progress</h1>

      <div className="stats-grid">
        <StatCard title="Accuracy" value={`${data.accuracy}%`} />

        <StatCard title="Questions Answered" value={data.questionsAnswered} />

        <StatCard title="Current Streak" value={`${data.currentStreak} ⭐`} />
      </div>

      <TopicProgress topics={data.topicProgress} />

      <Recommendations recommendations={data.recommendations} />
    </div>
  );
}
