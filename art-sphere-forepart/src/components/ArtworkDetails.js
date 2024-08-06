import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArtworkDetails = () => {
    const { artworkId } = useParams();
    const [artwork, setArtwork] = useState(null);

    useEffect(() => {
        axios.get(`/artwork/${artworkId}`)
            .then(response => setArtwork(response.data))
            .catch(error => console.error('Error fetching artwork details:', error));
    }, [artworkId]);

    if (!artwork) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{artwork.title}</h1>
            <p>{artwork.description}</p>
            <p><strong>Artist:</strong> {artwork.artist}</p>
            <p><strong>Category:</strong> {artwork.category}</p>
            <p><strong>Created At:</strong> {artwork.created_at}</p>
            
        </div>
    );
};

export default ArtworkDetails;
