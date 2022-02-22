import React, { useEffect, useState } from 'react';
import { authService } from '../fBase';
import AppRouter from '../routes/AppRouter';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, userObj }) => {
  const onSignOutClick = () => {
    authService.signOut();
  };
  return (
    <div>
      {/*

        <Link to="/">
        <button onClick={onSignOutClick}>Sign Out</button>
      </Link>
      */}

      <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
    </div>
  );
};

export default Header;
