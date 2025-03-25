import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Homepage from './components/HomePage'
import Bnb from './components/Bnb'
import Login from './components/Login'
import Signup from './components/Signup';
import Admin from './components/Admin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/bnb" element={<Bnb />} />
        <Route path='/admin' element={<ProtectedRoute> <Admin/> </ProtectedRoute>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
