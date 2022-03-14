import React from 'react';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import EditUserInfoBtn from './EditUserInfoBtn';
import '../../css/EditProfile/EditProfile.css';

const Editprofile = ({ userObj }) => {
  const uid = userObj.uid;
  const [displayName, setDisplayName] = useState([]);

  const getUserInfo = async () => {
    const data = await axios.get(`http://localhost:8000/userinfo`, {
      params: uid,
    });
    setDisplayName(data.data[0].displayName);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="Editprofile">
      <div>
        <ul>
          <li>UID: {uid}</li>
          <li>
            별명:{' '}
            <input
              type="text"
              value={displayName}
              onChange={(e) => {
                setDisplayName(e.target.value);
              }}
            />
          </li>
        </ul>
      </div>
      <EditUserInfoBtn uid={uid} displayName={displayName} />
    </div>
  );
};

export default Editprofile;
