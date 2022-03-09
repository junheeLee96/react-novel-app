import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const ContentNav_Home = () => {
  return (
    <div className="nav_Home">
      {' '}
      <FontAwesomeIcon icon={faBookOpen} className="nav_user" />
    </div>
  );
};

export default ContentNav_Home;
