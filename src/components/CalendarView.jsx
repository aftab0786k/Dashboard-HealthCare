import React, { useState } from 'react';
import '../styles/CalendarView.css';

const months = [
  'September 2021',
  'October 2021',
  'November 2021',
];

const calendarDataByMonth = [
  // September (dummy data)
  {
    days: [
      { dayName: 'Mon', date: '27', appointments: [{ time: '10:00' }, { time: '11:00' }, { time: '12:00' }] },
      { dayName: 'Tue', date: '28', appointments: [{ time: '08:00' }, { time: '09:00' }, { time: '10:00' }] },
      { dayName: 'Wed', date: '29', appointments: [{ time: '12:00' }, { time: '—' }, { time: '13:00' }] },
      { dayName: 'Thurs', date: '30', appointments: [{ time: '10:00' }, { time: '13:00' }, { time: '—' }] },
      { dayName: 'Fri', date: '1', appointments: [{ time: '—' }, { time: '14:00' }, { time: '16:00' }] },
      { dayName: 'Sat', date: '2', appointments: [{ time: '12:00' }, { time: '14:00' }, { time: '15:00' }] },
      { dayName: 'Sun', date: '3', appointments: [{ time: '00:00' }, { time: '10:00' }, { time: '11:00' }] },
    ],
    featuredAppointments: [
      {
        title: 'Cardiologist',
        time: '10:00-11:00',
        doctor: 'Dr. Alice Heart',
        icon: '❤️',
        type: 'dentist',
      },
      {
        title: 'Ophthalmologist',
        time: '12:00-13:00',
        doctor: 'Dr. Bob Vision',
        icon: '👁️',
        type: 'physio',
      },
    ],
  },
  // October (your main data)
  {
    days: [
      { dayName: 'Mon', date: '25', appointments: [{ time: '10:00' }, { time: '11:00' }, { time: '12:00' }] },
      { dayName: 'Tue', date: '26', appointments: [{ time: '08:00' }, { time: '09:00' }, { time: '10:00' }] },
      { dayName: 'Wed', date: '27', appointments: [{ time: '12:00' }, { time: '—' }, { time: '13:00' }] },
      { dayName: 'Thurs', date: '28', appointments: [{ time: '10:00' }, { time: '11:00' }, { time: '—' }] },
      { dayName: 'Fri', date: '29', appointments: [{ time: '—' }, { time: '14:00' }, { time: '16:00' }] },
      { dayName: 'Sat', date: '30', appointments: [{ time: '12:00' }, { time: '14:00' }, { time: '15:00' }] },
      { dayName: 'Sun', date: '31', appointments: [{ time: '12:00' }, { time: '09:00' }, { time: '11:00' }] },
    ],
    featuredAppointments: [
      {
        title: 'Dentist',
        time: '09:00-11:00',
        doctor: 'Dr. Cameron Williamson',
        icon: '🦷',
        type: 'dentist',
      },
      {
        title: 'Physiotherapy Appointment',
        time: '11:00-12:00',
        doctor: 'Dr. Kevin Djones',
        icon: '💪',
        type: 'physio',
      },
    ],
  },
  // November (dummy data)
  {
    days: [
      { dayName: 'Mon', date: '1', appointments: [{ time: '10:00' }, { time: '11:00' }, { time: '12:00' }] },
      { dayName: 'Tue', date: '2', appointments: [{ time: '08:00' }, { time: '09:00' }, { time: '10:00' }] },
      { dayName: 'Wed', date: '3', appointments: [{ time: '12:00' }, { time: '—' }, { time: '13:00' }] },
      { dayName: 'Thurs', date: '4', appointments: [{ time: '10:00' }, { time: '13:00' }, { time: '—' }] },
      { dayName: 'Fri', date: '5', appointments: [{ time: '—' }, { time: '14:00' }, { time: '16:00' }] },
      { dayName: 'Sat', date: '6', appointments: [{ time: '12:00' }, { time: '14:00' }, { time: '15:00' }] },
      { dayName: 'Sun', date: '7', appointments: [{ time: '00:00' }, { time: '10:00' }, { time: '11:00' }] },
    ],
    featuredAppointments: [
      {
        title: 'Neurologist',
        time: '09:00-10:00',
        doctor: 'Dr. Carol Brain',
        icon: '🧠',
        type: 'dentist',
      },
      {
        title: 'General Checkup',
        time: '11:00-12:00',
        doctor: 'Dr. David Health',
        icon: '🩺',
        type: 'physio',
      },
    ],
  },
];

// Hardcoded highlights for October (index 1)
const highlightedSlots = {
  '1-1': 'selected', // Tues 09:00 (blue)
  '3-1': 'purple',   // Thurs 11:00 (purple)
  '5-0': 'purple',   // Sat 12:00 (purple)
  '6-1': 'purple',   // Sun 09:00 (purple)
};

const CalendarView = () => {
  const [monthIdx, setMonthIdx] = useState(1); // Default to October
  const calendarData = calendarDataByMonth[monthIdx];

  const handlePrev = () => {
    setMonthIdx((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const handleNext = () => {
    setMonthIdx((prev) => (prev === months.length - 1 ? months.length - 1 : prev + 1));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2 className="calendar-month">{months[monthIdx]}</h2>
        <div className="calendar-nav">
          <button className="nav-btn prev" onClick={handlePrev} disabled={monthIdx === 0}>◀</button>
          <button className="nav-btn next" onClick={handleNext} disabled={monthIdx === months.length - 1}>▶</button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="day-names">
          {calendarData.days.map((day, index) => (
            <div key={index} className="day-name">{day.dayName}</div>
          ))}
        </div>

        <div className="day-dates">
          {calendarData.days.map((day, index) => (
            <div key={index} className="date">{day.date}</div>
          ))}
        </div>

        <div className="time-slots">
          {[0, 1, 2].map((slotIndex) => (
            <div key={slotIndex} className="time-row">
              {calendarData.days.map((day, dayIndex) => {
                const slotKey = `${dayIndex}-${slotIndex}`;
                let slotClass = 'time-slot';
                if (day.appointments[slotIndex].time === '—') slotClass += ' empty';
                if (monthIdx === 1 && highlightedSlots[slotKey]) slotClass += ` ${highlightedSlots[slotKey]}`;
                return (
                  <div key={dayIndex} className={slotClass}>
                    {day.appointments[slotIndex].time}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="appointments-section">
        {calendarData.featuredAppointments.map((appointment, index) => (
          <div
            key={index}
            className={`appointment-card ${appointment.type === 'dentist' ? 'dentist-card' : ''} ${appointment.type === 'physio' ? 'physio-card' : ''}`}
          >
            <div className="appointment-icon">{appointment.icon}</div>
            <div className="appointment-details">
              <h3>{appointment.title}</h3>
              <p className="appointment-time">{appointment.time}</p>
              <p className="doctor-name">{appointment.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;