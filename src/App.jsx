import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';;
import './style.scss'
import './Components/GetStart/getStart.scss'
import './Components/Submit/submit.scss'
import './Components/Booking/_booking.scss'
import Home from './Components/Home/Home'
import GetStart from './Components/GetStart/GetStart';
import Submit from './Components/Submit/Submit';
import Booking from './Components/Booking/Booking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-start" element={<GetStart />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </Router>
  )
}

export default App
