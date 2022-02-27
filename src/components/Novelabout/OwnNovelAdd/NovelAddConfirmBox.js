import React from 'react';
import { useNavigate } from 'react-router-dom';

const NovelAddConfirmBox = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div>
          등록이 완료되었습니다.
          {title ? (
            //<Link to={`/novel/${title}`}>
            <button
              onClick={() => {
                navigate(`/novel/${title}`);
              }}
            >
              확인
            </button>
          ) : (
            //</Link>
            <button
              onClick={() => {
                navigate('/');
              }}
            >
              확인
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NovelAddConfirmBox;
