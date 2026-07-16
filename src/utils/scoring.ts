import type { BristolType, ScoreVector } from "../types/quiz";

export const ZERO_SCORE: ScoreVector = {
  type1: 0,
  type2: 0,
  type3: 0,
  type4: 0,
  type5: 0,
  type6: 0,
  type7: 0,
};

const BRISTOL_ORDER: BristolType[] = [
  "type1",
  "type2",
  "type3",
  "type4",
  "type5",
  "type6",
  "type7",
];

export function addScores(
  current: ScoreVector,
  addition: Partial<ScoreVector>
): ScoreVector {
  const next: ScoreVector = { ...current };
  for (const key of BRISTOL_ORDER) {
    next[key] += addition[key] ?? 0;
  }
  return next;
}

export function subtractScores(
  current: ScoreVector,
  subtraction: Partial<ScoreVector>
): ScoreVector {
  const next: ScoreVector = { ...current };
  for (const key of BRISTOL_ORDER) {
    next[key] -= subtraction[key] ?? 0;
  }
  return next;
}

export function findWinningType(scores: ScoreVector): BristolType {
  const entries = BRISTOL_ORDER.map((key) => [key, scores[key]] as const);
  const maxScore = Math.max(...entries.map(([, score]) => score));
  const tied = entries
    .filter(([, score]) => score === maxScore)
    .map(([key]) => key);

  if (tied.length === 1) {
    return tied[0];
  }

  // Tie-break: choose the type numerically closest to the ideal Type 4.
  return tied.reduce((best, current) => {
    const bestDistance = Math.abs(4 - Number(best.replace("type", "")));
    const currentDistance = Math.abs(4 - Number(current.replace("type", "")));
    return currentDistance < bestDistance ? current : best;
  });
}
