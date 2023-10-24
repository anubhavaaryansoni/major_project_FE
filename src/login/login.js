import React from "react";
import "./login.scss";
import google from "./google.png";
import facebook from "./facebook.png";
import twiter from "./twitter.png"
import v from "./letter-v.png"
const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <form action="/">
          <h1>
          VisuArt
          </h1>
         
          <label for="Email">Email:</label>

          <input type="email" id="email" name="email" val="xyz@gmail.com" />

          <label for="password">Password:</label>

          <input type="password" id="password" name="password" />

          <button>Login</button>
          <p>or sign in using</p>
          <div className="ima">
            <img src={google} />
            <img src={facebook} />
            <img  className='x' src={twiter} />
          </div>
        </form>{" "}
      </div>
    </div>
  );
};
export default Login;
