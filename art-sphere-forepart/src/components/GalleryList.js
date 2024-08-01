import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GalleryList() {
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/galleries')
        .then (response => {
            setGalleries(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    
  
    } , []);

    

