import { useState } from 'react'

import './App.css'
import './CaseBoard.tsx'
import CaseBoard from './CaseBoard.tsx'
import ReadTheEvidence from './ReadTheEvidence.tsx'
import LieDetector from './LieDetector.tsx'

function App() {

  return (
    <>
      <CaseBoard></CaseBoard>
      <ReadTheEvidence></ReadTheEvidence>
      <LieDetector></LieDetector>
    </>
  )
}

export default App
