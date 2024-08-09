
import React from 'react';
import { useParams } from 'react-router-dom';
import './ArtworkDetails.css';

const artworksData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Artwork ${index + 1}`,
  imageUrl: `https://via.placeholder.com/300?text=Artwork+${index + 1}`,
  description: `This is a description for Artwork ${index + 1}.`,
}));

const ArtworkDetails = () => {
  const { id } = useParams();
  const artwork = artworksData.find(item => item.id === parseInt(id));

  if (!artwork) {
    return <p>Artwork not found!</p>;
  }

  return (
    <div className="artwork-details">
      <h1>{artwork.title}</h1>
      <img src={artwork.imageUrl} alt={artwork.title} />
      <p>{artwork.description}</p>
    </div>
  );
}

export default ArtworkDetails;
