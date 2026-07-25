import { AdaptiveEngine } from "./adaptiveEngine.js";
import { Student } from "../models/student.js";

export class QuizEngine {
  constructor({ questions, settings, student }) {
    this.questions = questions;
    this.settings = settings;

    this.pool = [];
    this.currentIndex = 0;
    this.score = 0;

    this.questionStartTime = null;
    this.hintsUsed = 0;

    this.student = Student.load("default");
    this.adaptive = new AdaptiveEngine(this.student, questions);
    this.usedQuestionIds = new Set();
  }

  start(type = "random") {
    this.pool = this.adaptive.createAdaptivePool();
    this.usedQuestionIds.clear();

    const limit = this.settings.number_of_questions;

    if (this.pool.length > limit) {
      this.pool = this.pool.slice(0, limit);
    }

    this.currentIndex = 0;
    this.score = 0;

    return this.nextQuestion();
  }

  buildPool(type) {
    let pool = [];

    for (const cat of this.questions.category) {
      if (type !== "random" && cat.name !== type) {
        continue;
      }

      for (const q of cat.questions) {
        pool.push({
          id: q.id || crypto.randomUUID(),
          topic: q.topic || cat.name,
          difficulty: q.difficulty || 1,

          ...q,

          type: q.type || cat.default_type || "choice",
        });
      }
    }

    return pool;
  }

  getCurrent() {
    return this.currentQuestion;
  }

  submit(userAnswer) {
    const q = this.getCurrent();
    const correct = this.checkAnswer(q, userAnswer);

    if (correct) this.score++;

    this.student.recordAnswer({
      questionId: q.id,
      topic: q.topic,
      difficulty: q.difficulty,
      correct,
      responseTime: this.responseTime,
      hintsUsed: this.hintsUsed,
    });

    return {
      correct,
      score: this.score,
      done: this.isDone(),
    };
  }

  checkAnswer(question, userAnswer) {
    if (!question) return false;

    const ua = String(userAnswer).trim().toUpperCase();

    for (const a of question.answer) {
      const correct = String(a).trim().toUpperCase();

      if (ua === correct) {
        return true;
      }
    }

    return false;
  }

  useHint() {
    this.hintsUsed++;
  }

  startQuestionTimer() {
    this.questionStartTime = Date.now();
  }

  next() {
    return this.nextQuestion();
  }

  nextQuestion() {
    const available = this.pool.filter((q) => !this.usedQuestionIds.has(q.id));

    if (available.length === 0) {
      return null;
    }

    const question = this.adaptive.selectQuestion(available);
    this.usedQuestionIds.add(question.id);
    this.currentQuestion = question;

    return question;
  }

  skip() {
    return this.nextQuestion();
  }

  isDone() {
    return this.usedQuestionIds.size >= this.pool.length;
  }

  getSettings() {
    return this.settings;
  }

  setResponseTime(time) {
    this.responseTime = time;
  }
}
