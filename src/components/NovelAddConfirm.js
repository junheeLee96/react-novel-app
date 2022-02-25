import React from 'react';
import { Link } from 'react-router-dom';

const NovelAddConfirm = ({ title }) => {
  return (
    <div>
      <div>
        <div>
          등록이 완료되었습니다.
          <Link to={`/novel/${title}`}>
            <button>확인</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NovelAddConfirm;
