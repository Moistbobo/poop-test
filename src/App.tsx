import { useEffect, useState } from "react";
import { IntroScreen } from "./components/IntroScreen";
import { QuestionCard } from "./components/QuestionCard";
import { ProgressBar } from "./components/ProgressBar";
import { ResultCard } from "./components/ResultCard";
import { questions } from "./data/questions";
import { stoolTypes } from "./data/stoolTypes";
import { addScores, findWinningType, sumAnswers, ZERO_SCORE } from "./utils/scoring";
import type { Screen, ScoreVector } from "./types/quiz";

type HistoryState =
  | { screen: "intro" }
  | { screen: "quiz"; index: number }
  | { screen: "result" };

export default function App() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<ScoreVector>(ZERO_SCORE);
  const [answers, setAnswers] = useState<(Partial<ScoreVector> | undefined)[]>(
    () => Array.from({ length: questions.length }, () => undefined)
  );

  const totalQuestions = questions.length;

  function resetQuiz() {
    setCurrentIndex(0);
    setScores(ZERO_SCORE);
    setAnswers(Array.from({ length: totalQuestions }, () => undefined));
  }

  function startQuiz() {
    resetQuiz();
    setScreen("quiz");
    window.history.pushState(
      { screen: "quiz", index: 0 },
      "",
      "#question-1"
    );
  }

  function handleAnswer(answerScores: Partial<ScoreVector>) {
    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = answerScores;
    setAnswers(nextAnswers);

    const nextScores = addScores(scores, answerScores);
    setScores(nextScores);

    if (currentIndex + 1 < totalQuestions) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      window.history.pushState(
        { screen: "quiz", index: nextIndex },
        "",
        `#question-${nextIndex + 1}`
      );
    } else {
      setScreen("result");
      window.history.pushState({ screen: "result" }, "", "#result");
    }
  }

  function restartQuiz() {
    resetQuiz();
    setScreen("intro");
  }

  function goToIntro() {
    resetQuiz();
    setScreen("intro");
  }

  function goToQuestion(index: number) {
    setCurrentIndex(index);
    setScores(
      sumAnswers(
        answers
          .slice(0, index + 1)
          .filter((answer): answer is Partial<ScoreVector> => answer !== undefined)
      )
    );
    setScreen("quiz");
  }

  function goToResult() {
    setScores(
      sumAnswers(
        answers.filter(
          (answer): answer is Partial<ScoreVector> => answer !== undefined
        )
      )
    );
    setScreen("result");
  }

  useEffect(() => {
    // Mark the initial page load as the intro state without adding a history
    // entry. All navigation is pushed from user actions.
    window.history.replaceState({ screen: "intro" }, "", window.location.href);

    const handlePopState = (event: PopStateEvent) => {
      const state = (event.state ?? { screen: "intro" }) as HistoryState;

      if (state.screen === "intro") {
        goToIntro();
        return;
      }

      if (state.screen === "quiz" && typeof state.index === "number") {
        goToQuestion(state.index);
        return;
      }

      if (state.screen === "result") {
        goToResult();
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            key={currentIndex}
            question={questions[currentIndex]}
            current={currentIndex + 1}
            total={totalQuestions}
            selectedAnswer={answers[currentIndex]}
            onAnswer={handleAnswer}
          />
        )}

        {screen === "result" && (
          <ResultCard result={result} onRestart={restartQuiz} />
        )}
      </main>

      <footer className="w-full text-center py-6 text-sm text-poop-400">
        Made for laughs. Not for doctors.
      </footer>
    </div>
  );
}
