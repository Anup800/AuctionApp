import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Header/Navbar'
import SignUp from './Components/Header/SignUp'
import Login from './Components/Header/Login'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Body/Home'
import About from './Components/Body/About'
import AdminDashBoard from './Components/DashBoards/AdminDashBoard'
import BidderDashBoard from './Components/DashBoards/BidderDashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashBoard/>}/>
        <Route path="/bidder" element={<BidderDashBoard/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
    </>
  )
}

export default App
