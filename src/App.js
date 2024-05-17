import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Navbar from "./Components/Navbar";
import Bouquets from "./Components/Bouquets";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import BouquetOne from "./Components/BouquetOne";
import BouquetTwo from "./Components/BouquetTwo";
import BouquetThree from "./Components/BouquetThree";
import BouquetFour from "./Components/BouquetFour";



function App  ()  {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <div className="image-section">
            {/* Add any image or background image here if needed  whooo database*/}
          </div>
          <div className="about-us-section">
            <h2>Glad you are here!</h2>
            <p>
              Welcome to our website! We are dedicated to providing the best services 
              to our customers. Our team is passionate about what we do and strive to 
              exceed expectations. Thank you for visiting us!
            </p>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Bouquets />} />
          <Route path="/bouquet-one" element={<BouquetOne />} />
          <Route path="/bouquet-two" element={<BouquetTwo />} />
          <Route path="/bouquet-three" element={<BouquetThree />} />
          <Route path="/bouquet-four" element={<BouquetFour />} />
        </Routes>
        <Reviews />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
