import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContentNav_Prev = ({ title, idx }) => {
  const [PrevContent, setPrevContent] = useState('');
  const [dateOfUpdate, setPrevRecentDate] = useState('');
  const navigate = useNavigate();

  //navigate(`/novel/${title}`);
  const onPrevBtnClick = async () => {
    const data = await axios.post('http://localhost:8000/prev', {
      title: title,
      idx: idx,
    });
    const dataOfdata = data.data[0];
    setPrevRecentDate(dataOfdata.dateOfUpdate);
    navigate(`/read/${title}/${dateOfUpdate}`);
  };

  useEffect(() => {
    console.log(dateOfUpdate);
  }, [PrevContent, dateOfUpdate]);

  useEffect(() => {
    return setPrevContent();
  }, []);

  return (
    <div className="PrevBtn Content_nav_item" onClick={onPrevBtnClick}>
      <FontAwesomeIcon icon={faArrowCircleLeft} className="nav_user" />
    </div>
  );
};

export default ContentNav_Prev;
