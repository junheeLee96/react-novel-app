import React, { useEffect, useState } from 'react';
import AppRouter from './routes/AppRouter';
import { authService } from './fBase';
import Header from './components/Header';
import 'css/App.css';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (authService.currentUser) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          //refreshUser={refreshUser}
        />
      ) : (
        'Initialzing...'
      )}
    </>
  );
};

export default App;
