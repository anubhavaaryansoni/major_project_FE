import React from 'react'
import "./register.scss"
const Register = () => {
    return (
      <div className="register">
        <div className="container">
          <form action="/">
            <h1>
            VisuArt
            </h1>
           
            <label for="Email">Email:</label>
  
            <input type="email" id="email" name="email" val="xyz@gmail.com" />
            <label for="Phone">Phone No:</label>
  
            <input type="tel" id="Phone No." name="Phone No." />
            <label for="password">Password:</label>
  
            <input type="password" id="password" name="password" />
            <label for="password">Retype Password:</label>
  
            <input type="password" id="password" name="retype password" />
  
            <button>Register</button>
          </form>
        </div>
      </div>
    );
  };
  export default Register