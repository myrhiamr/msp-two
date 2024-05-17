import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <div>
      <h3>{review.reviewerName}</h3>
      <p>Rating: {review.rating}</p>
      <p>{review.reviewText}</p>
    </div>
  );
};

export default ReviewItem;