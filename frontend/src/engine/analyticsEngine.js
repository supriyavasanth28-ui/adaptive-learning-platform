export class AnalyticsEngine {
  constructor(student) {
    this.student = student;
  }

  getAccuracy() {
    const stats = this.student.stats;

    if (stats.totalQuestions === 0) {
      return 0;
    }

    return stats.correctAnswers / stats.totalQuestions;
  }

  getTotalAttempts() {
    return this.student.stats.totalQuestions;
  }

  getCorrectAnswers() {
    return this.student.stats.correctAnswers;
  }

  getIncorrectAnswers() {
    return this.student.stats.incorrectAnswers;
  }

  getAverageResponseTime() {
    const attempts = this.student.history.filter(
      (a) => a.responseTime !== null,
    );

    if (attempts.length === 0) {
      return 0;
    }

    const total = attempts.reduce((sum, a) => sum + a.responseTime, 0);

    return total / attempts.length;
  }

  getProgressByTopic() {
    const topics = {};

    for (const attempt of this.student.history) {
      const topic = attempt.topic;

      if (!topics[topic]) {
        topics[topic] = {
          total: 0,
          correct: 0,
        };
      }

      topics[topic].total++;

      if (attempt.correct) {
        topics[topic].correct++;
      }
    }

    for (const topic in topics) {
      topics[topic].accuracy = topics[topic].correct / topics[topic].total;
    }

    return topics;
  }

  getWeakTopics() {
    const progress = this.getProgressByTopic();

    return Object.entries(progress)
      .filter(([topic, data]) => data.accuracy < 0.7)
      .map(([topic]) => topic);
  }

  getDashboardData() {
    return {
      accuracy: this.getAccuracy(),
      totalAttempts: this.getTotalAttempts(),
      averageResponseTime: this.getAverageResponseTime(),
      weakTopics: this.getWeakTopics(),
      progress: this.getProgressByTopic(),
    };
  }

  getAccuracyHistory() {
    let correct = 0;
    let total = 0;

    const history = [];

    for (const attempt of this.student.history) {
      total++;

      if (attempt.correct) {
        correct++;
      }

      history.push({
        date: new Date(attempt.timestamp).toLocaleDateString(),

        accuracy: correct / total,
      });
    }

    return history;
  }
}
