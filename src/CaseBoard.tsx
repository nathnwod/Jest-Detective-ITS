import React, { useState } from 'react'
import type { KC } from './App'


type SkillSectionProps = {
  title: string
  problems: KC[]
}

function Header({ rank, showSkillsTitle = true }: { rank: string, showSkillsTitle?: boolean }) {
  return (
    <>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4'>
        <h1 className='leading-none text-2xl sm:text-3xl lg:text-4xl'>Jest Detective</h1>
        <div className='flex flex-col sm:text-right'>
          <h2 className='text-base sm:text-lg'>Rank: {rank}</h2>
          <h2 className='text-base sm:text-lg'>Cases Solved: 0</h2>
        </div>
      </div>

      <div className="DIVIDER h-1 bg-black w-full my-3 sm:my-4" />
      {showSkillsTitle && <h1 className='text-xl sm:text-2xl lg:text-3xl'>Your Skills</h1>}
    </>
  )
}

function getRank(p: number) {
  if (p >= 75) return 'Inspector'
  if (p >= 34) return 'Detective'
  return 'Rookie'
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

      <div className="flex flex-col gap-1">
        {problems.map((problem, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-row items-center gap-3 sm:gap-6 lg:gap-[3.5rem]">
              <h2 className='flex-1 text-xs sm:text-sm lg:text-base'>{problem.name}</h2>

              <div className="progress-bar relative h-[14px] sm:h-[16px] flex-1 bg-gray-300 border-2 border-[#1a1a1a] rounded-[3px] hidden min-[700px]:block">
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
              <h2 className='flex-1 text-right text-xs sm:text-sm lg:text-base'>[{getRank(problem.percentage)}]</h2>

            </div>
            <div className="DIVIDER h-[1px] bg-[#1a1a1a] w-full" />
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

function NextCaseSection({ onNextCase }: { onNextCase: () => void }) {
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
        <button className="btn" onClick={onNextCase}>Next Case</button>
      </div>
      <div className="DIVIDER h-0.5 bg-black w-full my-3 sm:my-4" />
    </div>
  )
}

function PageNav({ page, total, onChange }: { page: number, total: number, onChange: (n: number) => void }) {
  return (
    <div className='flex justify-end items-center gap-3 text-base'>
      <button
        onClick={() => onChange(Math.max(0, page - 1))}
        disabled={page === 0}
        className='text-2xl px-1 disabled:opacity-30'
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

function CaseBoard({ kcs, rank, onNextCase }: { kcs: KC[], rank: string, onNextCase: () => void }) {
  const writingProblems = kcs.filter(kc => kc.category === 'writing')
  const edgeCaseProblems = kcs.filter(kc => kc.category === 'edge')
  const readingProblems = kcs.filter(kc => kc.category === 'reading')

  const [page, setPage] = useState(0)
  const totalPages = 2

  return (
    <div className='min-h-screen flex items-center justify-center p-2 sm:p-4 max-[375px]:p-0'>
      <div className="w-full max-w-[900px] h-[95vh] overflow-y-auto p-4 sm:p-6 bg-[#ddb984] rounded-[2px] shadow-lg max-[375px]:rounded-none flex flex-col">

        {page === 0 && (
          <>
            <div>
              <Header rank={rank} />
              <Header rank={rank} showSkillsTitle={false} />
              
              <SkillSection title="Writing Tests " problems={writingProblems} />
            </div>
            <NextCaseSection onNextCase={onNextCase} />
          </>
        )}

        {page === 1 && (
          <>
            <div>
              <Header rank={rank} />
              <Header rank={rank} showSkillsTitle={false} />

              <SkillSection title="Edge Cases" problems={edgeCaseProblems} />
              <div className='h-5 w-full' />
              <SkillSection title="Reading Tests" problems={readingProblems} />
            </div>
            <NextCaseSection onNextCase={onNextCase} />
          </>
        )}

        <PageNav page={page} total={totalPages} onChange={setPage} />
      </div>
    </div>
  )
}

export default CaseBoard