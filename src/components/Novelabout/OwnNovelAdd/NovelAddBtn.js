import React, { useState, useContext, useEffect } from 'react';
import '../../../css/NovelAddComfirm.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NovelAddConfirmBox from './NovelAddConfirmBox';
import { ThemeContext } from '../../../ThemeContext/ThemeContext';

const NovelAddBtn = ({ subtitle, userObj }) => {
  const { setIsPost } = useContext(ThemeContext);
  const { setIsSpinnerLoading } = useContext(ThemeContext);
  const { setAddComplete } = useContext(ThemeContext);

  const { title } = useParams();

  const [isUpload, setIsUpload] = useState();

  const onConfirmBtnClick = async () => {
    setIsPost(true);
    setIsSpinnerLoading(true);
    const data = await axios.post('http://localhost:8000/noveladd', {
      subtitle: subtitle.title,
      content: subtitle.content,
      title: title,
      id: userObj.uid,
    });
    setIsUpload(data.data);
  };

  useEffect(() => {
    setIsSpinnerLoading(false);
    setAddComplete(true);
  }, [isUpload]);

  return (
    <div className="NovelAddComfirm">
      {/*isUpload ? <NovelAddConfirmBox title={title} /> : ''*/}
      <button className="submit-button" onClick={onConfirmBtnClick}>
        입력
      </button>
    </div>
  );
};

export default NovelAddBtn;
