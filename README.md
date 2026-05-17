# Jest Detective

An Intelligent Tutoring System for reading, writing, and debugging Jest tests. Built for CISC449, Spring 2026.

Students play a detective at a startup where code keeps breaking. Their job: investigate what went wrong and write tests to catch the bug. Buggy code is the crime scene, tests are the evidence.

## What it teaches

Three learning objectives from CISC275's Jest unit:

- **LO-3** — Write basic Jest tests using `expect()` and matchers
- **LO-4** — Write tests that cover edge cases
- **LO-5** — Read and describe what an existing test verifies

These map to 14 knowledge components (KCs) spanning writing tests, covering edge cases, and reading tests.

## How it works

Four case types, each themed as detective work:

| Case Type | What the student does |
|---|---|
| **Read the Evidence** | MCQ — pick the statement that correctly describes what a test verifies |
| **Lie Detector** | Spot tests that pass but don't actually prove anything |
| **Fill the Gap** | Drop the missing `expect` argument or matcher into a scaffold |
| **Close the Case** | Write full tests from scratch, autograded |

The Case Board dashboard tracks mastery per KC. Each attempt updates the targeted KC: +15% for correct, −10% for wrong. Rank tiers:

- **Rookie** (0–33%)
- **Detective** (34–74%)
- **Inspector** (75–100%)

When the student clicks "Next Case," the system picks the lowest-mastery KC that still has questions and serves one. The student is always working on their weakest skill.

## What's done

- React + TypeScript frontend (Vite)
- Case Board dashboard with per-KC progress bars and rank
- All four case-type screens implemented
- Question bank with KC-tagged items
- Adaptive next-case selection (weakest KC wins)
- Feedback screen showing mastery delta after each attempt
- Tailwind-based responsive UI

## What's not done

- **Real Jest execution for Close the Case.** Right now the grader just checks the student's code contains `expect(` and a call to the function under test — placeholder pattern-matching, not real grading.
- **Misconception probability tracking.** The design doc specifies tracking which specific wrong thinking a student keeps showing (e.g., M1: passing the function instead of calling it). Not implemented.
- **Hint ladder.** Hint buttons exist on every screen but don't do anything yet. The plan was nudge → specific → worked example.
- **Persistent progress.** Mastery resets when the page reloads. Needs localStorage.
- **Bigger question bank.** Currently 5 questions covering 5 KCs. Needs coverage for all 14.
- **Pilot testing.** Never run on a real student.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4

## Running it

```bash
npm install
npm run dev
```

## Repo layout

```
src/
  App.tsx              # Top-level state, screen routing, KC grading logic
  CaseBoard.tsx        # Dashboard with mastery bars per KC
  ReadTheEvidence.tsx  # MCQ screen
  LieDetector.tsx      # True/lie screen
  FillTheGap.tsx       # Fill-in-the-blank screen
  CloseTheCase.tsx     # Code-writing screen (placeholder grader)
  Feedback.tsx         # Post-attempt feedback overlay
  questionBank.ts      # KC-tagged questions
```
