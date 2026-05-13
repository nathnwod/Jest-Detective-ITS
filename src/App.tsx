import { useState } from 'react'

import './App.css'
import './CaseBoard.tsx'
import CaseBoard from './CaseBoard.tsx'
import ReadTheEvidence from './ReadTheEvidence.tsx'
import LieDetector from './LieDetector.tsx'
import FillTheGap from './FillTheGap.tsx'
import CloseTheCase from './CloseTheCase.tsx'

function App() {

  return (
    <>
      <CaseBoard></CaseBoard>
      {/* <ReadTheEvidence></ReadTheEvidence>
      <LieDetector></LieDetector>
      <FillTheGap></FillTheGap>
      <CloseTheCase></CloseTheCase> */}
    </>
  )
}

export default App
