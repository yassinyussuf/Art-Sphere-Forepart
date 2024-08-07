
import React, { createContext, useState, useContext } from 'react';
import Notification from '../components/Notification';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications([...notifications, message]);
    setTimeout(() => {
      setNotifications(notifications.slice(1));
    }, 5000); 
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      {notifications.map((msg, index) => (
        <Notification key={index} message={msg} onClose={() => setNotifications(notifications.filter((_, i) => i !== index))} />
      ))}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
