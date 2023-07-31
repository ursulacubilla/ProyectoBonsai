import { useState } from 'react'
import { NavBar } from './Components/Nav-bar/Navbar'
import { Plans } from './Components/Plans&Pricing/Plans'
import { PlansList } from './Components/Plans/PlansList'
import { ToHelpGrow } from './Components/ToHelp/ToHelpGrow'
import { FrequentlyQuestions } from './Components/FrequentlyQuestions/FrequentlyQuestions'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Plans />
      <PlansList />
      <ToHelpGrow />
      <FrequentlyQuestions />
    </>
  )
}

export default App
