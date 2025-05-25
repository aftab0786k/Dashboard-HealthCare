import React, { useState, useEffect } from 'react';
import { navigationLinks, toolsLinks } from '../data/NavigationLink';
import '../styles/Sidebar.css';
import {
  Grid3x3Gap, ClockHistory, Calendar3, 
  Clipboard2Check, GraphUp, Droplet,
  ChatLeftText, Tools, Gear,
  List, X, ChevronDown, BoxArrowInRight,
  PersonCircle, Moon, Sun
} from 'react-bootstrap-icons';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(['General', 'Tools']);
  const [isMobileView, setIsMobileView] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleSection = (section) => {
    setActiveSection(prev => 
      prev.includes(section) 
        ? prev.filter(item => item !== section) 
        : [...prev, section]
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <>
      <button 
        className={`mobile-menu-btn ${isMobileOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={24} /> : <List size={24} />}
      </button>

      <aside className={`sidebar ${isMobileOpen ? 'open' : ''} ${darkMode ? 'dark' : ''}`}>
        <div className="logo-container">
          <div className="logo">
            <h1>
              <span className="logo-part1">Health</span>
              <span className="logo-part2">Care</span>
              <span className="logo-dot">+</span>
            </h1>
            <p className="logo-subtitle">Medical Dashboard</p>
          </div>
        </div>
        
        <div className="sidebar-content">
          <div className="sidebar-section">
            <h3 
              className="sidebar-heading"
              onClick={() => toggleSection('General')}
            >
              <span>General</span>
              {isMobileView && (
                <span className={`collapse-icon ${activeSection.includes('General') ? 'open' : ''}`}>
                  <ChevronDown size={14} />
                </span>
              )}
            </h3>
            <ul className={`sidebar-nav ${activeSection.includes('General') || !isMobileView ? 'open' : ''}`}>
              {navigationLinks.map(link => (
                <li 
                  key={link.id} 
                  className={`sidebar-nav-item ${link.active ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredItem(link.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a href="#" className="sidebar-nav-link">
                    <span className="sidebar-icon">
                      {getIcon(link.icon, link.active || hoveredItem === link.id)}
                    </span>
                    <span className="sidebar-text">{link.name}</span>
                    {link.notification && (
                      <span className="notification-badge">{link.notification}</span>
                    )}
                    {(link.active || hoveredItem === link.id) && (
                      <span className="active-indicator"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-section">
            <h3 
              className="sidebar-heading"
              onClick={() => toggleSection('Tools')}
            >
              <span>Tools</span>
              {isMobileView && (
                <span className={`collapse-icon ${activeSection.includes('Tools') ? 'open' : ''}`}>
                  <ChevronDown size={14} />
                </span>
              )}
            </h3>
            <ul className={`sidebar-nav ${activeSection.includes('Tools') || !isMobileView ? 'open' : ''}`}>
              {toolsLinks.map(link => (
                <li 
                  key={link.id} 
                  className={`sidebar-nav-item ${link.active ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredItem(link.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a href="#" className="sidebar-nav-link">
                    <span className="sidebar-icon">
                      {getIcon(link.icon, link.active || hoveredItem === link.id)}
                    </span>
                    <span className="sidebar-text">{link.name}</span>
                    {link.notification && (
                      <span className="notification-badge">{link.notification}</span>
                    )}
                    {(link.active || hoveredItem === link.id) && (
                      <span className="active-indicator"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">
              <PersonCircle size={24} />
            </div>
            <div className="user-info">
              <span className="user-name">Rohit Sharma</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
          
          {/* <div className="sidebar-actions">
            <button 
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="logout-btn">
              <BoxArrowInRight size={18} />
              <span>Logout</span>
            </button>
          </div> */}
        </div>
      </aside>
    </>
  );
};

function getIcon(iconName, isActive) {
  const iconProps = {
    size: 18,
    className: isActive ? 'icon-active' : ''
  };

  switch (iconName) {
    case 'dashboard':
      return <Grid3x3Gap {...iconProps} />;
    case 'history':
      return <ClockHistory {...iconProps} />;
    case 'calendar':
      return <Calendar3 {...iconProps} />;
    case 'appointments':
      return <Clipboard2Check {...iconProps} />;
    case 'statistics':
      return <GraphUp {...iconProps} />;
    case 'tests':
      return <Droplet {...iconProps} />;
    case 'chat':
      return <ChatLeftText {...iconProps} />;
    case 'support':
      return <Tools {...iconProps} />;
    case 'setting':
      return <Gear {...iconProps} />;
    default:
      return <Grid3x3Gap {...iconProps} />;
  }
}

export default Sidebar;