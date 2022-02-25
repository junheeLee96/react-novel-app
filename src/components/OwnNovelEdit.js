import React from 'react';
import { Link } from 'react-router-dom';

const OwnNovelEdit = ({ title }) => {
  return (
    <div>
      <Link to={`/addnovel/${title}`}>
        <button>작품 추가하기</button>
      </Link>
    </div>
  );
};

export default OwnNovelEdit;
