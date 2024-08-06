import React, { useState } from 'react';
import axios from 'axios';

const LabelContentButton = ({ contentId }) => {
    const [label, setLabel] = useState('');

    const handleLabel = () => {
        axios.post(`/content/${contentId}/label`, { label })
            .then(response => alert(response.data.message))
            .catch(error => console.error('Error labeling content:', error));
    };

    return (
        <div>
            <input
                type="text"
                value={label}
                onChange={e => setLabel(e.target.value)}
                placeholder="Enter label"
            />
            <button onClick={handleLabel}>Label Content</button>
        </div>
    );
};

export default LabelContentButton;
