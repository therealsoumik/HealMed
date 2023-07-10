import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import DoctorList from './Components/DoctorList';
import AddDoctor from './Components/AddDoctor';
import Logout from './Components/Logout';
import DoctorBot from './Components/DoctorBot';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/chatnow" element={<DoctorBot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
