import React from 'react';
import '../css/Novel.css';
import { Link } from 'react-router-dom';

const Novel = ({ title, displayName, image, titleGet }) => {
  const img = process.env.PUBLIC_URL + `/img/${image}`;
  const origin = process.env.PUBLIC_URL + `/img/originImg.jpg`;
  const imgWidth = '100px';
  const imgHeight = '100px';

  return (
    <Link
      to={`/novel/${title}`}
      className="novel"
      onClick={() => titleGet(title)}
    >
      <div>
        {image ? (
          <img
            src={img}
            alt="Cover_imgage"
            width={imgWidth}
            height={imgHeight}
          />
        ) : (
          <img
            src={origin}
            width={imgWidth}
            height={imgHeight}
            alt="Cover_image"
          />
        )}
        <h2>{title}</h2>
        <h4>{displayName}</h4>
      </div>
    </Link>
  );
};

export default Novel;
