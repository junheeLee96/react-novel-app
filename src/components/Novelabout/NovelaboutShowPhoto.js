import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NovelaboutShowPhoto = ({ novelImg }) => {
  const img = process.env.PUBLIC_URL + `/img/${novelImg}`;

  return (
    <div>
      {novelImg ? (
        <img src={img} alt="" />
      ) : (
        <img
          src={process.env.PUBLIC_URL + `/img/imgfile1645565657217.png`}
          width="90px"
          height="90px"
          alt="image"
        />
      )}
    </div>
  );
};

export default NovelaboutShowPhoto;
