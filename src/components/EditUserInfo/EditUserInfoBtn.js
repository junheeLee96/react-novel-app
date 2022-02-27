import React, { useState } from 'react';
import axios from 'axios';
import NovelAddConfirmBox from 'components/Novelabout/OwnNovelAdd/NovelAddConfirmBox';

const EditUserInfoBtn = ({ uid, displayName }) => {
  const uidAndDisplayName = [uid, displayName];
  const [isUpload, setIsUpLoad] = useState(false);
  const onEditUserInfoBtnClick = async () => {
    const data = await axios.post(`http://localhost:8000/userinfoupdate`, {
      uidAndDisplayName: uidAndDisplayName,
    });
    setIsUpLoad(data.data);
  };

  return (
    <div>
      {isUpload ? <NovelAddConfirmBox /> : ''}
      <button onClick={onEditUserInfoBtnClick}>설정 완료</button>
    </div>
  );
};

export default EditUserInfoBtn;
