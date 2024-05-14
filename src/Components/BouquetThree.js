import React, { useState } from 'react';
import bouquetThree from '../images/bouquet-three.jpeg'; 

function BouquetThree() {
  return (
    <div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h2>Pink Gardenias</h2>
        <img src={bouquetThree} alt="Bouquet One" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
        <p>The most aroatic bouquet of all the collection</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#6F4E37', color: '#FFFDF9', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BouquetThree;
