import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Navbar />
        <Hero />
        <Card />
      </div>
    </>
  )
}

export default App