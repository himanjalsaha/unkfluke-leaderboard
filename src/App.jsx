import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topnav from './components/Topnav'
import Breadcrums from './components/Breadcrums'
import Table from './components/Table'
import LeaderBoard from './components/Leaderboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' h-screen lg:overflow-hidden'>
    <Topnav/>
    <Breadcrums/>
   <LeaderBoard/>
    </div>

    </>
  )
}

export default App
