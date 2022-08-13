/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Write component imports here //
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Car from './components/Car'
import ProtectedRoute from './components/ProtectedRoute'

// Start Router function here //
const Router = () => {
    return(
        <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/car/:id" element={<Car/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<ProtectedRoute component={About} />} />
        </Routes>
    )
}

export default Router