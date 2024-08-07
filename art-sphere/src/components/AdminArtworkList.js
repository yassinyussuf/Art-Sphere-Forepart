
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminArtworkList = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Fetch artworks from the backend
    axios.get('/api/artworks')
      .then(response => setArtworks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleUpdateFeatured = (artworkId, isFeatured) => {
    axios.post(`/api/update-featured/${artworkId}`, { featured: !isFeatured })
      .then(() => {
        setArtworks(artworks.map(artwork =>
          artwork.id === artworkId ? { ...artwork, featured: !isFeatured } : artwork
        ));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Artwork List</h1>
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            {artwork.title}
            <button onClick={() => handleUpdateFeatured(artwork.id, artwork.featured)}>
              {artwork.featured ? 'Remove Featured' : 'Mark as Featured'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminArtworkList;
