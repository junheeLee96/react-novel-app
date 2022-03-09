import React, { useState } from 'react';
import '../../../css/NovelAddComfirm.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NovelAddConfirmBox from './NovelAddConfirmBox';

const NovelAddBtn = ({ subtitle, userObj }) => {
  const { title } = useParams();

  const [isUpload, setIsUpload] = useState(false);

  const onConfirmBtnClick = async () => {
    const data = await axios.post('http://localhost:8000/noveladd', {
      subtitle: subtitle.title,
      content: subtitle.content,
      title: title,
      id: userObj.uid,
    });
    setIsUpload(data.data);
  };
  return (
    <div className="NovelAddComfirm">
      {isUpload ? <NovelAddConfirmBox title={title} /> : ''}
      <button className="submit-button" onClick={onConfirmBtnClick}>
        입력
      </button>
    </div>
  );
};

export default NovelAddBtn;
