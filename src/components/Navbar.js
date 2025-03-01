import React, { useState } from 'react';
import '../styles/index.css';  // if index.css is in the src/styles folder



function Navbar() {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="navbar">
      <div className="navbar__s1">
        <h1 className="navbar__s1__title">Udemy</h1>
        <i className="fa-sharp fa-solid fa-u" style={{ color: '#a42d80' }}></i>
      </div>
      <div className="navbar__s2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="navbar__s2__input"
          placeholder="Search for anything here. Tech, Business, Art..."
        />
      </div>
      <div className="navbar__s3">
        <p>Courses</p>
        <div className="mylearning" onClick={togglePopup}>
          <p>My Learning</p>
          {popupVisible && (
            <div className="mylearning__popup">
              <p>You did not purchase anything!!!</p>
            </div>
          )}
        </div>
        <i className="fa-sharp-duotone fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="navbar__s4">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
