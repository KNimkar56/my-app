import React from 'react';

const HeroHeader = ({ title, subtitle, emoji }) => {
  return (
    <div className="py-5 px-3 text-center border-bottom shadow-sm" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container">
        <h1
          className="display-5 fw-bold mb-3"
          style={{
            color: '#002B5B',
            position: 'relative',
            display: 'inline-block'
          }}
        >
          {emoji && <span className="me-2">{emoji}</span>}
          {title}
          <div
            style={{
              height: '4px',
              width: '60%',
              backgroundColor: '#FFC107',
              position: 'absolute',
              bottom: '-10px',
              left: '20%',
              borderRadius: '2px'
            }}
          />
        </h1>
        <p className="lead text-muted mt-4">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroHeader;
