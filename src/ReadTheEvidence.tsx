import React from 'react'
import { useState } from 'react'


function ReadTheEvidence({ onBack }: { onBack: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)


const question = {
    prompt: "Which statement correctly describes this test?",
    code: `test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});`,
    options: [
      "It checks that the add function exists.",
      "It checks that add(2, 3) returns exactly 5.",
      "It checks that add is truthy.",
      "It checks that 5 is inside add.",
    ],
    correctIndex: 1,
  }

  return (  
    <div className='min-h-screen flex items-center justify-center'>
        <div className='w-full max-w-[900px] p-4 sm:p-6 bg-[#ddb984] rounded-[2px] shadow-lg max-[375px]:rounded-none'>
            <div className='flex flex-row justify-between '>
                <h2 className=''>Case File #_</h2>
                <h2 className=''>Read the Evidence</h2>
            </div>
             <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

             <h2 className=''>{question.prompt}</h2>

             <div className="DIVIDER h-0.25 bg-black w-full my-3 sm:my-4" />

             <pre className='flex items-center code-container min-h-[100px] bg-[#c9a674] shadow-[inset_0_0_8px_rgba(0,0,0,0.25)] rounded-[2px]'>
                <code className='text-xl m-6'>{question.code}</code>
             </pre>

             {/* OPTIONS */}
            <div className='flex flex-col my-4'>
              {question.options.map((opt, i) => (
                <label
                  key={i}
                  className='flex items-center gap-3 p-3 cursor-pointer hover:bg-[#e1c399] rounded-[25px]'
                >
                  <input
                    type='radio'
                    name='answer'
                    checked={selected === i}
                    onChange={() => setSelected(i)}
                    className='w-4 h-4 accent-[#8b2c2c]'
                  />
                  <span className='text-lg'>{String.fromCharCode(65 + i)}. {opt}</span>
                </label>
              ))}
            </div>

            <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

            <div className='flex justify-between'>
                <button className='btn' onClick={onBack}>Back</button>
                <div className='flex gap-4'>
                  <button className='btn'>Submit</button>
                  <button className='btn'>Hint</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ReadTheEvidence