import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="createnovel">작품 추가하기</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
