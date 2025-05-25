import React from 'react';
import Sidebar from './Sidebar';
import DashboardMainContent from './DashboardMainContent';
import '../styles/Layout.css';

const Home = () => {
  return (
    <div className="app-layout-container">
      <Sidebar className="app-sidebar" />
      <div className="app-main-content-container">
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default Home;