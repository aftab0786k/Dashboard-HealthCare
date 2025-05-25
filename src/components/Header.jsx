import React from 'react';
import '../styles/Header.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="search-container">
          <div className="search-bar">
            <span className="search-icon"><i className="bi bi-search"></i></span>
            <input 
              type="text" 
              placeholder="Search patients, appointments..." 
              className="search-input"
              aria-label="Search"
            />
          </div>
        </div>

        <div className="header-right">
          <button className="notification-btn" aria-label="Notifications">
            <i className="bi bi-bell-fill"></i>
            <span className="notification-badge">3</span>
          </button>
          
          <button className="add-btn" aria-label="Add new">
            <i className="bi bi-plus-square-fill"></i>
          </button>
          
          <div className="user-profile">
            <img 
              src="/avatar-img.jpg" 
              alt="User profile" 
              className="profile-img"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-user'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E"
              }}
            />
            <div className="profile-info">
              <span className="profile-name">Dr. Farukh Saifi</span>
              <span className="profile-role">Cardiologist</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;