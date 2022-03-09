import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const ContentNav_Next = () => {
  return (
    <div className="NextBtn Content_nav_item">
      {' '}
      <FontAwesomeIcon icon={faArrowCircleRight} className="nav_user" />
    </div>
  );
};

export default ContentNav_Next;
