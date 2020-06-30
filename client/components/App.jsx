import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import User from './User.js';
import { BrowserRouter, Link } from 'react-router-dom';

const App = (props) => {
  // cheking if user is authenicated and reult is True render
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
