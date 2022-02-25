import React, { useEffect, useState } from 'react';
import '../css/NovelAddComfirm.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NovelAddConfirm from './NovelAddConfirm';

const NovelAddBtn = ({ subtitle, userObj }) => {
  const { title } = useParams();

  const [upload, setUpload] = useState(false);

  const onConfirmBtnClick = async () => {
    const data = await axios.post('http://localhost:8000/noveladd', {
      subtitle: subtitle.title,
      content: subtitle.content,
      title: title,
      id: userObj.uid,
    });
    setUpload(data.data);
  };

  useEffect(() => {
    console.log(upload);
  }, [upload]);
  return (
    <div className="NovelAddComfirm">
      {upload ? <NovelAddConfirm title={title} /> : ''}
      <button className="submit-button" onClick={onConfirmBtnClick}>
        입력
      </button>
    </div>
  );
};

export default NovelAddBtn;
