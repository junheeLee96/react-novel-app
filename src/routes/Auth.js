import React from 'react';
import { authService, firebaseInstance } from '../fBase';
import '../css/routes/Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import video from '../css/video/backgroundvid.mp4';

const Auth = () => {
  const covervid = process.env.PUBLIC_URL + `/img/vidbackground.mp4`;
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
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="Auth container">
      <div className="vid-wrap">
        <video autoPlay={true} muted={true} loop={true}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>
      <div className="loginBtn">
        <button name="google" onClick={onSignInClick} className="loginGoo">
          <FontAwesomeIcon icon={faGoogle} className="goo-icon" />
          {''} Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
