import React from 'react';

const Novel = ({ title, displayName }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{displayName}</p>
    </div>
  );
};

export default Novel;
