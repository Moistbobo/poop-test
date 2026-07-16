import type { Question } from "../types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    text: "It’s Monday morning. How do you face the week?",
    answers: [
      { text: "With a rigid, color-coded plan and a to-do list.", scores: { type1: 3, type2: 2 } },
      { text: "With a general outline, but I stay flexible.", scores: { type3: 2, type4: 2 } },
      { text: "I roll with whatever happens.", scores: { type5: 3, type6: 1 } },
      { text: "Already overwhelmed and just trying to survive.", scores: { type7: 3, type6: 2 } },
    ],
  },
  {
    id: 2,
    text: "Pick your ideal weekend vibe.",
    answers: [
      { text: "Deep-cleaning and reorganizing the pantry.", scores: { type1: 3, type2: 2 } },
      { text: "A hike and a farmers-market run.", scores: { type3: 2, type4: 3 } },
      { text: "Brunch, then a nap, then maybe a movie.", scores: { type5: 3, type4: 1 } },
      { text: "No plans. My couch and I become one.", scores: { type6: 2, type7: 2 } },
    ],
  },
  {
    id: 3,
    text: "How do you usually handle conflict?",
    answers: [
      { text: "I address it immediately and directly.", scores: { type1: 3, type2: 1 } },
      { text: "I talk it through calmly once I’ve processed it.", scores: { type3: 2, type4: 2 } },
      { text: "I avoid it until it hopefully goes away.", scores: { type5: 2, type6: 2 } },
      { text: "I spiral internally and then vent to a friend.", scores: { type7: 3, type6: 2 } },
    ],
  },
  {
    id: 4,
    text: "Choose a snack.",
    answers: [
      { text: "Raw almonds and water.", scores: { type1: 3 } },
      { text: "Whole-grain toast with avocado.", scores: { type3: 2, type4: 2 } },
      { text: "A bowl of ice cream because I deserve it.", scores: { type5: 2, type6: 1 } },
      { text: "Whatever delivery app suggests fastest.", scores: { type6: 2, type7: 3 } },
    ],
  },
  {
    id: 5,
    text: "Your friend is 20 minutes late. You’re:",
    answers: [
      { text: "Annoyed. Time is money.", scores: { type1: 3 } },
      { text: "Mildly irritated but understanding.", scores: { type4: 2, type3: 1 } },
      { text: "Relaxed; gives me more phone time.", scores: { type5: 3 } },
      { text: "Anxious that something bad happened.", scores: { type7: 2, type6: 2 } },
    ],
  },
  {
    id: 6,
    text: "How organized is your phone’s home screen?",
    answers: [
      { text: "Folders, labels, color-coded widgets.", scores: { type1: 3, type2: 2 } },
      { text: "Mostly organized with a few random apps.", scores: { type3: 3, type4: 1 } },
      { text: "A chaotic, beautiful mess.", scores: { type5: 2, type6: 3 } },
      { text: "I can’t find anything; it stresses me out.", scores: { type7: 3 } },
    ],
  },
  {
    id: 7,
    text: "What’s your relationship with deadlines?",
    answers: [
      { text: "I finish early and double-check everything.", scores: { type1: 3, type2: 2 } },
      { text: "I finish on time with a sane pace.", scores: { type4: 3 } },
      { text: "I need a little adrenaline to get going.", scores: { type5: 2, type6: 2 } },
      { text: "I’m usually scrambling at the last minute.", scores: { type7: 3, type6: 2 } },
    ],
  },
  {
    id: 8,
    text: "Pick a vacation.",
    answers: [
      { text: "A structured group tour with an itinerary.", scores: { type1: 3, type2: 2 } },
      { text: "A relaxed road trip with planned stops.", scores: { type3: 2, type4: 2 } },
      { text: "A beach where I do absolutely nothing.", scores: { type5: 3, type6: 1 } },
      { text: "Spontaneous backpacking with no reservations.", scores: { type7: 3, type6: 2 } },
    ],
  },
  {
    id: 9,
    text: "How do you make big decisions?",
    answers: [
      { text: "Pro/con list, research, spreadsheet.", scores: { type1: 3, type2: 2 } },
      { text: "Gut feeling after sleeping on it.", scores: { type4: 3 } },
      { text: "Ask three friends and go with the majority.", scores: { type5: 3, type6: 1 } },
      { text: "Panic, delay, then impulse-decide.", scores: { type7: 3, type6: 2 } },
    ],
  },
  {
    id: 10,
    text: "Which phrase best describes your energy?",
    answers: [
      { text: "Steady, disciplined, and a little stubborn.", scores: { type1: 2, type2: 2 } },
      { text: "Balanced and easygoing.", scores: { type4: 3, type3: 1 } },
      { text: "Playful, adaptable, sometimes scattered.", scores: { type5: 2, type6: 2 } },
      { text: "Intense, emotional, all over the place.", scores: { type7: 3, type6: 2 } },
    ],
  },
];
