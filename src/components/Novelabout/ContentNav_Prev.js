import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContentNav_Prev = ({ title, CurrentIdx, dateOfUpdate }) => {
  const [PrevRecentDate, setPrevRecentDate] = useState(0);

  const navigate = useNavigate();

  const onPrevBtnClick = async () => {
    const data = await axios.post('http://localhost:8000/prev', {
      title: title,
      idx: CurrentIdx,
    });
    const dataOfdata = data.data[0];
    setPrevRecentDate(dataOfdata.dateOfUpdate);
  };

  useEffect(() => {
    navigate(`/read/${title}/${PrevRecentDate}`);
  }, [PrevRecentDate]);

  return (
    <>
      <div
        className="PrevBtn Content_nav_item"
        onClick={onPrevBtnClick}
        style={
          CurrentIdx !== 1 ? { opacity: '1' } : { opacity: '0', cursor: 'none' }
        }
      >
        <FontAwesomeIcon icon={faArrowCircleLeft} className="nav_user" />
      </div>
    </>
  );
};

export default ContentNav_Prev;
