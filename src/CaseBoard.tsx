import { useState } from 'react'

function CaseBoard() {

  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className="max-w-3xl mx-auto p-6 bg-[#ddb984]">
            <h1 className=''>Jest Detective</h1>
            <h2 className=''>Rank: Rookie</h2>
            <h2 className=''>Cases Solved: 0</h2>
        </div>
    </div>
  )
}

export default CaseBoard