import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ContentNav_Prev from './ContentNav_Prev';
import ContentNav_Home from './ContentNav_Home';
import ContentNav_Next from './ContentNav_Next';
import { useNavigate } from 'react-router-dom';

const ContentNav = ({ title, idx }) => {
  const navigate = useNavigate();
  //<FontAwesomeIcon icon={faUser} className="nav_user" />
  return (
    <>
      <>
        <ContentNav_Prev title={title} idx={idx} />
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
        <ContentNav_Next title={title} idx={idx} />
      </>
    </>
  );
};

export default ContentNav;
