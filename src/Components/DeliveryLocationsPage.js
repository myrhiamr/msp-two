import React from 'react';

function DeliveryLocationsPage() {
  return (
    <div className="delivery-locations-page">
      <h1 className="page-title">Delivery Locations</h1>
      <div className="location-list">
        <div className="location-item">
          <h3>New York City</h3>
          <p>We deliver throughout all boroughs of NYC, including Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.</p>
        </div>
        <div className="location-item">
          <h3>Los Angeles</h3>
          <p>Our delivery service covers the greater Los Angeles area, from downtown LA to the surrounding suburbs.</p>
        </div>
        {/* Add more delivery locations */}
      </div>
    </div>
  );
}

export default DeliveryLocationsPage;
