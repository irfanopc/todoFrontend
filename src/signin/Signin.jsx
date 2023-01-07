import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sign.css'
function Signin() {
    const navigator = useNavigate();
    const [signinData, setSigninData] = useState({ email: "", password: "" });
  const onSignin = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signinData.email,
        password: signinData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          return alert(data.message);
        }

        window.localStorage.setItem("id", data.user._id);
        window.localStorage.setItem("email", data.user.email);
        alert(`user signin successfully`);
        navigator("/todo");
      });
  };

  return (
    <div>
       <div className="login-main">
        <div className="login-box">
          <div className="login-logo">TODO APP</div>
          <form className="login-form">
            <input
              className="login-input"
              type="text"
              placeholder="user name"
              name="username"
              required
              onChange={(e) => {
                setSigninData({ ...signinData, email: e.target.value });
              }}
            />

            <input
              className="login-input"
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={(e) => {
                setSigninData({ ...signinData, password: e.target.value });
              }}
            />

            <button className="login-btn" onClick={onSignin} type="submit">
              Sign In
            </button>
          </form>
          <div id="login-a">
          <Link to={"/signup"}>Sign up</Link>
             
          
          </div>
        </div>
        <div className="addition">
          <p>forgot Password</p>
          <Link to={"/signup"}>Sign up</Link>
          {/* <a href="/signup">Sign up</a> */}
        </div>
        <div></div>
      </div>
      

    </div>
  )
}

export default Signin