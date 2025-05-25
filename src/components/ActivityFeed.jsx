import React from 'react';
import { activityData } from '../data/Appointments';
import '../styles/ActivityFeed.css'; // Assuming you have a CSS file for styling

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2 className="section-title">Activity</h2>
        <span className="activity-summary">{activityData.summary}</span>
      </div>
      
      <div className="activity-chart">
        {activityData.days.map((day, index) => (
          <div key={index} className="chart-column">
            <div className="chart-bars">
              {day.values.map((value, valueIndex) => (
                <div 
                  key={valueIndex} 
                  className="chart-bar"
                  style={{
                    height: `${value.height}px`,
                    backgroundColor: value.color
                  }}
                ></div>
              ))}
            </div>
            <div className="chart-label">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;