import React from 'react'
import { useState } from 'react'


function LieDetector() {
    const [selected, setSelected] = useState<number | null>(null)

    const question = {
        prompt: 'A coworker wrote this test. They say it proves that isEmpty([1,2,3]) returns false. Are they telling the truth?', 
        code: `test("isEmpty returns false for non-empty array", () => {
  expect(false).toBe(false);
});`,
        options: [
            {label: 'TRUTH', text: 'This test proves the claim.'},
            {label: 'LIE', text: 'This test passes but proves nothing.'}
        ]
    }

  return (  
    <div className='flex min-h-screen items-center justify-center'>
        <div className='w-full max-w-[900px] p-4 sm:p-6 bg-[#ddb984] rounded-[2px] shadow-lg max-[375px]:rounded-none'>
            <div className='flex flex-row justify-between '>
                <h2 className=''>Case File #_</h2>
                <h2 className=''>Lie Detector</h2>
            </div>
            
            <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

            <h2>{question.prompt}</h2>

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
                  <span className='text-lg'>[{opt.label}] {opt.text}</span>
                </label>
              ))}
            </div>

            
            <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

            <div className='flex justify-center gap-[50%]'>
                <button className='btn'>Submit</button>
                <button className='btn'>Hint</button>
            </div>
             
        </div>
    
    </div>
  )
}

export default LieDetector