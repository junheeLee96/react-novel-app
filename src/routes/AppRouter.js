import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navigation from '../components/Navigation';
import Auth from './Auth';
import Createnovel from '../components/Createnovel';
import axios from 'axios';
import Editprofile from '../components/Editprofile';
import Novelabout from 'components/Novelabout';
import NovelAdd from 'components/NovelAdd';

const AppRouter = ({ isLoggedIn, userObj }) => {
  const [Ntitle, getNtitle] = useState();

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
        .then(() => {
          console.log('등록완료');
        });
    }
  }, [userObj]);

  return (
    <div>
      {isLoggedIn && <Navigation isLoggedIn={isLoggedIn} userObj={userObj} />}
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
                element={<Novelabout Ntitle={Ntitle} userObj={userObj} />}
              />
              <Route
                path="createnovel"
                element={<Createnovel userObj={userObj} />}
              />
              <Route path="editprofile" element={<Editprofile />} />
              <Route
                path="/addnovel/:title"
                element={<NovelAdd userObj={userObj} />}
              />
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
