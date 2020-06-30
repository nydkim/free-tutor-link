import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import User from './User.js';
import { BrowserRouter, Link } from 'react-router-dom';
import AddSkills from './mainPage/addSkills.js';

const App = (props) => {
  // cheking if user is authenicated and reult is True render
  // const loggedIn = document.cookie
  // .split(';')
  // .some((item) => item.trim().startsWith('token='));
  console.log(document.cookie);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <User />
        </Route>
        <Route path="/addSkills">
          <AddSkills />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
