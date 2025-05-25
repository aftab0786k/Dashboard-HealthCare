import React from 'react';
import { upcomingSchedule } from '../data/Appointments';
import '../styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container">
      <div className="upcoming-schedule-header">
        <h2 className="upcoming-schedule-title">Upcoming Schedule</h2>
        <button className="view-all-btn">View All</button>
      </div>
      
      <div className="schedule-days-container">
        <div className="schedule-day-card">
          <div className="day-header">
            <h3 className="day-title">Thursday</h3>
            <span className="day-date">{upcomingSchedule.thursdayDate}</span>
          </div>
          
          <div className="appointments-list">
            {upcomingSchedule.thursday.map((appointment, index) => (
              <div key={index} className="appointment-item">
                <div className="appointment-icon" style={{ color: appointment.color }}>
                  {appointment.icon}
                </div>
                <div className="appointment-details">
                  <h4 className="appointment-title">{appointment.title}</h4>
                  <div className="appointment-meta">
                    <span className="appointment-time">
                      <i className="bi bi-clock"></i> {appointment.time}
                    </span>
                    {appointment.location && (
                      <span className="appointment-location">
                        <i className="bi bi-geo-alt"></i> {appointment.location}
                      </span>
                    )}
                  </div>
                </div>
                <button className="appointment-menu">
                  <i className="bi bi-three-dots-vertical"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="schedule-day-card">
          <div className="day-header">
            <h3 className="day-title">Saturday</h3>
            <span className="day-date">{upcomingSchedule.saturdayDate}</span>
          </div>
          
          <div className="appointments-list">
            {upcomingSchedule.saturday.map((appointment, index) => (
              <div key={index} className="appointment-item">
                <div className="appointment-icon" style={{ color: appointment.color }}>
                  {appointment.icon}
                </div>
                <div className="appointment-details">
                  <h4 className="appointment-title">{appointment.title}</h4>
                  <div className="appointment-meta">
                    <span className="appointment-time">
                      <i className="bi bi-clock"></i> {appointment.time}
                    </span>
                    {appointment.location && (
                      <span className="appointment-location">
                        <i className="bi bi-geo-alt"></i> {appointment.location}
                      </span>
                    )}
                  </div>
                </div>
                <button className="appointment-menu">
                  <i className="bi bi-three-dots-vertical"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;