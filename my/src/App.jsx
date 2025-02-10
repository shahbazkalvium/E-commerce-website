import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import {Login} from './Component/login'
import { SignUp } from './Component/Signup'
import Productform from './Component/Productform'

function App() {
  
  return (
    <>
       <Routes>
        <Route path ="/login" element={<Login />} />
        <Route path = "/Signup" element={<SignUp />} />
        <Route path = "/Home" element={<Home />} />
        <Route path = "/Productform" element={<Productform />} />
      </Routes>
     
    </>
  )
}

export default App
