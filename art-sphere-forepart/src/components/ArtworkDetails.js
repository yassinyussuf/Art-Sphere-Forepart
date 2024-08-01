import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArtworkDetails(props) {
    const [artwork, setArtwork] = useState({});

    useEffect(()) =>
        axios.get('http://localhost:5000/artwork/${props.match.params.id}')
    .then(response => {
        setGalleries(response.data);
    })
    .catch(error => {
        console.error(error);
    
    });
    }, ([props.match.params.id]);

    return (
        <div>
            <h1>{artwork.title}</h1>
            <p>{artwork.description}</p>
            <img src={artwork.image_url} alt={artwork.title} />
            </div>
    );