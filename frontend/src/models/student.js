export class Student {
  constructor(id) {
    this.id = id;

    this.history = [];

    this.stats = {
      totalQuestions: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
    };
  }

  recordAnswer({
    questionId,
    topic,
    difficulty,
    correct,
    responseTime = null,
    hintsUsed = 0,
  }) {
    const attempt = {
      questionId,
      topic,
      difficulty,
      correct,
      responseTime,
      hintsUsed,
      timestamp: new Date().toISOString(),
    };

    this.history.push(attempt);

    this.stats.totalQuestions++;

    if (correct) {
      this.stats.correctAnswers++;
    } else {
      this.stats.incorrectAnswers++;
    }

    this.save();
  }

  getAccuracy() {
    if (this.stats.totalQuestions === 0) {
      return 0;
    }

    return this.stats.correctAnswers / this.stats.totalQuestions;
  }

  getTopicAccuracy(topic) {
    const topicAttempts = this.history.filter(
      (attempt) => attempt.topic === topic,
    );

    if (topicAttempts.length === 0) {
      return 0;
    }

    const correct = topicAttempts.filter((attempt) => attempt.correct).length;

    return correct / topicAttempts.length;
  }

  getWeakTopics(threshold = 0.7) {
    const topics = {};

    // Group attempts by topic
    this.history.forEach((attempt) => {
      if (!topics[attempt.topic]) {
        topics[attempt.topic] = [];
      }

      topics[attempt.topic].push(attempt);
    });

    const weakTopics = [];

    for (const topic in topics) {
      const attempts = topics[topic];

      const correct = attempts.filter((attempt) => attempt.correct).length;

      const accuracy = correct / attempts.length;

      if (accuracy < threshold) {
        weakTopics.push({
          topic,
          accuracy,
          attempts: attempts.length,
        });
      }
    }

    return weakTopics;
  }

  getUnlockedDifficulty(topic) {
    const attempts = this.history.filter((h) => h.topic === topic);

    if (attempts.length === 0) {
      return 1;
    }

    const byDifficulty = {};

    for (const attempt of attempts) {
      const d = attempt.difficulty;

      if (!byDifficulty[d]) {
        byDifficulty[d] = {
          total: 0,
          correct: 0,
        };
      }

      byDifficulty[d].total++;

      if (attempt.correct) {
        byDifficulty[d].correct++;
      }
    }

    let unlocked = 1;

    while (true) {
      const stats = byDifficulty[unlocked];

      if (!stats) {
        break;
      }

      const accuracy = stats.correct / stats.total;

      if (stats.total >= 10 && accuracy >= 0.8) {
        unlocked++;
      } else {
        break;
      }
    }

    return unlocked;
  }

  getQuestionHistory(questionId) {
    return this.history.filter((attempt) => attempt.questionId === questionId);
  }

  hasMasteredQuestion(questionId) {
    const history = this.getQuestionHistory(questionId);

    if (history.length < 3) {
      return false;
    }

    const recentAttempts = history.slice(-3);

    return recentAttempts.every((attempt) => attempt.correct);
  }

  save() {
    localStorage.setItem(`student_${this.id}`, JSON.stringify(this));
  }

  static load(id) {
    const data = localStorage.getItem(`student_${id}`);

    if (!data) {
      return new Student(id);
    }

    const parsed = JSON.parse(data);

    const student = new Student(parsed.id);

    student.history = parsed.history;
    student.stats = parsed.stats;

    return student;
  }
}

window.Student = Student;
