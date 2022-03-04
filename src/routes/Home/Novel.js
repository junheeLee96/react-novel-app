import React, { useState } from 'react';
import '../css/Novel.css';
import { Link } from 'react-router-dom';

const Novel = ({ title, displayName, image, titleGet }) => {
  const img = process.env.PUBLIC_URL + `/img/${image}`;
  const origin = process.env.PUBLIC_URL + `/img/originImg.jpg`;
  const imgWidth = '175px';
  const imgHeight = '200px';
  const [novelTitle, setNovelTitle] = useState(title);

  return (
    <Link
      to={`/novel/${title}`}
      className="novel"
      onClick={() => titleGet(title)}
    >
      <div className="Novel">
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
        <h2>{title.length > 7 ? title.substr(0, 7) + '..' : title}</h2>
        <h4>{displayName}</h4>
      </div>
    </Link>
  );
};

export default Novel;
