import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArtworkDetails(props) {
    const [artwork, setArtwork] = useState({});

    useEffect(()) =>
        axios.get('http://localhost:5000/artwork/${props.match.params.id}')
    .then()
}