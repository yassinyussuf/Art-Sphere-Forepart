// src/components/ArtistGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ArtistGallery.css';

const ArtistGallery = () => {
  const { artistId } = useParams();
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get(`/api/artists/${artistId}/artworks`)
      .then(response => setArtworks(response.data))
      .catch(error => console.error('Error fetching artworks:', error));
  }, [artistId]);

  return (
    <div className="artist-gallery">
      {artworks.map(art => (
        <div key={art.id} className="art-item">
          <img src={art.image} alt={art.title} />
          <h3>{art.title}</h3>
          <p>{art.description}</p>
          <p>${art.price}</p>
          <button onClick={() => addToCart(art)}>Buy Now</button>
        </div>
      ))}
    </div>
  );
};

const addToCart = (art) => {
  // Add the selected art to the cart
  // This function should interact with your cart state or context
  console.log('Art added to cart:', art);
};

export default ArtistGallery;
