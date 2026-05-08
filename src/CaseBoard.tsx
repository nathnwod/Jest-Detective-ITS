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
    <div className='min-h-screen flex items-center justify-center p-4'>
      {/* CASEBOARD */}
      <div className="w-full max-w-[900px] p-6 bg-[#ddb984] rounded-[2px] shadow-lg">
        <div className='flex justify-between items-start gap-4'>
          <h1 className='leading-none'>Jest Detective</h1>
          <div className='flex flex-col text-right'>
            <h2>Rank: Rookie</h2>
            <h2>Cases Solved: 0</h2>
          </div>
        </div>

        <div className="DIVIDER h-1 bg-black w-full my-4" />

        <h1>Your Skills</h1>

        <div className="DIVIDER h-0.5 bg-black w-full my-4" /> 

        <h2>Writing Tests</h2>

        <div className="DIVIDER h-0.5 bg-black w-full my-4" />

        {/* SKILLS WRAPPER */}
        <div className="flex flex-col gap-2">
          {writingProblems.map((problem, i) => (
        <div 
          key={i}
          className="grid items-center gap-3"
          style={{ gridTemplateColumns: 'auto clamp(8rem,15vw,15rem) 60px 160px' }}



        >
          <h2 className="truncate">{problem.name}</h2>
          {/* PROGRESS BAR */}
          <div className="h-[20px] bg-gray-200 border-2 border-black rounded-[2px] overflow-hidden">
            <div className="h-full bg-[#6b8e5a]" style={{ width: `${problem.percentage}%` }}></div>
          </div>
          <h2 className="text-right">{problem.percentage}%</h2>
          <h2 className="text-center">[{problem.rank}]</h2>
        </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default CaseBoard