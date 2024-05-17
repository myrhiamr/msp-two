import React from 'react';

function PricingPage() {
  return (
    <div className="pricing-page">
      <h1 className="page-title">Pricing</h1>
      <div className="pricing-options">
        <div className="pricing-option">
          <h3>Standard Bouquet</h3>
          <p>Starting at $29.99</p>
        </div>
        <div className="pricing-option">
          <h3>Luxury Bouquet</h3>
          <p>Starting at $59.99</p>
        </div>
        {/* Add more pricing options */}
      </div>
    </div>
  );
}

export default PricingPage;
