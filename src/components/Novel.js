import React from 'react';

const Novel = ({ title, displayName, image }) => {
  const img = process.env.PUBLIC_URL + `/img/${image}`;
  return (
    <div>
      <img src={img} alt="" width="90px" height="90px" />
      <h2>{title}</h2>
      <h4>{displayName}</h4>
    </div>
  );
};

export default Novel;
