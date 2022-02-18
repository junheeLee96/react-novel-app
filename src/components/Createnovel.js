import React, { useState } from 'react';
import { dbService } from '../fBase';
import { authService } from '../fBase';

const Createnovel = () => {
  const [Novelhead, setNovelhead] = useState('');
  const [contents, setContents] = useState('');

  const userId = authService.currentUser.uid;

  const onSubmit = async (e) => {
    await dbService
      .collection('novel')
      // .add({
      //   contents,
      .doc(Novelhead)
      .set({
        contents,
      });

    setNovelhead('');
    setContents('');
  };
  const onHeadChange = (e) => {
    const {
      target: { value },
    } = e;
    setNovelhead(value);
  };
  const onContentsChange = (e) => {
    const {
      target: { value },
    } = e;
    setContents(value);
  };

  return (
    <>
      Create novel page
      <form onSubmit={onSubmit}>
        <div>
          제목
          <input type="text" value={Novelhead} onChange={onHeadChange} />
        </div>
        <div>
          <input
            type="text"
            value={contents}
            onChange={onContentsChange}
            style={{ width: '550px', height: '550px' }}
            placeholder="내용을 입력하세요."
          />
        </div>
        <button>제출하기</button>
      </form>
    </>
  );
};

export default Createnovel;
