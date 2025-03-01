import React from 'react';
import Navbar from "./components/Navbar.js"
import SaleImage from "./components/Saleimage.js"
import Recommended from "./components/Recommended.js"
import Categories from "./components/Categories.js"
import Topics from "./components/Topics.js"
import Popular from "./components/Mostpopular.js"
import Footer from "./components/Footer.js"
import './styles/index.css';  // if index.css is in the src/styles folder



function App() {
  return (
    <div>
      <Navbar />
      <Categories />
      <SaleImage />
      <Recommended />
      <Topics />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;
