import React from 'react';
import '../styles/index.css';  // if index.css is in the src/styles folder

import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';
import c4 from '../assets/images/c4.jpg';



function Recommended() {
  return (
    <div className="recommended">
      <h1 className="recommended__title">Recommended for you</h1>
      <p>Pick the best fit</p>
      <div className="recommended__container">
        {/* Repeat the course card structure */}
        <div className="course-card">
          <img src={c1} alt="c1image" />
          <p>2023 Python Data Visualization Master Class</p>
          <p>Col Steele</p>
          <p>4.9⭐⭐⭐⭐⭐</p>
          <p>₹449 <del>₹1999</del></p>
        </div>

        
        <div className="course-card">
          <img src={c2} alt="c2image" />
          <p>The complete 2024 Web Development BootCamp</p>
          <p>Dr. Angela Yu</p>
          <p>3.7⭐⭐⭐</p>
          <p>₹999 <del>₹2499</del></p>
        </div>

        
        <div className="course-card">
          <img src={c3} alt="c3image" />
          <p>100 Days of Code: The Complete Java Pro BootCamp</p>
          <p>Dr. William Shawn</p>
          <p>4.5⭐⭐⭐⭐</p>
          <p>₹1499 <del>₹3499</del></p>
        </div>
        
       
        <div className="course-card">
          <img src={c4} alt="c4image" />
          <p>The Complete AI Powered CopyWriting Course</p>
          <p>Tomas Maverick</p>
          <p>4.6⭐⭐⭐⭐</p>
          <p>₹3099</p>
        </div>
      </div>  
    </div>
  );
}

export default Recommended;
