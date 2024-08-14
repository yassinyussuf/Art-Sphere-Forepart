import React, { useState } from 'react';
import axios from 'axios';
import './FollowArtist.css'; // Import the CSS file

const FollowArtist = () => {
    const [userId, setUserId] = useState('');
    const [artistId, setArtistId] = useState('');
    const [message, setMessage] = useState('');
    const [isFollowing, setIsFollowing] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFollow = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:4050/api/follow', {
                user_id: userId,
                artist_id: artistId
            });
            setMessage(response.data.message);
            checkFollowing(); // Check if the user is now following the artist
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const handleUnfollow = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:4050/api/unfollow', {
                user_id: userId,
                artist_id: artistId
            });
            setMessage(response.data.message);
            checkFollowing(); // Check if the user is now following the artist
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const checkFollowing = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:4050/api/is-following', {
                params: {
                    user_id: userId,
                    artist_id: artistId
                }
            });
            setIsFollowing(response.data.is_following);
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="follow-artist-container">
            <h2>Follow/Unfollow Artist</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID"
            />
            <input
                type="text"
                value={artistId}
                onChange={(e) => setArtistId(e.target.value)}
                placeholder="Enter Artist ID"
            />
            <button onClick={handleFollow} disabled={loading}>
                {loading ? 'Following...' : 'Follow Artist'}
            </button>
            <button onClick={handleUnfollow} disabled={loading}>
                {loading ? 'Unfollowing...' : 'Unfollow Artist'}
            </button>
            <button onClick={checkFollowing} disabled={loading}>
                {loading ? 'Checking...' : 'Check Following Status'}
            </button>
            {message && <p className={message.includes('successfully') ? 'success-message' : 'error-message'}>{message}</p>}
            {isFollowing !== null && (
                <p>{isFollowing ? 'You are following this artist.' : 'You are not following this artist.'}</p>
            )}
        </div>
    );
};

export default FollowArtist;
