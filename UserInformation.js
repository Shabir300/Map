import React from 'react';

const UserInformation = ({ user }) => {
  return (
    <div>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <p>UID: {user.uid}</p>
    </div>
  );
};

export default UserInformation;
