import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NovelAddConfirmBox from '../../OwnNovelAdd/NovelAddConfirmBox';

const UpdateSubBtn = ({ getValue, title, dateOfUpdate, originContent }) => {
  const [isUpLoad, setIsUpLoad] = useState(false);

  const onConfirmBtnClick = async () => {
    const data = await axios.post('http://localhost:8000/novelupdate', {
      getValue: getValue,
      title: title,
      dateOfUpdate: dateOfUpdate,
      originContent: originContent,
    });
    setIsUpLoad(data.data);
  };

  useEffect(() => {
    console.log(isUpLoad);
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
