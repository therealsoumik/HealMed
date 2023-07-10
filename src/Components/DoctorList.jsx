import React from 'react';
import './DoctorList.css';

const DoctorList = () => {
  const doctors = [
    { name: 'Dr. Subham Nayak', designation: 'Cardiologist', rating: 4.5, experience: 10 },
    { name: 'Dr. Soumyajeet Mukherjee', designation: 'Pediatrician', rating: 4.2, experience: 8 },
    { name: 'Dr. Ashmit Mahato', designation: 'Dermatologist', rating: 4.8, experience: 12 },
    { name: 'Dr. Milind Srivasta', designation: 'Orthopedic Surgeon', rating: 4.6, experience: 15 },
    { name: 'Dr. Soumik Chakraborty', designation: 'Psychiatrist', rating: 3.9, experience: 7 },
    { name: 'Dr. Swanavo Pramanik', designation: 'Orthopedic Surgeon', rating: 4.0, experience: 1 },

    { name: 'Dr. Aum Patel', designation: 'Oncologist', rating: 4.1, experience: 4 },
    { name: 'Dr. Rishab Gupta', designation: 'Dermatologist', rating: 4.3, experience: 5 },

    { name: 'Dr. Abhishek Dwivedi', designation: 'Dentist', rating: 4.5, experience: 6 },


    

  ];

  return (
    <div className="doctor-list-container">
      <h1>Doctor List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Rating</th>
            <th>Experience (Years)</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>
                <div className="doctor-name">
                  <img src="doctor-avatar.jpg" alt="Doctor Avatar" />
                  <span>{doctor.name}</span>
                </div>
              </td>
              <td>{doctor.designation}</td>
              <td>
                <div className="rating">
                  <span>{doctor.rating}</span>
                  <span>&#9733;</span>
                </div>
              </td>
              <td className="experience">{doctor.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
