import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navigation from '../components/Navigation/Navigation';
import Auth from './Auth';
import Createnovel from '../components/createnovel/Createnovel';
import axios from 'axios';
import Editprofile from '../components/EditUserInfo/Editprofile';
import Novelabout from 'components/Novelabout/Novelabout';
import NovelAdd from 'components/Novelabout/OwnNovelAdd/NovelAdd';
import UpdateSub from 'components/Novelabout/NovelEdit/UpdateSub/UpdateSub';
import NovelaboutShowContent from 'components/Novelabout/NovelaboutShowContent';
import '../css/routes/AppRouter.css';
import { ThemeContext } from 'ThemeContext/ThemeContext';
import Loading from 'components/Loading/Loading';

const AppRouter = ({ isLoggedIn, userObj }) => {
  const [Ntitle, getNtitle] = useState();
  const [isOwnNovelFromRouter, setisOwnNovelFromRouter] = useState(false);

  const [isPost, setIsPost] = useState(false); //Loading 컴포넌트 on/off
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(true); //Spinner on/off

  //createNovel
  const [CreateComplete, setCreateComplete] = useState(false);
  const [isExistSameNovel, setIsExistSameNovel] = useState(false);

  //NovelAdd
  const [AddComplete, setAddComplete] = useState(false);

  //EditNovel
  const [EditComplete, setEditComplete] = useState(false);

  const getFromhomeTitle = (t) => {
    getNtitle(t);
  };

  useEffect(() => {
    if (isLoggedIn && userObj) {
      axios
        .post('http://localhost:8000/insert', {
          id: userObj.uid,
          displayName: userObj.displayName,
        })
        .then(() => {});
    }
  }, [userObj]);

  return (
    <div className="AppRouter">
      <ThemeContext.Provider
        value={{
          Ntitle,
          getNtitle,
          isPost,
          setIsPost,
          isSpinnerLoading,
          setIsSpinnerLoading,
          CreateComplete,
          setCreateComplete,
          setIsExistSameNovel,
          isExistSameNovel,
          AddComplete,
          setAddComplete,
          EditComplete,
          setEditComplete,
        }}
      >
        {isPost && <Loading />}
        {isLoggedIn && (
          <>
            <Navigation isLoggedIn={isLoggedIn} userObj={userObj} />
          </>
        )}
        <Routes>
          {isLoggedIn ? (
            <>
              <>
                <Route path="/" element={<Home userObj={userObj} />} />
                <Route
                  path="/novel/:title"
                  element={
                    <Novelabout
                      Ntitle={Ntitle}
                      userObj={userObj}
                      setisOwnNovelFromRouter={setisOwnNovelFromRouter}
                    />
                  }
                />
                <Route
                  path="/read/:title/:dateOfUpdate"
                  element={<NovelaboutShowContent />}
                />
                <Route
                  path="createnovel"
                  element={<Createnovel userObj={userObj} />}
                />
                <Route
                  path="editprofile"
                  element={<Editprofile userObj={userObj} />}
                />
                <Route
                  path="/addnovel/:title"
                  element={<NovelAdd userObj={userObj} />}
                />
                {isOwnNovelFromRouter ? (
                  <>
                    <Route
                      path="/update/:title/:dateOfUpdate"
                      element={<UpdateSub />}
                    />
                  </>
                ) : (
                  '잘못된 경로입니다.'
                )}
              </>
            </>
          ) : (
            <Route path="/" element={<Auth />} />
          )}
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
};

export default AppRouter;
