import React from 'react';
import axios from 'axios';

const DeactivateUserButton = ({ userId }) => {
    const handleDeactivate = () => {
        axios.post(`/users/${userId}/deactivate`)
            .then(response => alert(response.data.message))
            .catch(error => console.error('Error deactivating user:', error));
    };

    return <button onClick={handleDeactivate}>Deactivate User</button>;
};

export default DeactivateUserButton;
