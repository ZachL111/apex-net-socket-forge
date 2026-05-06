function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 53, slack: 35, drag: 19, confidence: 63 };
equal(domainReviewScore(item), 147);
equal(domainReviewLane(item), "ship");
