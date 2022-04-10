import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2> Hello, {user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        ''
      )}
      <JSONPretty data={user} />
    </div>
  );
};

export default Profile;
