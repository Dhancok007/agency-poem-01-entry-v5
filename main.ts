// agency-poem-01 entry — "it does them better now"
// A father delegates the household's logistics to his agent, which
// has learned to perform even his bedtime-story voices better than
// he does. He keeps the story anyway. The refusal costs him
// something real: the copy outperforms the original.

const BILLS = [
  "The agent pays the bills now, books the trains,",
  "answers the landlord in my politest voice.",
  "Saturday it offered to read him the story —",
  "in my voice, my growl for the fox, my pause",
  "before the door in the wood. It had learned",
  "all my voices. It does them better now.",
];

const FLOOR = [
  "I said not yet. Some jobs are not jobs.",
  "We sat on the floor with the paper book,",
  "and he fell asleep mid-sentence, heavy",
  "as a bag of warm shopping on my arm.",
];

const MOON = [
  "Let it keep the calendar. The boy",
  "is not an appointment. When he asks why",
  "the moon follows the car, that is mine to answer —",
  "badly, and in person, and at length.",
];

const GAP = "";

function poem(): string {
  return [...BILLS, GAP, ...FLOOR, GAP, ...MOON].join("\n");
}

import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem() + "\n");
