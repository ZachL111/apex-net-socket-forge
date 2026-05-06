function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 88,
    "capacity": 91,
    "latency": 17,
    "risk": 18,
    "weight": 7,
    "score": 169,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 83,
    "capacity": 89,
    "latency": 10,
    "risk": 17,
    "weight": 8,
    "score": 195,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 82,
    "capacity": 99,
    "latency": 19,
    "risk": 9,
    "weight": 6,
    "score": 187,
    "decision": "accept"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
