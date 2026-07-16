export interface ScoreVector {
  type1: number;
  type2: number;
  type3: number;
  type4: number;
  type5: number;
  type6: number;
  type7: number;
}

export type BristolType = keyof ScoreVector;

export interface Answer {
  text: string;
  scores: Partial<ScoreVector>;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface StoolTypeInfo {
  id: BristolType;
  number: number;
  name: string;
  shapeDescription: string;
  personalityHeadline: string;
  personalityText: string;
  healthNote: string;
  colorClass: string; // Tailwind text color class
  bgClass: string; // Tailwind background color class
  ringClass: string; // Tailwind ring color class
}

export type Screen = "intro" | "quiz" | "result";
