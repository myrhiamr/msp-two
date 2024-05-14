import React, { useState } from 'react';
import bouquetOne from '../images/bouquet-one.jpeg'; // Adjust the path as necessary

function BouquetOne() {
  return (
    <div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h2>Garden Rose Bouquet</h2>
        <img src={bouquetOne} alt="Bouquet One" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
        <p> Great choise! This is our most popular bouquet!</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#6F4E37', color: '#FFFDF9', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BouquetOne;
