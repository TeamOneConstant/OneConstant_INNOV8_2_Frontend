
import React, { useState } from 'react';
import '../styles/PopupButton.css'; // Import the CSS file for styling

const PopupButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Thumbnail:', thumbnail);
    // Close the popup
    closePopup();
  };

  return (
    <div className="popup-container">
      {!isPopupVisible && <button onClick={togglePopup}>Click me</button>}
      {isPopupVisible && (
        <div className="popup-content">
          <button className="close-button" onClick={closePopup}>X</button>
          <div>Create Stream</div>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text"  value={title} onChange={handleTitleChange} />
            </label>
            <label>
              Description:
              <textarea className='textarea' value={description} onChange={handleDescriptionChange} />
            </label>
            <label className='lab2'> 
              Thumbnail:
              <textarea className='textarea2' value={description} onChange={handleDescriptionChange} />
            </label>
            {/* {thumbnail && <img src={URL.createObjectURL(thumbnail)} alt="Thumbnail" />} */}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PopupButton;

