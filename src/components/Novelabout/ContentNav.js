import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ContentNav_Prev from './ContentNav_Prev';
import ContentNav_Home from './ContentNav_Home';
import ContentNav_Next from './ContentNav_Next';
import { useNavigate } from 'react-router-dom';

const ContentNav = ({ title, CurrentIdx, dateOfUpdate }) => {
  const navigate = useNavigate();
  //<FontAwesomeIcon icon={faUser} className="nav_user" />
  return (
    <>
      <>
        <ContentNav_Prev
          title={title}
          CurrentIdx={CurrentIdx}
          dateOfUpdate={dateOfUpdate}
        />
      </>
      <div
        onClick={() => {
          navigate(`/novel/${title}`);
        }}
        className="Content_nav_item"
      >
        <ContentNav_Home />
      </div>
      <>
        <ContentNav_Next title={title} CurrentIdx={CurrentIdx} />
      </>
    </>
  );
};

export default ContentNav;
