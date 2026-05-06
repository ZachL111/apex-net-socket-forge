import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 53, slack: 35, drag: 19, confidence: 63 };
assert.equal(domainReviewScore(item), 147);
assert.equal(domainReviewLane(item), "ship");
