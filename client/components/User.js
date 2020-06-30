import React, { useState } from 'react';
import Main from './mainPage/Main';
import Profile from './profilePage/Profile';
import { BrowserRouter, Link, Redirect } from 'react-router-dom';

const User = (props) => {
  const [mainPage, setMainPage] = useState(true);
  const [profilePage, setProfilePage] = useState(true);

  const handleToProfile = () => {
    setMainPage(false);
    setProfilePage(true);
  };

  const handleToMain = () => {
    setProfilePage(false);
    setMainPage(true);
  };

  if (mainPage) {
    return (
      <div>
        <Main handleToProfile={handleToProfile} />
        <Link to={`/addSkills`}>
          <button type="button" className="btnSecondary">
            I am a Tutor
          </button>
        </Link>
      </div>
    );
  }

  if (profilePage) {
    return (
      <div>
        <Profile handleToMain={handleToMain} />
        <Link to={`/addSkills`}>
          <button type="button" className="btnSecondary">
            I would like to tutor
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div>Hello, you're in the wrong place!</div>
    </div>
  );
};

export default User;
