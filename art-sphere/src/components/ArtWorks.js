
import React from 'react';
import { useNotification } from '../context/NotificationContext';
import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArtWorks.css'; 

const artworksData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Artwork ${index + 1}`,
  imageUrl: `https://via.placeholder.com/300?text=Artwork+${index + 1}`,
}));

const ArtWorks = () => {
  const { addNotification } = useNotification();
  useEffect(() => {
    addNotification('New artworks have been uploaded!');
  }, [addNotification]);

  return (
    <div className="artworks-list">
      <h1>Art Works</h1>
      <div className="artworks-grid">
        {artworksData.map(artwork => (
          <div key={artwork.id} className="artwork-item">
            <Link to={`/art-gallery/${artwork.id}`}>
              <img src={artwork.imageUrl} alt={artwork.title} />
              <p>{artwork.title}</p>
              {artwork.featured && <span className="featured-badge">Featured</span>}

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtWorks;
