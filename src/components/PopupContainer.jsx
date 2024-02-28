// PopupContainer.js
import React from 'react';
import '../styles/PopupContainer.css'; // Import the CSS file for styling

const PopupContainer = () => {
  return (
    <div className="popup-container">
      <h2 className="popup-title">Create Stream</h2>
      <div className="divider"></div>
      <div className="radio-group">
      <label htmlFor="option1">jhdbseb</label>
        <div>
          <input type="radio" id="option1" name="lsduhud" value="jhdbseb" />
          <label htmlFor="option1">jhdbseb</label>
        </div>
        <div>
          <input type="radio" id="option2" name="lsduhud" value="jhbdbejbf" />
          <label htmlFor="option2">jhbdbejbf</label>
        </div>
      </div>
      <div className="radio-group">
      <label htmlFor="option1">jhdbseb</label>
        <div>
          <input type="radio" id="option3" name="jhscdb" value="jhdbseb" />
          <label htmlFor="option3">jhdbseb</label>
        </div>
        <div>
          <input type="radio" id="option4" name="jhscdb" value="jhbdbejbf" />
          <label htmlFor="option4">jhbdbejbf</label>
        </div>
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default PopupContainer;
