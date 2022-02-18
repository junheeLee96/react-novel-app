import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navigation from '../components/Navigation';
import Auth from './Auth';
import Createnovel from '../components/Createnovel';

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  //const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <BrowserRouter>
        {isLoggedIn && <Navigation />}
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="createnovel" element={<Createnovel />} />
            </>
          ) : (
            <Route path="/" element={<Auth />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
