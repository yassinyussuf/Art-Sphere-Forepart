
import React from 'react';
import './UserList.css';

const usersData = [
  { id: 1, username: 'user1', isActive: true },
  { id: 2, username: 'user2', isActive: true },
  
];

const UserList = () => {
  const handleDeactivate = (userId) => {
    
    console.log(`Deactivating user with ID: ${userId}`);
  };

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {usersData.map(user => (
          <li key={user.id} className={user.isActive ? 'active' : 'inactive'}>
            {user.username}
            <button onClick={() => handleDeactivate(user.id)}>
              Deactivate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
