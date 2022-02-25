import React from 'react';
import '../css/Novel.css';
import { Link } from 'react-router-dom';

const Novel = ({ title, displayName, image, titleGet }) => {
  const img = process.env.PUBLIC_URL + `/img/${image}`;

  return (
    <Link
      to={`/novel/${title}`}
      className="novel"
      onClick={() => titleGet(title)}
    >
      <div>
        <img src={img} alt="" width="90px" height="90px" />
        <h2>{title}</h2>
        <h4>{displayName}</h4>
      </div>
    </Link>
  );
};

export default Novel;
