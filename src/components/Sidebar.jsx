import React, { useState, useEffect } from 'react';
import { navigationLinks, toolsLinks } from '../data/NavigationLink';
import '../styles/Sidebar.css';
import {
  Grid3x3Gap, ClockHistory, Calendar3, 
  Clipboard2Check, GraphUp, Droplet,
  ChatLeftText, Tools, Gear,
  List, X, ChevronDown
} from 'react-bootstrap-icons';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(['General', 'Tools']);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleSection = (section) => {
    if (activeSection.includes(section)) {
      setActiveSection(activeSection.filter(item => item !== section));
    } else {
      setActiveSection([...activeSection, section]);
    }
  };

  return (
    <>
      {/* Mobile menu button - positioned to not overlap logo */}
      <button 
        className={`mobile-menu-btn ${isMobileOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={24} /> : <List size={24} />}
      </button>

      <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
        <div className="logo">
          <h1>
            <span className="logo-part1">Health</span>
            <span className="logo-part2">care</span>
            <span className="logo-dot">.</span>
          </h1>
        </div>
        
        <div className="sidebar-content">
          <div className="sidebar-section">
            <h3 
              className="sidebar-heading"
              onClick={() => toggleSection('General')}
            >
              General
              {isMobileView && (
                <span className={`collapse-icon ${activeSection.includes('General') ? 'open' : ''}`}>
                  <ChevronDown size={14} />
                </span>
              )}
            </h3>
            <ul className={`sidebar-nav ${activeSection.includes('General') || !isMobileView ? 'open' : ''}`}>
              {navigationLinks.map(link => (
                <li key={link.id} className={`sidebar-nav-item ${link.active ? 'active' : ''}`}>
                  <a href="#" className="sidebar-nav-link">
                    <span className="sidebar-icon">{getIcon(link.icon)}</span>
                    <span className="sidebar-text">{link.name}</span>
                    {link.notification && <span className="notification-badge">{link.notification}</span>}
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
              Tools
              {isMobileView && (
                <span className={`collapse-icon ${activeSection.includes('Tools') ? 'open' : ''}`}>
                  <ChevronDown size={14} />
                </span>
              )}
            </h3>
            <ul className={`sidebar-nav ${activeSection.includes('Tools') || !isMobileView ? 'open' : ''}`}>
              {toolsLinks.map(link => (
                <li key={link.id} className={`sidebar-nav-item ${link.active ? 'active' : ''}`}>
                  <a href="#" className="sidebar-nav-link">
                    <span className="sidebar-icon">{getIcon(link.icon)}</span>
                    <span className="sidebar-text">{link.name}</span>
                    {link.notification && <span className="notification-badge">{link.notification}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">JD</div>
            <div className="user-info">
              <span className="user-name">Rohit Sharma</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};


function getIcon(iconName) {
  switch (iconName) {
    case 'dashboard':
      return <Grid3x3Gap />;
    case 'history':
      return <ClockHistory />;
    case 'calendar':
      return <Calendar3 />;
    case 'appointments':
      return <Clipboard2Check />;
    case 'statistics':
      return <GraphUp />;
    case 'tests':
      return <Droplet />;
    case 'chat':
      return <ChatLeftText />;
    case 'support':
      return <Tools />;
    case 'setting':
      return <Gear />;
    default:
      return <Grid3x3Gap />;
  }
}

export default Sidebar;