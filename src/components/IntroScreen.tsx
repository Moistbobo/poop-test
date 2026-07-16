interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-6 py-12 text-center">
      <div className="max-w-lg">
        <h1 className="text-5xl md:text-6xl font-bold text-poop-800 mb-4 tracking-tight">
          Poop Personality Test
        </h1>
        <p className="text-lg text-poop-600 mb-8">
          Ten playful questions. One scientifically questionable result. Discover
          which Bristol stool type matches your inner vibe.
        </p>

        <div className="bg-white border-2 border-poop-200 rounded-2xl p-6 mb-8 shadow-sm">
          <p className="text-poop-700 text-base leading-relaxed">
            This is pure satire based on the famous Bristol Stool Chart. No
            medical advice, no gross-out details — just a silly way to think
            about personality through an unexpectedly universal metaphor.
          </p>
        </div>

        <button
          type="button"
          onClick={onStart}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-poop-500 hover:bg-poop-600 active:bg-poop-700 rounded-full transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-poop-400 focus:ring-offset-2"
        >
          Start the quiz
        </button>

        <p className="mt-6 text-sm text-poop-400">
          For entertainment purposes only.
        </p>
      </div>
    </div>
  );
}
