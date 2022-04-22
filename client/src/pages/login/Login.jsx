import React, { useRef, useState } from "react";
import "./login.scss";
export const Login = () => {
  const handleStart = () => {};
  const handleFinish = () => {};
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Sign in</h1>
          <input type="email" placeholder="Email or Phone" name="email" id="" />
          <input type="password" placeholder="Password" name="password" id="" />
          <button type="submit" className="loginButton">
            Sign in
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Leo to ensure you're not a bot.
            <br />
            <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};
