import React from 'react'

function Feedback({
  correct,
  kcName,
  delta,
  newPercentage,
  onContinue,
}: {
  correct: boolean
  kcName: string
  delta: number
  newPercentage: number
  onContinue: () => void
}) {
  return (
    <div className='flex min-h-screen items-center justify-center p-2 sm:p-4'>
      <div className='w-full max-w-[700px] p-4 sm:p-6 bg-[#ddb984] rounded-[2px] shadow-lg flex flex-col'>

        {/* HEADER */}
        <div className='flex flex-row justify-between'>
          <h2>Case File #_</h2>
          <h2>{correct ? 'Case Closed' : 'Crash Report'}</h2>
        </div>

        <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

        {/* HEADLINE */}
        {correct ? (
          <h1 className='text-center'>The bug is in custody.</h1>
        ) : (
          <h1 className='text-center text-[#8b2c2c]'>The bug got away.</h1>
        )}

        <div className="DIVIDER h-0.25 bg-black w-full my-3 sm:my-4" />

        {/* DETAILS */}
        <div className='flex flex-col gap-3 my-4 items-center'>
          <p className='text-lg'>
            Skill: <span className='font-bold'>{kcName}</span>
          </p>
          <p className='text-lg'>
            {delta >= 0 ? '+' : ''}{delta}% mastery
          </p>
          <p className='text-lg'>
            Now at <span className='font-bold'>{newPercentage}%</span>
          </p>
        </div>

        <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

        <div className='flex justify-center my-4'>
          <button className='btn' onClick={onContinue}>Continue</button>
        </div>

      </div>
    </div>
  )
}

export default Feedback