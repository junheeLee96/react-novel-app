import React, { useState } from 'react';
import '../../css/routes/Home/Novel.css';
import { Link } from 'react-router-dom';

const Novel = ({ Cpost, titleGet }) => {
  const ImgSrc = process.env.PUBLIC_URL + `/img/`;
  const imgWidth = '240px';
  const imgHeight = '260px';

  return (
    <>
      {Cpost.map((novel, idx) => (
        <Link
          key={idx}
          to={`/novel/${novel.title}`}
          className="novel"
          onClick={() => titleGet(novel.title)}
        >
          <div className="Novel">
            <img
              src={
                novel.image ? ImgSrc + novel.image : ImgSrc + 'originImg.jpg'
              }
              alt="Cover_imgage"
              width={imgWidth}
              height={imgHeight}
            />
            <h2>
              {novel.title.length > 7
                ? novel.title.substr(0, 7) + '..'
                : novel.title}
            </h2>
            <h4>{novel.displayName}</h4>
          </div>
        </Link>
      ))}
    </>
  );
};
/*
const Novel = ({ title, displayName, image, titleGet }) => {
  const img = process.env.PUBLIC_URL + `/img/${image}`;
  const origin = process.env.PUBLIC_URL + `/img/originImg.jpg`;
  const imgWidth = '240px';
  const imgHeight = '260px';
  const [novelTitle, setNovelTitle] = useState(title);

  return (
    
    <Link
      to={`/novel/${title}`}
      className="novel"
      onClick={() => titleGet(title)}
    >
      <div className="Novel">
        <img
          src={image ? img : origin}
          alt="Cover_imgage"
          width={imgWidth}
          height={imgHeight}
        />
        <h2>{title.length > 7 ? title.substr(0, 7) + '..' : title}</h2>
        <h4>{displayName}</h4>
      </div>
    </Link>
  );
};*/

export default Novel;
