import React, { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    // Fetch reviews from the backend using Fetch API
    fetch('http://localhost:5001/reviews')
      .then(response => response.json())
      .then(data => {
        setComments(data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      const newComment = { name, comment };

      // Send the new comment to the backend using Fetch API
      fetch('http://localhost:5001/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
      })
        .then(response => response.json())
        .then(data => {
          setComments([...comments, data]);
          setName('');
          setComment('');
        })
        .catch(error => {
          console.error('There was an error submitting your review!', error);
        });
    }
  };

  return (
    <div style={{ width: '100vw', backgroundColor: '#FFFDF9', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ marginBottom: '20px', color: '#6F4E37' }}>Reviews</h3>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
          <div style={{ marginBottom: '10px', color: '#6F4E37' }}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginLeft: '40px', padding: '5px', width: '200px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px', color: '#6F4E37' }}>
            <label>
              Comment:
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ marginLeft: '10px', padding: '5px', width: '200px', height: '100px' }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: '5px 10px', backgroundColor: '#6F4E37', color: '#FFFDF9', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
        <div className="comments-list" style={{ width: '50%' }}>
          {comments.map((comment, index) => (
            <div key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#FFFDF9', borderRadius: '5px' }}>
              <p><strong style={{ color: '#6F4E37' }}>{comment.name}</strong> <span style={{ color: '#6F4E37' }}>{new Date(comment.date).toLocaleString()}</span></p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
