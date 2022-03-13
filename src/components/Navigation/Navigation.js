import React from 'react';
import '../../css/Navigation/Navigation.css';
import Symbol from '../Navigation/Symbol';
import HomeAndCreate from './HomeAndCreate';
import Profile from './Profile';

const Navigation = () => {
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
            <Profile />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
