import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:5001/reviews');
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && comment) {
      const newComment = { name, comment, date: new Date().toLocaleString() };

      try {
        const response = await axios.post('http://localhost:5001/reviews', newComment);
        setComments([...comments, response.data]);
        setName('');
        setComment('');
      } catch (error) {
        console.error('Error submitting comment:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100vw', backgroundColor: '#FFFDF9', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ marginBottom: '20px', color: '#6F4E37' }}>Reviews</h3>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
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
        <div className="comments-list" style={{ width: '60%' }}>
          {comments.map((comment, index) => (
            <div key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#FFFDF9', borderRadius: '5px', border: '1px solid #6F4E37' }}>
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