import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContentNav_Next = ({ title, CurrentIdx, LastIdx, dateOfUpdate }) => {
  const SendData = [title, CurrentIdx];
  const [NextDate, setNextDate] = useState(dateOfUpdate);
  const navigate = useNavigate();

  const onNextBtnClick = async () => {
    const data = await axios.post(`http://localhost:8000/next`, {
      SendData: SendData,
    });
    setNextDate(data.data[0].dateOfUpdate);
  };

  useEffect(() => {
    navigate(`/read/${title}/${NextDate}`);
  }, [NextDate]);

  return (
    <div
      className="NextBtn Content_nav_item"
      onClick={onNextBtnClick}
      style={
        CurrentIdx === LastIdx
          ? { opacity: '0', cursor: 'default' }
          : { opacity: '1' }
      }
    >
      {' '}
      <FontAwesomeIcon icon={faArrowCircleRight} className="nav_user" />
    </div>
  );
};

export default ContentNav_Next;
