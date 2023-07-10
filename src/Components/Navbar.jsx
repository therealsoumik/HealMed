import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-heading">HealMed</h1>
      <ul className="navbar-list">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/doctor-list">DoctorList</a></li>
        <li><a href="/add-doctor">AddDoctor</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
