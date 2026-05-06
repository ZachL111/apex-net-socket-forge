# Apex Net Socket Forge Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 147 | ship |
| stress | retry pressure | 127 | watch |
| edge | route drift | 149 | ship |
| recovery | socket risk | 148 | ship |
| stale | packet span | 191 | ship |

Start with `stale` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `packet span` against `retry pressure`, not the raw score alone.
