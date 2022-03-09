import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Parser from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const HomeSlider = () => {
  const origin = process.env.PUBLIC_URL + `/img/originImg.jpg`;
  const navigate = useNavigate();
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
  /* 슬라이더 인터벌
  useEffect(() => {
    const setInterTime = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 1000);
    return () => {
      if (setInterTime) {
        clearInterval(setInterTime);
      }
    };
  });
  */

  return (
    <div className="HomeSlider">
      <div className="HomeSlider_ShowBox">
        <div
          className="HomeSlider_inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {recentnovel.map((novel, idx) => (
            <div
              onClick={() => {
                navigate(`/novel/${novel.title}`);
              }}
              className="item"
              key={idx}
            >
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
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="SlideBtn leftBtn"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="SlideBtn rightBtn"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </div>
      {/** 
       
      
      <div className="indicators">
        <div className="Btn_wrap">
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            className="Btn_left"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          />
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="Btn_right"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          />
        </div>
      </div>
      */}
    </div>
  );
};

export default HomeSlider;
