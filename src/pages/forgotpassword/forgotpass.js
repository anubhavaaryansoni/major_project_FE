import React from "react";
import "./forgotpass.scss";
import google from "../../../src/login/google.png";
import facebook from "../../../src/login/facebook.png";
import twiter from "../../../src/login/twitter.png"
// import v from "./letter-v.png"
const Forgotpass = () => {
  return (
    <div className="forgotpass">
      <div className="container">
        <form action="/">
          <h1>
          VisuArt
          </h1>
         
          <label for="Email">Email:</label>

          <input type="email" id="email" name="email" val="xyz@gmail.com" />
          <button>Recover Account</button>
          <p>or sign in using</p>
          <div className="ima">
            <img src={google} />
            <img src={facebook} />
            <img  className='x' src={twiter} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Forgotpass;