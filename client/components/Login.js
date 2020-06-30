import React, { useState } from 'react';

const Login = (props) => {
  return (
    <div>
      <h1>Welcome to FreeTutorLink!</h1>
      <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77iojwzvr5axo9&redirect_uri=http://localhost:3000/login/authCode&scope=r_liteprofile%20r_emailaddress">
        Log in with LinkedIn
      </a>

      {/* <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77iojwzvr5axo9&redirect_uri=http://localhost:3000/login/authCode&scope=r_liteprofile%20r_emailaddress"><button id="loginButton" >Login with LinkedIn</button></a> */}
    </div>
  );
};

export default Login;
