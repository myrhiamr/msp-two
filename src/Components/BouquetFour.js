import React, { useState } from 'react';
import bouquetFour from '../images/bouquet-four.jpeg'; // Adjust the path as necessary

function BouquetFour() {
  return (
    <div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h2>Tulips and Daisy</h2>
        <img src={bouquetFour} alt="Bouquet One" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
        <p> Tulips are the cutest, treat them with care</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#6F4E37', color: '#FFFDF9', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BouquetFour;
