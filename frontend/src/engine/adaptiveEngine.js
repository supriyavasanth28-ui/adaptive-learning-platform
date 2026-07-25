export class AdaptiveEngine {
  constructor(student, questions) {
    this.student = student;
    this.questions = questions;
  }

  getQuestionWeight(question) {
    const accuracy = this.student.getTopicAccuracy(question.topic);

    if (accuracy < 0.7) {
      return 3;
    }

    if (accuracy > 0.9) {
      return 1;
    }

    return 1;
  }

  createAdaptivePool() {
    const pool = [];

    for (const category of this.questions.category) {
      for (const question of category.questions) {
        const q = {
          ...question,
          topic: question.topic || category.name,
          difficulty: question.difficulty || 1,
          type: question.type || category.default_type || "choice",
        };

        const unlocked = this.student.getUnlockedDifficulty(q.topic);

        if (q.difficulty > unlocked) {
          continue;
        }

        q.weight = this.getQuestionWeight(q);

        pool.push(q);
      }
    }

    return pool;
  }

  selectQuestion(pool) {
    const totalWeight = pool.reduce((sum, q) => sum + q.weight, 0);

    let random = Math.random() * totalWeight;

    for (const question of pool) {
      random -= question.weight;

      if (random <= 0) {
        return question;
      }
    }

    return pool[pool.length - 1];
  }
}
