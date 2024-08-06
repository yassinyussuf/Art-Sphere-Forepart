import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = ({ userId }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        axios.get(`/notifications?user_id=${userId}`)
            .then(response => setNotifications(response.data))
            .catch(error => console.error('Error fetching notifications:', error));
    }, [userId]);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
