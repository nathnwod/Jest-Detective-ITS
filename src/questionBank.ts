export type Question = {
  id: string
  type: 'evidence' | 'lie' | 'gap' | 'close'
  kcId: string  // which KC this question tests
  prompt: string
  code?: string
  options?: { label?: string; text: string }[]
  correctIndex?: number
  codeBefore?: string
  codeAfter?: string
  correctAnswer?: string
  functionUnderTest?: string
  starterCode?: string
}

export const questionBank: Question[] = [
  // KC1: test() / it() call
  {
    id: 'q1',
    type: 'evidence',
    kcId: 'kc1',
    prompt: "Which line correctly declares a Jest test?",
    code: `// option declarations`,
    options: [
      { text: 'function test("works", () => { ... })' },
      { text: 'test("works", () => { ... })' },
      { text: 'describe("works") => { ... }' },
      { text: 'jest("works", () => { ... })' },
    ],
    correctIndex: 1,
  },

  // KC2: Description string
  {
    id: 'q2',
    type: 'evidence',
    kcId: 'kc2',
    prompt: "Which description string is most useful?",
    code: `test(???, () => { expect(add(2,3)).toBe(5) })`,
    options: [
      { text: '"test1"' },
      { text: '"works"' },
      { text: '"adds 2 and 3 to get 5"' },
      { text: '"add"' },
    ],
    correctIndex: 2,
  },

  // KC4: expect() with a value
  {
    id: 'q3',
    type: 'gap',
    kcId: 'kc4',
    prompt: "Fill in expect() with the correct value.",
    codeBefore: `test("returns 5", () => {\n  expect(`,
    codeAfter: `).toBe(5)\n})`,
    correctAnswer: 'add(2, 3)',
  },

  // KC10: choosing the right matcher (Lie Detector)
  {
    id: 'q4',
    type: 'lie',
    kcId: 'kc10',
    prompt: "Does this test prove that isEmpty([1,2,3]) returns false?",
    code: `test("isEmpty returns false for non-empty array", () => {
  expect(false).toBe(false);
});`,
    options: [
      { label: 'TRUTH', text: 'This test proves the claim.' },
      { label: 'LIE', text: 'This test passes but proves nothing.' },
    ],
    correctIndex: 1,
  },

  // KC12: one test per edge case
  {
    id: 'q5',
    type: 'close',
    kcId: 'kc12',
    prompt: 'Write tests for doubleEven. Include happy path AND edge case.',
    functionUnderTest: `function doubleEven(n: number): number {
  return n % 2 === 0 ? n * 2 : n;
}`,
    starterCode: `test("doubles 4", () => {\n  expect(doubleEven(4)).toBe(8)\n})\n\n`,
  },
]