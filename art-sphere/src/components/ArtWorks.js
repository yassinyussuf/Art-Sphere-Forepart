
import React from 'react';
import { Link } from 'react-router-dom';
import './ArtWorks.css'; 

const artworksData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Artwork ${index + 1}`,
  imageUrl: `https://via.placeholder.com/300?text=Artwork+${index + 1}`,
}));

const ArtWorks = () => {
  return (
    <div className="artworks-list">
      <h1>Art Works</h1>
      <div className="artworks-grid">
        {artworksData.map(artwork => (
          <div key={artwork.id} className="artwork-item">
            <Link to={`/art-gallery/${artwork.id}`}>
              <img src={artwork.imageUrl} alt={artwork.title} />
              <p>{artwork.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtWorks;
