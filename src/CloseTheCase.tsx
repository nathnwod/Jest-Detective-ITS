import React from 'react'
import { useState } from 'react'

function CloseTheCase() {
    const [userCode, setUserCode] = useState('')

    const question = {
        prompt: 'The suspect: a function that doubles even numbers and leaves odd numbers alone. Write tests that prove it works AND catch at least one edge case.',
        functionUnderTest: `function doubleEven(n: number): number {
  return n % 2 === 0 ? n * 2 : n;
}`,
        starterCode: `test("doubles an even number", () => {
  expect(doubleEven(4)).toBe(8);
});

`
    }

    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className='w-full max-w-[900px] p-4 sm:p-6 bg-[#ddb984] rounded-[2px] shadow-lg max-[375px]:rounded-none'>
                <div className='flex flex-row justify-between'>
                    <h2>Case File #_</h2>
                    <h2>Close the Case</h2>
                </div>

                <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

                <h2>{question.prompt}</h2>

                <div className="DIVIDER h-0.25 bg-black w-full my-3 sm:my-4" />

                {/* FUNCTION UNDER TEST */}
                <h2 className='mb-2'>The suspect:</h2>
                <pre className='code-container bg-[#c9a674] shadow-[inset_0_0_8px_rgba(0,0,0,0.25)] rounded-[2px] p-6 mb-4'>
                    <code className='text-xl'>{question.functionUnderTest}</code>
                </pre>

                {/* USER CODE EDITOR */}
                <h2 className='mb-2'>Your evidence:</h2>
                <textarea
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    placeholder={question.starterCode}
                    className='w-full min-h-[200px] bg-[#c9a674] shadow-[inset_0_0_8px_rgba(0,0,0,0.25)] rounded-[2px] p-6 text-xl font-mono outline-none resize-y'
                />

                {/* REQUIREMENTS CHECKLIST */}
                <div className='my-4 flex flex-col gap-1'>
                    <p>Required:</p>
                    <p>☐ happy path</p>
                    <p>☐ edge case</p>
                    <p>☐ descriptive name</p>
                </div>

                <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

                <div className='flex justify-center gap-[50%]'>
                    <button className='btn'>Run Jest</button>
                    <button className='btn'>Hint</button>
                </div>
            </div>
        </div>
    )
}

export default CloseTheCase