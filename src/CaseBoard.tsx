import React from 'react'
import { useState } from 'react'

function CaseBoard() {

  type Problem = {
    name: string
    percentage: number
    rank: string
  }

  const writingProblems: Problem[] = [
    { name: "Test()/it()", percentage: 92, rank: "Chief" },
    { name: "Description String", percentage: 45, rank: "Detective" },
    { name: "Callback body", percentage: 73, rank: "Detective" },
    { name: "Expect() with a value", percentage: 28, rank: "Rookie" },
    { name: "Calling the function", percentage: 60, rank: "Detective" },
    { name: "ToBe matcher", percentage: 88, rank: "Chief" },
    { name: "ToBeTruthy/Falsy", percentage: 15, rank: "Rookie" },
    { name: ".not", percentage: 50, rank: "Detective" },
    { name: "Choosing a matcher", percentage: 5, rank: "Rookie" },
  ]

return (
  // MAIN
  <div className='min-h-screen flex items-center justify-center p-2 sm:p-4 max-[375px]:p-0'>
    {/* CASEBOARD */}
    <div className="w-full max-w-[900px] p-4 sm:p-6 bg-[#ddb984] rounded-[2px] shadow-lg max-[375px]:rounded-none">
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4'>
        <h1 className='leading-none text-2xl sm:text-3xl lg:text-4xl'>Jest Detective</h1>
        <div className='flex flex-col sm:text-right'>
          <h2 className='text-base sm:text-lg'>Rank: Rookie</h2>
          <h2 className='text-base sm:text-lg'>Cases Solved: 0</h2>
        </div>
      </div>

      <div className="DIVIDER h-1 bg-black w-full my-3 sm:my-4" />

      <h1 className='text-xl sm:text-2xl lg:text-3xl'>Your Skills</h1>

      <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" /> 

      <h2 className='text-lg sm:text-xl'>Writing Tests</h2>

      <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

      {/* SKILLS WRAPPER */}
      <div className="flex flex-col gap-2">
        {writingProblems.map((problem, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-row items-center gap-3 sm:gap-6 lg:gap-[3.5rem]">
              {/* NAME */}
              <h2 className='flex-1 text-sm sm:text-base lg:text-lg'>{problem.name}</h2>
              {/* PROGRESS BAR */}
              <div className="progress-bar relative h-[18px] sm:h-[20px] flex-1 bg-gray-300 border-2 border-[#1a1a1a] rounded-[3px] hidden min-[700px]:block">
                <div className="h-full bg-[#6b8e5a]" style={{ width: `${problem.percentage}%` }}></div>
                <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-base lg:text-lg font-bold">
                  {problem.percentage}%
                </span>
              </div>

              {/* PERCENTAGE ONLY FOR SMALLER SCREENS */}
                <h2 className='flex-1 text-center font-extrabold max-[700px]:block hidden'>
                  <span className='font-bold' style={{ fontSynthesisWeight: 'auto' }}>
                    {problem.percentage}%
                  </span>
                </h2>

              {/* RANK */}
              <h2 className='flex-1 text-right text-sm sm:text-base lg:text-lg'>[{problem.rank}]</h2>
            </div>
            <div className="DIVIDER h-[1px] bg-[#1a1a1a] w-full" />
          </React.Fragment>
        ))}
      </div>

    </div>
  </div>
)
}

export default CaseBoard