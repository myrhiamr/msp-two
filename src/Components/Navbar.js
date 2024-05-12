import React from 'react';
import '../index.css'; // Import index.css file

function Navbar() {
  return (
    <nav className="navbar"> {/* Apply "navbar" class to the nav element */}
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src="/logo192.png" alt="Flower Shop Logo" />
        </div>
        {/* Shop Name */}
        <h1 className="shop-name">FLOWER SHOP</h1>
        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#bouquets">Bouquets</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
      </div>
    </nav>
  );
}

<<<<<<< HEAD
export default Navbargit 
=======
export default Navbar;
>>>>>>> 3ecee328356c2e3884c8aa0537bd5d98885942d5
