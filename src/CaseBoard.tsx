import React, { useState } from 'react'

type Problem = {
  name: string
  percentage: number
  rank: string
}

type SkillSectionProps = {
  title: string
  problems: Problem[]
}

function SkillSection({ title, problems }: SkillSectionProps) {
  return (
    <>
      <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />
      <h2
        className="text-lg sm:text-xl"
        style={{ fontSynthesisWeight: 'auto', fontWeight: 'bold' }}
      >
        {title}
      </h2>
      <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />

      <div className="flex flex-col gap-2">
        {problems.map((problem, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-row items-center gap-3 sm:gap-6 lg:gap-[3.5rem]">
              <h2 className='flex-1 text-sm sm:text-base lg:text-lg'>{problem.name}</h2>
              <div className="progress-bar relative h-[18px] sm:h-[20px] flex-1 bg-gray-300 border-2 border-[#1a1a1a] rounded-[3px] hidden min-[700px]:block">
                <div className="h-full bg-[#6b8e5a]" style={{ width: `${problem.percentage}%` }}></div>
                <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-base lg:text-lg font-bold">
                  {problem.percentage}%
                </span>
              </div>
              <h2 className='flex-1 text-center font-extrabold max-[700px]:block hidden'>
                <span className='font-bold' style={{ fontSynthesisWeight: 'auto' }}>
                  {problem.percentage}%
                </span>
              </h2>
              <h2 className='flex-1 text-right text-sm sm:text-base lg:text-lg'>[{problem.rank}]</h2>
            </div>
            <div className="DIVIDER h-[1px] bg-[#1a1a1a] w-full" />
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

function NextCaseSection() {
  return (
    <div className='mt-auto'>
      <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />
      <h2 className="text-lg sm:text-xl" style={{ fontSynthesisWeight: 'auto', fontWeight: 'bold' }}>Next Case</h2>
      <div className='h-5 w-full' />
      <div className='flex justify-center text-sm sm:text-lg'>
        <div className='p-2 rounded-[5px] border'>
          <p>⚠ ACTIVE INVESTIGATION ⚠</p>
        </div>
      </div>
      <div className='flex justify-center my-6'>
        <button className="btn">Next Case</button>
      </div>
      <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />
    </div>
  )
}

function PageNav({ page, total, onChange }: { page: number, total: number, onChange: (n: number) => void }) {
  return (
    <div className='flex justify-end items-center gap-3 text-base mt-2'>
      <button
        onClick={() => onChange(Math.max(0, page - 1))}
        disabled={page === 0}
        className='text-2xl px-2 disabled:opacity-30'
      >
        ←
      </button>
      <span className='text-sm'>{page + 1} / {total}</span>
      <button
        onClick={() => onChange(Math.min(total - 1, page + 1))}
        disabled={page >= total - 1}
        className='text-2xl px-2 disabled:opacity-30'
      >
        →
      </button>
    </div>
  )
}

function CaseBoard() {
  const writingProblems: Problem[] = [
    { name: "test() / it() call", percentage: 92, rank: "Inspector" },
    { name: "Description string", percentage: 45, rank: "Detective" },
    { name: "Callback function body", percentage: 73, rank: "Detective" },
    { name: "Calling expect() with a value", percentage: 28, rank: "Rookie" },
    { name: "Calling the function under test", percentage: 60, rank: "Detective" },
    { name: "Matcher: toBe", percentage: 88, rank: "Inspector" },
    { name: "Matcher: toBeTruthy / toBeFalsy", percentage: 15, rank: "Rookie" },
    { name: "Matcher: toContain", percentage: 35, rank: "Detective" },
    { name: "Negating with .not", percentage: 50, rank: "Detective" },
    { name: "Choosing the right matcher", percentage: 5, rank: "Rookie" },
  ]

  const edgeCaseProblems: Problem[] = [
    { name: "Recognize edge case categories", percentage: 67, rank: "Detective" },
    { name: "One test per edge case", percentage: 0, rank: "Rookie" },
    { name: "Generate edge cases from signature", percentage: 0, rank: "Rookie" },
  ]

  const readingProblems: Problem[] = [
    { name: "Decode a test into plain English", percentage: 40, rank: "Detective" },
  ]

  const [page, setPage] = useState(0)
  const totalPages = 2

  return (
    <div className='min-h-screen flex items-center justify-center p-2 sm:p-4 max-[375px]:p-0'>
      <div className="w-full max-w-[900px] h-[95vh] overflow-y-auto p-4 sm:p-6 bg-[#ddb984] rounded-[2px] shadow-lg max-[375px]:rounded-none flex flex-col">

        {page === 0 && (
          <>
            {/* HEADER */}
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4'>
              <h1 className='leading-none text-2xl sm:text-3xl lg:text-4xl'>Jest Detective</h1>
              <div className='flex flex-col sm:text-right'>
                <h2 className='text-base sm:text-lg'>Rank: Rookie</h2>
                <h2 className='text-base sm:text-lg'>Cases Solved: 0</h2>
              </div>
            </div>

            <div className="DIVIDER h-1 bg-black w-full my-3 sm:my-4" />
            <h1 className='text-xl sm:text-2xl lg:text-3xl'>Your Skills</h1>

            <SkillSection title="Writing Tests " problems={writingProblems} />
            <div className='h-5 w-full' />

            <NextCaseSection />
          </>
        )}

        {page === 1 && (
  <>
    {/* HEADER */}
    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4'>
      <h1 className='leading-none text-2xl sm:text-3xl lg:text-4xl'>Jest Detective</h1>
      <div className='flex flex-col sm:text-right'>
        <h2 className='text-base sm:text-lg'>Rank: Rookie</h2>
        <h2 className='text-base sm:text-lg'>Cases Solved: 0</h2>
      </div>
    </div>

    <div className="DIVIDER h-1 bg-black w-full my-3 sm:my-4" />
    <h1 className='text-xl sm:text-2xl lg:text-3xl'>Your Skills</h1>

    <SkillSection title="Edge Cases" problems={edgeCaseProblems} />
            <div className='h-5 w-full' />
            <SkillSection title="Reading Tests" problems={readingProblems} />
            <div className='h-5 w-full' />

            <NextCaseSection />
          </>
        )}

        <PageNav page={page} total={totalPages} onChange={setPage} />
      </div>
    </div>
  )
}

export default CaseBoard