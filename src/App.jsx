import { useState } from 'react'
import { NavBar } from './Components/Nav-bar/Navbar'
import { Plans } from './Components/Plans&Pricing/Plans'
import { PlansList } from './Components/Plans/PlansList'
import { ToHelpGrow } from './Components/ToHelp/ToHelpGrow'
import { FrequentlyQuestions } from './Components/FrequentlyQuestions/FrequentlyQuestions'
import { Footer } from './Components/Footer/Footer'
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
      <Footer />
    </>
  )
}

export default App
