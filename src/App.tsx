import { useState } from 'react'

import './App.css'
import CaseBoard from './CaseBoard.tsx'
import ReadTheEvidence from './ReadTheEvidence.tsx'
import LieDetector from './LieDetector.tsx'
import FillTheGap from './FillTheGap.tsx'
import CloseTheCase from './CloseTheCase.tsx'

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
  { id: 'kc1', name: "test() / it() call", category: 'writing', percentage: 92, screen: 'evidence' },
  { id: 'kc2', name: "Description string", category: 'writing', percentage: 45, screen: 'evidence' },
  { id: 'kc3', name: "Callback function body", category: 'writing', percentage: 73, screen: 'evidence' },
  { id: 'kc4', name: "Calling expect() with a value", category: 'writing', percentage: 28, screen: 'gap' },
  { id: 'kc5', name: "Calling the function under test", category: 'writing', percentage: 60, screen: 'gap' },
  { id: 'kc6', name: "Matcher: toBe", category: 'writing', percentage: 88, screen: 'gap' },
  { id: 'kc7', name: "Matcher: toBeTruthy / toBeFalsy", category: 'writing', percentage: 15, screen: 'gap' },
  { id: 'kc8', name: "Matcher: toContain", category: 'writing', percentage: 35, screen: 'gap' },
  { id: 'kc9', name: "Negating with .not", category: 'writing', percentage: 50, screen: 'gap' },
  { id: 'kc10', name: "Choosing the right matcher", category: 'writing', percentage: 5, screen: 'lie' },

  // Edge Cases
  { id: 'kc11', name: "Recognize edge case categories", category: 'edge', percentage: 67, screen: 'close' },
  { id: 'kc12', name: "One test per edge case", category: 'edge', percentage: 0, screen: 'close' },
  { id: 'kc13', name: "Generate edge cases from signature", category: 'edge', percentage: 0, screen: 'close' },

  // Reading Tests
  { id: 'kc14', name: "Decode a test into plain English", category: 'reading', percentage: 40, screen: 'evidence' },
]

function App() {
  const [kcs, setKcs] = useState<KC[]>(initialKCs)
  const [screen, setScreen] = useState<Screen>('board')
  const goBack = () => setScreen('board')

  function pickNextCase() {
    const unmastered = kcs.filter(kc => kc.percentage < 75)
    if (unmastered.length === 0) return 'evidence' as const
    const weakest = unmastered.reduce((a, b) => a.percentage < b.percentage ? a : b)
    return weakest.screen
  }

  return (
    <>
      {screen === 'board' && <CaseBoard kcs={kcs} onNextCase={() => setScreen(pickNextCase())} />}
      {screen === 'evidence' && <ReadTheEvidence onBack={goBack} />}
      {screen === 'lie' && <LieDetector onBack={goBack} />}
      {screen === 'gap' && <FillTheGap onBack={goBack} />}
      {screen === 'close' && <CloseTheCase onBack={goBack} />}
    </>
  )
}

export default App