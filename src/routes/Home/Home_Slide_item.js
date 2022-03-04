import React from 'react';

const Home_Slide_item = ({ title, plot, image }) => {
  const img = process.env.PUBLIC_URL + `/img/${image}`;
  const origin = process.env.PUBLIC_URL + `/img/originImg.jpg`;
  return (
    <div className="Home_Slide_item">
      {title}
      {plot}
      <img src={image ? img : origin} alt="Cover" width="50px" height="50px" />
    </div>
  );
};

export default Home_Slide_item;
