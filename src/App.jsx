import { useState } from 'react'
import { NavBar } from './Components/Nav-bar/Navbar'
import { Plans } from './Components/Nav-bar/Plans&Pricing/Plans'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Plans />
    </>
  )
}

export default App
