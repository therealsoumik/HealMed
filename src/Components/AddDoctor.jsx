import React, { useState } from 'react';
import './AddDoctor.css';

const AddDoctor = () => {
  const [doctors, setDoctors] = useState([
    'Dr. Soumik Chakraborty',
    'Dr. Swarnava Pramanik',
    'Dr. Aum Patel',
    'Dr. Rishab Gupta',
  ]);

  const [newDoctor, setNewDoctor] = useState('');

  const handleAddDoctor = () => {
    if (newDoctor.trim() !== '') {
      setDoctors([...doctors, newDoctor.trim()]);
      setNewDoctor('');
    }
  };

  const handleDeleteDoctor = (index) => {
    const updatedDoctors = doctors.filter((doctor, i) => i !== index);
    setDoctors(updatedDoctors);
  };

  return (
    <div className="add-doctor-container">
      <h1>Doctor List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newDoctor}
          onChange={(e) => setNewDoctor(e.target.value)}
          placeholder="Enter doctor's name"
        />
        <button onClick={handleAddDoctor}>Add</button>
      </div>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>
            <span>{doctor}</span>
            <button onClick={() => handleDeleteDoctor(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddDoctor;
