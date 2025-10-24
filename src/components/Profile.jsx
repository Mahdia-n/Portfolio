import React from 'react';

const Profile = ({ photo, title, bio }) => {
  return (
    <div>
      <img src={photo} alt="Profile" />
      <h2>{title}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Profile;