import React, { useContext, useEffect } from 'react';
import '../../css/Loading/Loading.css';
import LoadingSpinner from './LoadingSpinner';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const { setIsPost } = useContext(ThemeContext);
  const { isSpinnerLoading } = useContext(ThemeContext);
  const { CreateComplete } = useContext(ThemeContext);
  const { setCreateComplete } = useContext(ThemeContext);
  const { isExistSameNovel } = useContext(ThemeContext);
  const { setIsExistSameNovel } = useContext(ThemeContext);
  const { AddComplete } = useContext(ThemeContext);
  const { setAddComplete } = useContext(ThemeContext);
  const { Ntitle } = useContext(ThemeContext);
  const { EditComplete } = useContext(ThemeContext);
  const { setEditComplete } = useContext(ThemeContext);

  const navigate = useNavigate();

  const onCreateComplete_Btn_Click = () => {
    setCreateComplete(false);
    setIsPost(false);
    navigate('/');
  };
  const ExistSameNovel = () => {
    setIsExistSameNovel(false);
    setIsPost(false);
  };

  const onAddComplete_Btn_Click = () => {
    setAddComplete(false);
    setIsPost(false);
    navigate(`/novel/${Ntitle}`);
  };

  const onEditComplete_Btn_Click = () => {
    setEditComplete(false);
    setIsPost(false);
    navigate(`/novel/${Ntitle}`);
  };

  return (
    <>
      <div className="Loading">
        <div className="Loading_wrap"></div>
        <div className="Loading_item">
          {isSpinnerLoading && <LoadingSpinner />}
          {!isSpinnerLoading && (
            <>
              {CreateComplete ? (
                <>
                  <div
                    className="Create_Complete Message_box"
                    onClick={onCreateComplete_Btn_Click}
                  >
                    완료되었습니다.
                    <div>확인</div>
                  </div>
                </>
              ) : (
                ''
              )}
              {isExistSameNovel ? (
                <>
                  <div
                    className="Create_false Message_box"
                    onClick={ExistSameNovel}
                  >
                    이미 같은 제목으로 등록된 소설입니다.
                    <div>확인</div>
                  </div>
                </>
              ) : (
                ''
              )}
              {AddComplete ? (
                <div className="Message_box" onClick={onAddComplete_Btn_Click}>
                  완료되었습니다.
                  <div>확인</div>
                </div>
              ) : (
                ''
              )}
              {EditComplete ? (
                <div className="Message_box" onClick={onEditComplete_Btn_Click}>
                  완료되었습니다.
                  <div>확인</div>
                </div>
              ) : (
                ''
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Loading;
