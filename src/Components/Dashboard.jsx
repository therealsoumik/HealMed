import React, { useState } from 'react';
import Calendar from 'react-calendar';


const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBooking = () => {
    // Logic for booking the appointment with the selected date
    console.log('Booking appointment on', selectedDate);
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          minDate={new Date()}
        />
      </div>
      <button onClick={handleBooking}>Book Appointment</button>
    </div>
  );
};

export default Dashboard;