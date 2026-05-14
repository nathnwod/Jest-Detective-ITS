import { useState } from 'react'

import './App.css'
import CaseBoard from './CaseBoard.tsx'
import ReadTheEvidence from './ReadTheEvidence.tsx'
import LieDetector from './LieDetector.tsx'
import FillTheGap from './FillTheGap.tsx'
import CloseTheCase from './CloseTheCase.tsx'
import { questionBank, type Question } from './questionBank'

type Screen = 'board' | 'evidence' | 'lie' | 'gap' | 'close'

export type KC = {
  id: string
  name: string
  category: 'writing' | 'edge' | 'reading'
  percentage: number
  screen: 'evidence' | 'lie' | 'gap' | 'close'
}

const initialKCs: KC[] = [
  // Writing Tests
  { id: 'kc1', name: "test() / it() call", category: 'writing', percentage: 0, screen: 'evidence' },
  { id: 'kc2', name: "Description string", category: 'writing', percentage: 0, screen: 'evidence' },
  { id: 'kc3', name: "Callback function body", category: 'writing', percentage: 0, screen: 'evidence' },
  { id: 'kc4', name: "Calling expect() with a value", category: 'writing', percentage: 0, screen: 'gap' },
  { id: 'kc5', name: "Calling the function under test", category: 'writing', percentage: 0, screen: 'gap' },
  { id: 'kc6', name: "Matcher: toBe", category: 'writing', percentage: 0, screen: 'gap' },
  { id: 'kc7', name: "Matcher: toBeTruthy / toBeFalsy", category: 'writing', percentage: 0, screen: 'gap' },
  { id: 'kc8', name: "Matcher: toContain", category: 'writing', percentage: 0, screen: 'gap' },
  { id: 'kc9', name: "Negating with .not", category: 'writing', percentage: 0, screen: 'gap' },
  { id: 'kc10', name: "Choosing the right matcher", category: 'writing', percentage: 0, screen: 'lie' },

  // Edge Cases
  { id: 'kc11', name: "Recognize edge case categories", category: 'edge', percentage: 0, screen: 'close' },
  { id: 'kc12', name: "One test per edge case", category: 'edge', percentage: 0, screen: 'close' },
  { id: 'kc13', name: "Generate edge cases from signature", category: 'edge', percentage: 0, screen: 'close' },

  // Reading Tests
  { id: 'kc14', name: "Decode a test into plain English", category: 'reading', percentage: 0, screen: 'evidence' },
]

function App() {
  const [kcs, setKcs] = useState<KC[]>(initialKCs)
  const [screen, setScreen] = useState<Screen>('board')
  const goBack = () => setScreen('board')
  const [activeKC, setActiveKC] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)



function startNextCase() {
  const unmastered = kcs
    .filter(kc => kc.percentage < 75)
    .filter(kc => questionBank.some(q => q.kcId === kc.id))  // only KCs with questions
  if (unmastered.length === 0) return
  const weakest = unmastered.reduce((a, b) => a.percentage <= b.percentage ? a : b)
  const candidates = questionBank.filter(q => q.kcId === weakest.id)
  const question = candidates[Math.floor(Math.random() * candidates.length)]
  setCurrentQuestion(question)
  setActiveKC(weakest.id)
  setScreen(question.type)
}

function gradeKC(kcId: string, correct: boolean) {
  setKcs(prev => prev.map(kc => {
    if (kc.id !== kcId) return kc
    const delta = correct ? 15 : -10
    const newPct = Math.max(0, Math.min(100, kc.percentage + delta))
    return { ...kc, percentage: newPct }
  }))
  setScreen('board')
}

  return (
    <>
      {screen === 'board' && <CaseBoard kcs={kcs} onNextCase={startNextCase} />}
      {screen === 'evidence' && currentQuestion && <ReadTheEvidence question={currentQuestion} onBack={goBack} onGrade={(correct) => gradeKC(activeKC!, correct)} />}
      {screen === 'lie' && currentQuestion && <LieDetector question={currentQuestion} onBack={goBack} onGrade={(correct) => gradeKC(activeKC!, correct)} />}
      {screen === 'gap' && currentQuestion && <FillTheGap question={currentQuestion} onBack={goBack} onGrade={(correct) => gradeKC(activeKC!, correct)} />}
      {screen === 'close' && currentQuestion && <CloseTheCase question={currentQuestion} onBack={goBack} onGrade={(correct) => gradeKC(activeKC!, correct)} />}
    </>
  )
}

export default App