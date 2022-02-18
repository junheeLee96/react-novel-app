import React from 'react';
import { authService, firebaseInstance } from '../fBase';

const Auth = () => {
  const onSignInClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
      await firebaseInstance
        .auth()
        .setPersistence(firebaseInstance.auth.Auth.Persistence.SESSION);
    } else if (name === 'apple') {
      provider = new firebaseInstance.auth.OAuthProvider('apple.com');
    } else if (name === 'facebook') {
      provider = new firebaseInstance.auth.FacebookAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div>
      <button name="google" onClick={onSignInClick}>
        Sign in with Goolge
      </button>
      <button name="apple" onClick={onSignInClick}>
        Sign in with Apple
      </button>
      <button name="facebook" onClick={onSignInClick}>
        Sign in with Facebook
      </button>
    </div>
  );
};

export default Auth;
