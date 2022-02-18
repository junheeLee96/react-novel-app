import React, { useEffect, useState } from 'react';
import AppRouter from './routes/AppRouter';
import { authService } from './fBase';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
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
    console.log(authService.currentUser);
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj(Object.assign({}, user));
  };

  return (
    <>
      {init ? (
        <AppRouter
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        'Initialzing...'
      )}
    </>
  );
};

export default App;
