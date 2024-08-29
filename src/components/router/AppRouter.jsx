import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../main/Header'
import Home from '../../pages/Home'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />

        </Routes>
        
        </BrowserRouter>

    </div>
  )
}

export default AppRouter