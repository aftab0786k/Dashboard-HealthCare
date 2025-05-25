import React from 'react';
import { healthStatusData } from '../data/HealthData';
import '../styles/AnatomySection.css';

const AnatomySection = () => {
  const bodyIndicators = healthStatusData.filter(item => 
    item.position && (item.id === 'heart' || item.id === 'leg'));
  
  const healthStatusCards = healthStatusData.filter(item => 
    !item.position && (item.id === 'lungs' || item.id === 'teeth' || item.id === 'bone'));

  return (
    <div className="anatomy-section-container">
      <div className="anatomy-section-header">
        <h1 className="anatomy-section-title">Dashboard</h1>
        <div className="anatomy-section-filter">
          <span>This Week</span>
          <span className="anatomy-section-dropdown-arrow">▼</span>
        </div>
      </div>
      
      <div className="anatomy-section-visualization">
        <div className="anatomy-section-image-wrapper">
          <img 
            src="/human-body.avif" 
            alt="Human Anatomy" 
            className="anatomy-section-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 200' fill='%23e2e8f0'%3E%3Cpath d='M50 10c-10 0-20 5-20 15v20h40V25c0-10-10-15-20-15zM30 45v30h10V45H30zm30 0v30h10V45H60zM20 75v70h10V75H20zm50 0v70h10V75H70zM30 145v30h40v-30H30z'/%3E%3C/svg%3E"
            }}
          />
          
          {bodyIndicators.map(indicator => (
            <div 
              key={indicator.id}
              className="anatomy-section-indicator"
              style={{
                top: indicator.position.top,
                left: indicator.position.left,
                backgroundColor: indicator.color,
                color: indicator.textColor
              }}
              aria-label={`${indicator.name} status: ${indicator.status}`}
            >
              {indicator.name}
              <span className="anatomy-section-indicator-tooltip">
                {indicator.name}: {indicator.status}
              </span>
            </div>
          ))}
        </div>
        
        <div className="anatomy-section-slider">
          <div className="anatomy-section-slider-track"></div>
          <div className="anatomy-section-slider-handle"></div>
        </div>
      </div>
      
      <div className="anatomy-section-cards">
        {healthStatusCards.map(card => (
          <div key={card.id} className="anatomy-section-card">
            <div 
              className="anatomy-section-card-icon"
              style={{ color: card.status === 'good' ? '#4ade80' : 
                              card.status === 'moderate' ? '#facc15' : '#ef4444' }}
            >
              {card.id === 'lungs' ? 
               <img src={'lungs.png'} alt={card.name} className='anatomy-section-card-icon-image' />
               : card.icon}
            </div>
            <div className="anatomy-section-card-details">
              <h3 className="anatomy-section-card-title">{card.name}</h3>
              <p className="anatomy-section-card-date">Last check: {card.date}</p>
              <div className="anatomy-section-progress">
                <div className="anatomy-section-progress-bar">
                  <div 
                    className="anatomy-section-progress-fill"
                    style={{
                      width: `${card.progress}%`,
                      backgroundColor: card.status === 'good' ? '#4ade80' : 
                                      card.status === 'moderate' ? '#facc15' : '#ef4444'
                    }}
                  ></div>
                </div>
                <span className="anatomy-section-progress-value">{card.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="anatomy-section-footer">
        <a href="#" className="anatomy-section-details-link">
          View Full Details
          <span className="anatomy-section-link-arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default AnatomySection;