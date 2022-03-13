import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const OwnNovelAddBtn = ({ title }) => {
  /*<FontAwesomeIcon icon={faPencil} className="nav_user" />*/
  return (
    <>
      <Link to={`/addnovel/${title}`} style={{ marginTop: '4.5%' }}>
        작품 추가하기{''}
        <FontAwesomeIcon icon={faPencil} className="faPencil" />
      </Link>
    </>
  );
};

export default OwnNovelAddBtn;
