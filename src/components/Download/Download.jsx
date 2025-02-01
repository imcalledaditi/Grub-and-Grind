import React from 'react';
import downloadImage from '../../assets/download.jpg';  // Make sure image is in this path
import './Download.css';

const Download = () => {
  return (
    <div className="download-section">
      <img src={downloadImage} alt="Download App" className="download-image" />
    </div>
  );
};

export default Download;