import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import NovelAddConfirmBox from '../../OwnNovelAdd/NovelAddConfirmBox';
import { ThemeContext } from '../../../../ThemeContext/ThemeContext';

const UpdateSubBtn = ({ getValue, title, dateOfUpdate, originContent }) => {
  const [isUpLoad, setIsUpLoad] = useState();
  const { setIsPost } = useContext(ThemeContext);
  const { setEditComplete } = useContext(ThemeContext);
  const { setIsSpinnerLoading } = useContext(ThemeContext);

  const onConfirmBtnClick = async () => {
    setIsPost(true);
    setIsSpinnerLoading(true);
    const data = await axios.post('http://localhost:8000/novelupdate', {
      getValue: getValue,
      title: title,
      dateOfUpdate: dateOfUpdate,
      originContent: originContent,
    });
    setIsUpLoad(data.data);
  };

  useEffect(() => {
    setEditComplete(true);
    setIsSpinnerLoading(false);
  }, [isUpLoad]);
  return (
    <div className="NovelAddComfirm">
      {isUpLoad ? <NovelAddConfirmBox title={title} /> : ''}
      <button className="submit-button" onClick={onConfirmBtnClick}>
        입력
      </button>
    </div>
  );
};

export default UpdateSubBtn;
