import { useEffect, useState } from "react";

import QuizCard from "./quizCard";
import Feedback from "./feedback";
import ProgressBar from "./progressBar";
import ScoreDisplay from "./scoreDisplay";
import QuizController from "./quizController";
import SoundButton from "./soundButton";
import QuestionImage from "./questionImage";
import Hint from "./hint";
import QuizComplete from "./quizComplete";

import QuestionDisplay from "../QuestionDisplay";
import ChoiceInput from "../ChoiceInput";
import TextInput from "../TextInput";

import { getQuestion } from "../../api/questionAPI";
import { submitAnswer as submitQuizAnswer } from "../../api/quizAPI";
import { skipQuizQuestion } from "../../api/skipAPI";
import { startQuiz, resetStudent } from "../../api/studentAPI";

export default function Quiz({ currentStudent }) {
  const [studentId, setStudentId] = useState(1);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const [hint, setHint] = useState("");
  const [hintsUsed, setHintsUsed] = useState(0);

  const [startTime, setStartTime] = useState(null);
  const [responseTime, setResponseTime] = useState(0);
  const [lastResponseTime, setLastResponseTime] = useState(0);

  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(1);

  const [finished, setFinished] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!currentStudent) return;

    async function loadQuiz() {
      setStudentId(currentStudent.id);

      const currentQuestion = await getQuestion(currentStudent.id);

      setQuestion(currentQuestion.question);
      setScore(currentQuestion.score);
      setQuestionIndex(currentQuestion.questionNumber);
      setFinished(false);
      setAnswer("");
      setFeedback("");
      setHint("");
      setHintsUsed(0);
      setStartTime(Date.now());
    }

    loadQuiz();
  }, [currentStudent]);

  async function restartQuiz() {
    await startQuiz(studentId);

    const firstQuestion = await getQuestion(studentId);

    setQuestion(firstQuestion.question);
    setFinished(false);
    setScore(0);
    setQuestionIndex(1);
    setAnswer("");
    setFeedback("");
    setStartTime(Date.now());
  }

  if (finished) {
    return <QuizComplete score={score} total={20} onRestart={restartQuiz} />;
  }

  async function submitAnswer() {
    const timeTaken = (Date.now() - startTime) / 1000;
    setLastResponseTime(timeTaken);

    const result = await submitQuizAnswer({
      studentId,
      questionId: question.id,
      answer,
    });

    setScore(result.score);

    if (result.correct) {
      setFeedback("Correct! Great job!");
    } else {
      setFeedback("Try again!");
    }

    if (!result.finished) {
      setTimeout(() => {
        setQuestion(result.next);
        setAnswer("");
        setFeedback("");
        setQuestionIndex(result.questionNumber);
        setHint("");
        setHintsUsed(0);
        setStartTime(Date.now());
        setResponseTime(0);
        setScore(result.score);
      }, 1000);
    } else {
      setFinished(true);
      return;
    }
  }

  async function skipQuestion() {
    const result = await skipQuizQuestion(studentId);

    if (result.finished) {
      setScore(result.score);
      setFinished(true);
      return;
    }

    setQuestion(result.next);
    setAnswer("");
    setFeedback("");
    setHint("");
    setHintsUsed(0);
    setQuestionIndex(result.questionNumber);
    setStartTime(Date.now());
    setResponseTime(0);
  }

  if (!question) {
    return <div>Loading question...</div>;
  }

  function useHint() {
    setHint(question.hint);

    setHintsUsed(hintsUsed + 1);
  }

  return (
    <QuizCard>
      <ProgressBar current={questionIndex} total={20} />

      <ScoreDisplay score={score} total={20} />

      <p>
        Time:
        {lastResponseTime.toFixed(1)}
        seconds
      </p>

      <QuestionDisplay question={question.question} />

      <Hint text={question.hint} onUse={useHint} />

      {hint && <p>💡 {hint}</p>}

      <QuestionImage src={question.image} alt={question.question} />

      <SoundButton
        text={
          question.question +
          "." +
          (question.choices
            ? " Choices are: " + question.choices.join(", ")
            : "")
        }
      />

      {question.type === "choice" ? (
        <ChoiceInput choices={question.choices} onAnswer={setAnswer} />
      ) : (
        <TextInput onAnswer={setAnswer} />
      )}

      <Feedback message={feedback} />

      <QuizController
        onSubmit={submitAnswer}
        onSkip={skipQuestion}
        disabled={!answer}
      />
    </QuizCard>
  );
}
