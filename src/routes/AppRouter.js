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

const AppRouter = ({ isLoggedIn, userObj }) => {
  const [Ntitle, getNtitle] = useState();
  const [isOwnNovelFromRouter, setisOwnNovelFromRouter] = useState(false);

  const getFromhomeTitle = (t) => {
    getNtitle(t);
  };

  useEffect(() => {
    //console.log(Ntitle);
  }, [Ntitle]);

  useEffect(() => {
    if (isLoggedIn && userObj) {
      axios
        .post('http://localhost:8000/api/insert', {
          id: userObj.uid,
          displayName: userObj.displayName,
        })
        .then(() => {});
    }
  }, [userObj]);

  return (
    <div className="AppRouter">
      {isLoggedIn && (
        <>
          <Navigation isLoggedIn={isLoggedIn} userObj={userObj} />
        </>
      )}
      <Routes>
        {isLoggedIn ? (
          <>
            <>
              <Route
                path="/"
                element={
                  <Home getFromhomeTitle={getFromhomeTitle} userObj={userObj} />
                }
              />
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
    </div>
  );
};

export default AppRouter;
