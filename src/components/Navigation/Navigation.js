import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import { authService } from '../../fBase';
import '../../css/Navigation/Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Symbol from '../Navigation/Symbol';
import HomeAndCreate from './HomeAndCreate';

const Navigation = ({ isLoggedIn, userObj }) => {
  const onSignOutClick = () => {
    authService.signOut();
  };

  return (
    <div className="Navigation">
      <div className="nav-inside">
        <ul className="Nav_ul">
          <li>
            <Symbol />
          </li>
        </ul>

        <ul className="Nav_ul">
          <li>
            <HomeAndCreate />
          </li>
        </ul>
        <ul className="Nav_ul">
          <li>
            <Link to="editprofile">
              <FontAwesomeIcon icon={faUser} className="nav_user" />{' '}
            </Link>
            <Link to="/">
              <button onClick={onSignOutClick}>Sign Out</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
