# apex-net-socket-forge

`apex-net-socket-forge` keeps a focused TypeScript implementation around networking. The project goal is to design a TypeScript verification harness for socket systems, covering visual model generation, layout fixtures, and failure-oriented tests.

## Project Rationale

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Apex Net Socket Forge Review Notes

The first comparison I would make is `packet span` against `retry pressure` because it shows where the rule is most opinionated.

## Feature Set

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/apex-net-socket-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `retry pressure`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The TypeScript code keeps the review rule close to the tests.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Test Command

The verifier is intentionally local. It should fail if the fixture score math, lane assignment, or language-specific test drifts.

## Next Improvements

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
