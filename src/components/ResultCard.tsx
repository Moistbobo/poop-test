import { useState } from "react";
import { StoolSvg } from "./StoolSvg";
import type { StoolTypeInfo } from "../types/quiz";

const SITE_URL = "https://poop.googoogaagaa.club/";

interface ResultCardProps {
  result: StoolTypeInfo;
  onRestart: () => void;
}

export function ResultCard({ result, onRestart }: ResultCardProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `I took the Poop Personality Test and I'm ${result.name} (Type ${result.number} on the Bristol chart).\n\nFind out your type: ${SITE_URL}`;

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col items-center flex-1 px-6 py-8 md:py-12 max-w-2xl mx-auto w-full text-center">
      <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-poop-400">
        Your result
      </div>

      <div
        className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ring-4 ring-offset-4 ${result.ringClass} bg-white`}
      >
        <span className={`text-3xl font-bold ${result.colorClass}`}>
          {result.number}
        </span>
      </div>

      <h1
        className={`text-4xl md:text-5xl font-bold mb-2 ${result.colorClass}`}
      >
        {result.name}
      </h1>
      <p className="text-poop-500 italic mb-8">
        {result.shapeDescription}
      </p>

      <div className="w-full max-w-xs h-32 mb-8">
        <StoolSvg type={result.id} />
      </div>

      <div className="bg-white border-2 border-poop-200 rounded-2xl p-6 mb-6 shadow-sm w-full">
        <h2 className="text-xl font-semibold text-poop-800 mb-2">
          {result.personalityHeadline}
        </h2>
        <p className="text-poop-600 leading-relaxed mb-4">
          {result.personalityText}
        </p>
        <div
          className={`inline-block px-4 py-2 rounded-lg text-white text-sm font-medium ${result.bgClass}`}
        >
          {result.healthNote}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button
          type="button"
          onClick={handleShare}
          className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-poop-700 bg-white border-2 border-poop-300 hover:bg-poop-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-poop-400 focus:ring-offset-2"
        >
          {copied ? "Copied!" : "Share my result"}
        </button>

        <button
          type="button"
          onClick={onRestart}
          className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-poop-500 hover:bg-poop-600 active:bg-poop-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-poop-400 focus:ring-offset-2"
        >
          Retake quiz
        </button>
      </div>
    </div>
  );
}
