import React, { useEffect, useState } from 'react';
import AppRouter from './routes/AppRouter';
import { authService } from './fBase';
import Header from './components/Header';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);

  /*
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      // user 판명을 듣고
      if (user) {
        // 있으면
        setIsLoggedIn(true); // 로그인 됨
        console.log(user);
        console.log(isLoggedIn + '    is login?');
        console.log(userObj + '  user obj?');
      } else {
        setIsLoggedIn(false); // 로그인 안됨
      }
      setInit(true); // user 판명 끝
    });
  }, []);
*/

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

  /*
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj(Object.assign({}, user));
  };*/

  return (
    <>
      {init ? (
        <Header
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
