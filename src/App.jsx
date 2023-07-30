import { useState } from 'react'
import { NavBar } from './Components/Nav-bar/Navbar'
import { Plans } from './Components/Plans&Pricing/Plans'
import { PlansList } from './Components/Plans/PlansList'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Plans />
      <PlansList />
    </>
  )
}

export default App
