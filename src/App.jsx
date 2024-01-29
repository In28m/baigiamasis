import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.scss';
import './Components/GetStart/getStart.scss';
import './Components/Submit/submit.scss';
import './Components/Booking/_booking.scss';
import './Components/About/about.scss';
import './Components/Contact/contact.scss';
import './Components/More/_more.scss';
import './Components/Home/home.scss';

import More from './Components/More/More';
import Home from './Components/Home/Home';
import GetStart from './Components/GetStart/GetStart';
import Submit from './Components/Submit/Submit';
import Booking from './Components/Booking/Booking';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';  


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-start" element={<GetStart />} />
        <Route path="/more/:id" element={<More />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

