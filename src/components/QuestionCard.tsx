import type { Question, ScoreVector } from "../types/quiz";

interface QuestionCardProps {
  question: Question;
  current: number;
  total: number;
  onAnswer: (scores: Partial<ScoreVector>) => void;
}

export function QuestionCard({
  question,
  current,
  total,
  onAnswer,
}: QuestionCardProps) {
  return (
    <div className="flex flex-col flex-1 px-6 py-8 md:py-12 max-w-2xl mx-auto w-full">
      <div className="mb-4">
        <span className="text-sm font-medium text-poop-400">
          Question {current} of {total}
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-poop-800 mb-8">
        {question.text}
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onAnswer(answer.scores)}
            className="text-left px-6 py-5 rounded-xl border-2 border-poop-200 bg-white text-poop-700 font-medium hover:border-poop-400 hover:bg-poop-50 active:bg-poop-100 transition-colors focus:outline-none focus:ring-2 focus:ring-poop-400 focus:ring-offset-2"
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
