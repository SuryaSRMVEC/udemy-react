import React from 'react';
import '../styles/index.css';  // if index.css is in the src/styles folder


import saleimage from "../assets/images/sale-image.jpg"
function SaleImage() {
  return (
    <div className="sale-image">
      <img src={saleimage} alt="sale"></img>
      <div className="sale-image__offer">
        <h2>Udemy Flash Sale! 24 hours to save.</h2>
        <p>Limited time offer: Save 40% on all courses.</p>
      </div>
    </div>
  );
}

export default SaleImage;
