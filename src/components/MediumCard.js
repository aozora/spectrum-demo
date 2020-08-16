import React from 'react';

const MediumCard = ({ medium }) => {
  const baseUrl = 'http://image.tmdb.org/t/p/';
  const size = 'w342';

  return (
    <div
      className="spectrum-Card"
      role="figure"
      style={{
        width: 240,
        margin: '0 1rem 1rem 0'
      }}
    >
      <div
        className="spectrum-Card-coverPhoto"
        style={{
          backgroundImage: `url(${baseUrl}${size}${medium.poster_path})`
        }}
      />
      <div className="spectrum-Card-body">
        <div className="spectrum-Card-header">
          <div className="spectrum-Card-title">{medium.title}</div>
        </div>
        <div className="spectrum-Card-content">
          <div className="spectrum-Card-subtitle">{medium.original_title}</div>
        </div>
      </div>
      <div className="spectrum-Card-footer">Footer</div>
    </div>
  );
};

export default MediumCard;
