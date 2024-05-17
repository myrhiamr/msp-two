import React from 'react';

function FAQPage() {
  return (
    <div className="faq-page">
      <h1 className="page-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        <div className="faq-item">
          <h3>How can I place an order?</h3>
          <p>To place an order, simply browse our collection, select your desired bouquet, and proceed to checkout. You can also contact us directly to discuss custom orders.</p>
        </div>
        <div className="faq-item">
          <h3>What payment methods do you accept?</h3>
          <p>We accept all major credit cards, PayPal, and cash on delivery for your convenience.</p>
        </div>
        {/* Add more FAQ items */}
      </div>
    </div>
  );
}

export default FAQPage;
