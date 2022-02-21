import React, { useEffect, useState } from 'react';
import { authService } from '../fBase';
import AppRouter from '../routes/AppRouter';

const Header = ({ isLoggedIn, userObj }) => {
  const onSignOutClick = () => {
    authService.signOut();
    console.log('out');
  };

  return (
    <div>
      {isLoggedIn ? <button onClick={onSignOutClick}>Sign Out</button> : ''}
      <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
    </div>
  );
};

export default Header;
