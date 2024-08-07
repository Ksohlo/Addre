import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Screeen/Home';
import Login from './Screeen/Login';
import DashBoard from './Screeen/DashBoard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

