import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashbaord"
import Home from './Components/Home';
import DoctorList from './Components/DoctorList';
import AddDoctor from './Components/AddDoctor';
import AboutUs from './Components/AboutUs';
import DoctorBooking from './Components/DoctorBooking';
import DoctorBot from './Components/DoctorBot';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path='/doctor-Booking' element={<DoctorBooking />} />
          <Route path='/doctor-bot' element={<DoctorBot/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
