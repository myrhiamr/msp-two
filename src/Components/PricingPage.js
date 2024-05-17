import React from 'react';
import './PricingPage.css'; // Import custom CSS for styling

function PricingPage() {
  return (
    <div className="pricing-container">
      <h1 className="pricing-header">Our Pricing</h1>
      <div className="pricing-card">
        <h2 className="pricing-title">Basic Package</h2>
        <p className="pricing-description">Perfect for beginners</p>
        <p className="pricing-price">$19.99</p>
        <ul className="pricing-features">
          <li>5 Flowers</li>
          <li>Limited Support</li>
          <li>No Customization</li>
        </ul>
        <button className="pricing-btn">Choose Plan</button>
      </div>
      <div className="pricing-card">
        <h2 className="pricing-title">Standard Package</h2>
        <p className="pricing-description">Best value for small businesses</p>
        <p className="pricing-price">$39.99</p>
        <ul className="pricing-features">
          <li>15 Flowers</li>
          <li>Priority Support</li>
          <li>Basic Customization</li>
        </ul>
        <button className="pricing-btn">Choose Plan</button>
      </div>
      <div className="pricing-card">
        <h2 className="pricing-title">Premium Package</h2>
        <p className="pricing-description">For advanced users</p>
        <p className="pricing-price">$59.99</p>
        <ul className="pricing-features">
          <li>Unlimited Flowers</li>
          <li>Premium Support</li>
          <li>Full Customization</li>
        </ul>
        <button className="pricing-btn">Choose Plan</button>
      </div>
    </div>
  );
}

export default PricingPage;
