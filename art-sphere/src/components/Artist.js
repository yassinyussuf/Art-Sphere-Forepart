
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Artist.css';

const Artist = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState({});
  const [artworks, setArtworks] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const response = await axios.get(`/api/artists/${artistId}`);
        setArtist(response.data);
      } catch (error) {
        console.error("Error fetching artist details:", error);
      }
    };

    const fetchArtworks = async () => {
      try {
        const response = await axios.get(`/api/artists/${artistId}/artworks`);
        setArtworks(response.data);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/artists/${artistId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchArtistDetails();
    fetchArtworks();
    fetchReviews();
  }, [artistId]);

  return (
    <div className="artist-container">
      <div className="artist-details">
        <img src={artist.profilePicture} alt={artist.name} className="artist-profile-picture" />
        <h1>{artist.name}</h1>
        <p>{artist.biography}</p>
      </div>
      <div className="artist-artworks">
        <h2>Artworks</h2>
        <div className="artwork-gallery">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="artwork-item">
              <img src={artwork.imageUrl} alt={artwork.title} className="artwork-image" />
              <h3>{artwork.title}</h3>
              <p>{artwork.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="artist-reviews">
        <h2>Reviews</h2>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p><strong>{review.user}</strong>: {review.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Artist;
