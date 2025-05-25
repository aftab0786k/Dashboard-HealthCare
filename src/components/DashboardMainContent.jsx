import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import Header from './Header';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <Header className="dashboard-header" />
      
      <div className="dashboard-content-container">
        <div className="dashboard-content-grid">
          <div className="dashboard-anatomy-section">
            <AnatomySection />
          </div>
          <div className="dashboard-calendar-section">
            <CalendarView />
            <UpcomingSchedule />
          </div>
          <div className="dashboard-activity-section">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;