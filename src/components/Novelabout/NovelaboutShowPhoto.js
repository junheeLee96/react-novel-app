import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NovelaboutShowPhoto = ({ novelImg }) => {
  const img = process.env.PUBLIC_URL + `/img/${novelImg}`;
  const origin = process.env.PUBLIC_URL + `/img/originImg.jpg`;

  return (
    <>
      <img
        src={novelImg ? img : origin}
        width="90px"
        height="90px"
        alt="image"
      />
    </>
  );
};

export default NovelaboutShowPhoto;
