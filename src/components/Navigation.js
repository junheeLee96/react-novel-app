import React from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../fBase';

const Navigation = ({ isLoggedIn, userObj }) => {
  const onSignOutClick = () => {
    authService.signOut();
  };
  return (
    <>
      <Link to="/">
        <button onClick={onSignOutClick}>Sign Out</button>
      </Link>

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
      <ul>
        <li>
          <Link to="editprofile">프로필 수정</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
