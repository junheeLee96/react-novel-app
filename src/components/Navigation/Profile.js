import React, { useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { authService } from '../../fBase';
import '../../css/Navigation/Profile.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);

  const ShowProfile_Items = () => {
    setIsClick(!isClick);
  };

  const onSignOutClick = () => {
    setIsClick(!isClick);
    authService.signOut();
  };
  const onProfileClick = () => {
    setIsClick(!isClick);
    navigate('editprofile');
  };
  /*
  <Link to="editprofile">
</Link>
<button onClick={onSignOutClick}>Sign Out</button>
  */
  return (
    <div>
      <div className="Profile">
        <FontAwesomeIcon
          icon={faUser}
          className="nav_user"
          onClick={ShowProfile_Items}
        />{' '}
      </div>
      <div className="ProfileBox">
        <div
          className="Profile_item"
          style={
            isClick
              ? { transform: 'translateY(0%)' }
              : {
                  transform: 'translateY(-120%)',
                }
          }
        >
          <FontAwesomeIcon icon={faCaretUp} className="item triangle" />
          <div
            onClick={onProfileClick}
            style={{ borderBottom: '1px solid black' }}
            className="item"
          >
            프로필 보기
          </div>
          <div onClick={onSignOutClick} className="item">
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
