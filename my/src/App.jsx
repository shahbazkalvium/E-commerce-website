import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import {Login} from './Component/login'
import { Signup } from './Component/Signup'
import { Home } from './page/Home'

function App() {
  
  return (
    <>
       <Routes>
        <Route path = "/" element={<Home />} />
        <Route path ="/login" element={<Login />} />
        <Route path = "/Signup" element={<Signup />} />
       </Routes>
     
    </>
  )
}

export default App
