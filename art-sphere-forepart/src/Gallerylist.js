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

    return (
        <><div>
            <h1>Galleries</></h1><ul>
                {galleries.map(gallery => (
                    <li key={gallery.id}>
                        <link to={'/galleries/${gallery.id}'}>{gallery.name}</Link>

                    </li>
                ))}
            </ul></>
        </div>
    );



}