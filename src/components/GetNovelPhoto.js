import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetNovelPhoto = ({ Ntitle }) => {
  const [image, getImage] = useState('');
  const img = process.env.PUBLIC_URL + `/img/${image}`;

  const GetNovelPhoto = async () => {
    const data = await axios.get(`http://localhost:8000/api/novelphoto`, {
      params: Ntitle,
    });
    getImage(data.data[0].image);
  };

  useEffect(() => {
    GetNovelPhoto();
  }, []);

  return <div>{image && <img src={img} alt="" />}</div>;
};

export default GetNovelPhoto;
