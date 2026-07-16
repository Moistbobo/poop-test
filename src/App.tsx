import { useState } from "react";
import { IntroScreen } from "./components/IntroScreen";
import { QuestionCard } from "./components/QuestionCard";
import { ProgressBar } from "./components/ProgressBar";
import { ResultCard } from "./components/ResultCard";
import { questions } from "./data/questions";
import { stoolTypes } from "./data/stoolTypes";
import { addScores, findWinningType, ZERO_SCORE } from "./utils/scoring";
import type { Screen, ScoreVector } from "./types/quiz";

export default function App() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<ScoreVector>(ZERO_SCORE);

  const totalQuestions = questions.length;

  function startQuiz() {
    setScreen("quiz");
    setCurrentIndex(0);
    setScores(ZERO_SCORE);
  }

  function handleAnswer(answerScores: Partial<ScoreVector>) {
    const nextScores = addScores(scores, answerScores);
    setScores(nextScores);

    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setScreen("result");
    }
  }

  function restartQuiz() {
    setScreen("intro");
    setCurrentIndex(0);
    setScores(ZERO_SCORE);
  }

  const winningTypeId = findWinningType(scores);
  const result = stoolTypes.find((stool) => stool.id === winningTypeId)!;

  return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--bg)]">
      <header className="w-full max-w-2xl px-6 pt-8 pb-4">
        {screen === "quiz" && (
          <ProgressBar current={currentIndex + 1} total={totalQuestions} />
        )}
      </header>

      <main className="w-full max-w-2xl flex flex-col flex-1">
        {screen === "intro" && <IntroScreen onStart={startQuiz} />}

        {screen === "quiz" && (
          <QuestionCard
            question={questions[currentIndex]}
            current={currentIndex + 1}
            total={totalQuestions}
            onAnswer={handleAnswer}
          />
        )}

        {screen === "result" && <ResultCard result={result} onRestart={restartQuiz} />}
      </main>

      <footer className="w-full text-center py-6 text-sm text-poop-400">
        Made for laughs. Not for doctors.
      </footer>
    </div>
  );
}
