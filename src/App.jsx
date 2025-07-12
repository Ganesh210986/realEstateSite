import React from 'react'
import NavBar from './Components/NavBar'
import Background from './Components/Background'
import './App.css'
import Aboutus from './Components/Aboutus'
import Properties from './Components/properties'
import Contact from './Components/Contact'
import { ToastContainer } from 'react-toastify'
import Login from './Components/Login'



const App = () => {
  return (
    <div className='container'>
      <ToastContainer />
      <NavBar />
      <Background />
      <Aboutus />
      <Properties />
      <Contact />
      <Login />
    </div>
  )
}

export default App
