import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
    <Header/>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contacts' element={<Contacts/>} />

      </Routes>
    </>
  )
}

export default App
