import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';

const HomeSlider = () => {
  const origin = process.env.PUBLIC_URL + `/img/originImg.jpg`;

  const [recentnovel, setRecentNovel] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getRecentlyNovels = async () => {
    const data = await axios.get('http://localhost:8000/api/recentlynovels');
    setRecentNovel(data.data);
  };

  useEffect(() => {
    getRecentlyNovels();
  }, []);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = recentnovel.length - 1;
    }
    if (newIndex >= recentnovel.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  /*
  useEffect(() => {
    const setInterTime = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 1000);
    return () => {
      if (setInterTime) {
        clearInterval(setInterTime);
      }
    };
  });*/

  return (
    <div className="HomeSlider">
      <div className="HomeSlider_ShowBox">
        <div
          className="HomeSlider_inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {recentnovel.map((novel, idx) => (
            <Link to={`/novel/${novel.title}`} className="item">
              <div className="item_TP">
                <div className="NTitle">{novel.title}</div>
                <div className="NPlot">{Parser(`${novel.plot}`)}</div>
              </div>
              <img
                src={
                  novel.image
                    ? process.env.PUBLIC_URL + `/img/` + novel.image
                    : origin
                }
                alt="Cover"
                width="350px"
                height="100%"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
