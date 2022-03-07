import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const OwnNovelAddBtn = ({ title }) => {
  /*<FontAwesomeIcon icon={faPencil} className="nav_user" />*/
  return (
    <div>
      <Link to={`/addnovel/${title}`}>
        작품 추가하기{''}
        <FontAwesomeIcon icon={faPencil} className="faPencil" />
      </Link>
    </div>
  );
};

export default OwnNovelAddBtn;
