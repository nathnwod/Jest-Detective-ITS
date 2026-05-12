import React from 'react'

function ReadTheEvidence() {

  return (  
    <div className='min-h-screen flex items-center justify-center'>
        <div className='w-full max-w-[900px] p-4 sm:p-6 bg-[#ddb984] rounded-[2px] shadow-lg max-[375px]:rounded-none'>
            <div className='flex flex-row justify-between '>
                <h2 className=''>Case File #_</h2>
                <h2 className=''>Read the evidence</h2>
            </div>
             <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

             <h2 className=''>Which statement correctly describes this test?</h2>

             <div className="DIVIDER h-0.25 bg-black w-full my-3 sm:my-4" />

             <div className='code-container min-h-[250px] bg-[#c9a674] shadow-[inset_0_0_8px_rgba(0,0,0,0.25)]'>
                {/* CODE HERE */}
             </div>

             {/* OPTIONS */}

            <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

            <div className='flex justify-center gap-[50%]'>
                <button className='btn'>Submit</button>
                <button className='btn'>Hint</button>
            </div>

        </div>
    </div>
  )
}

export default ReadTheEvidence