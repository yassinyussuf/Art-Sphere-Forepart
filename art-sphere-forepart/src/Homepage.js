import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div>
            <h1>Welcome to Microsoft Art Gallery</h1>
            <p>Explore our collection of artwork</p>
            <Link to="/galleries">View Galleries</Link>
            </div>
            </Link>
        </div>
    );
}