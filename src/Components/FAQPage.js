import React from 'react';
import './FAQPage.css'; // Import custom CSS for styling

function FAQPage() {
  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1 className="page-title">Frequently Asked Questions</h1>
        <p className="page-description">
          Find answers to commonly asked questions about our flower delivery service.
        </p>
      </div>
      <div className="faq-list">
        <div className="faq-item">
          <h3 className="faq-question">How can I place an order?</h3>
          <p className="faq-answer">
            Placing an order is easy! Simply browse our collection, select your desired bouquet, and proceed to checkout. If you have any questions or need assistance, feel free to contact our customer support team.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">What payment methods do you accept?</h3>
          <p className="faq-answer">
            We accept all major credit cards, PayPal, and cash on delivery for your convenience. Rest assured that your payment information is handled securely.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">Do you offer same-day delivery?</h3>
          <p className="faq-answer">
            Yes, we offer same-day delivery for orders placed before our specified cutoff time. Please check our delivery schedule for more information.
          </p>
        </div>
        {/* Add more FAQ items */}
      </div>
    </div>
  );
}

export default FAQPage;
