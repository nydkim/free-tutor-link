import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import User from './User.js';
import { BrowserRouter, Link, Redirect } from 'react-router-dom';
import AddSkills from './mainPage/AddSkills.js';

const App = (props) => {
  // cheking if user is authenicated and reult is True render
  const loggedIn = document.cookie
    .split(';')
    .some((item) => item.trim().startsWith('acceptedBBB='));
  console.log(loggedIn);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {loggedIn ? <User /> : <Redirect to="/signin" />}
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route path="/addSkills">
          <AddSkills />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
