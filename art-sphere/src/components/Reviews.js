import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reviews.css'; // Import the CSS file

const Reviews = ({ artworkId }) => {
    const [rating, setRating] = useState(1);
    const [content, setContent] = useState('');
    const [reviews, setReviews] = useState([]);
    const [message, setMessage] = useState('');
    const [fetching, setFetching] = useState(false);

    // Fetch reviews for the artwork
    const fetchReviews = async () => {
        setFetching(true);
        try {
            const response = await axios.get(`http://localhost:4050/api/reviews/${artworkId}`);
            setReviews(response.data.reviews);
        } catch (error) {
            setMessage('Error fetching reviews.');
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        if (artworkId) {
            fetchReviews();
        }
    }, [artworkId]);

    const handleAddReview = async () => {
        try {
            const response = await axios.post('http://localhost:4050/api/reviews', {
                artwork_id: artworkId,
                rating: rating,
                content: content
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setMessage(response.data.message);
            setRating(1);
            setContent('');
            fetchReviews(); // Refresh reviews
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'An error occurred.');
        }
    };

    return (
        <div className="reviews-container">
            <h2>Reviews</h2>
            <div>
                <label>Rating (1-5): </label>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                />
            </div>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your review..."
            />
            <button onClick={handleAddReview} disabled={fetching}>
                {fetching ? 'Adding...' : 'Add Review'}
            </button>
            {message && <p className={message.includes('successfully') ? 'success-message' : 'error-message'}>{message}</p>}
            <div className="reviews-list">
                {reviews.map(review => (
                    <div key={review.id} className="review">
                        <p>User ID: {review.user_id}</p>
                        <p>Rating: {review.rating}</p>
                        <p>{review.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
