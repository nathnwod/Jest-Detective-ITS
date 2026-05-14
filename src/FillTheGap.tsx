import React from 'react'
import { useState } from 'react'
import type { Question } from './questionBank'

function FillTheGap({ question, onBack, onGrade }: { question: Question, onBack: () => void, onGrade: (correct: boolean) => void }) {
    const [answer, setAnswer] = useState('')

    const handleSubmit = () => {
        onGrade(answer.trim() === question.correctAnswer)
    }

    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className='w-full max-w-[900px] p-4 sm:p-6 bg-[#ddb984] rounded-[2px] shadow-lg max-[375px]:rounded-none'>
                <div className='flex flex-row justify-between'>
                    <h2>Case File #_</h2>
                    <h2>Fill the Gap</h2>
                </div>

                <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

                <h2>{question.prompt}</h2>

                <div className="DIVIDER h-0.25 bg-black w-full my-3 sm:my-4" />

                <pre className='code-container min-h-[100px] bg-[#c9a674] shadow-[inset_0_0_8px_rgba(0,0,0,0.25)] rounded-[2px] p-6'>
                    <code className='text-xl'>
                        {question.codeBefore}
                        <input
                            type='text'
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className='bg-[#e1c399] border-b-2 border-[#1a1a1a] px-2 mx-1 font-mono text-xl outline-none rounded-[5px]'
                            placeholder='Answer here'
                        />
                        {question.codeAfter}
                    </code>
                </pre>

                <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

                <div className='flex justify-between '>
                    <button className='btn' onClick={onBack}>Back</button>
                    <div className='flex gap-4'>
                        <button className='btn' onClick={handleSubmit}>Submit</button>
                        <button className='btn'>Hint</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FillTheGap