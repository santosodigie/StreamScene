import React, { useRef, useState } from "react";

const Login = () => {
  return (
    <div className="login w-full h-[100vh]">
      <div className="top">
        <div className="wrapper pt-5 pb-5 pr-12 pl-12 flex items-center justify-between">
          <img
            className="logo h-20"
            src="src/assets/StreamScenelogo.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-full absolute flex flex-col justify-center items-center text-white top-0 left-0">
        <form className="w-[400px] h-[400px] p-8 rounded bg-[#0b0b0b] flex flex-col justify-around">
          <h1 className=" text-3xl font-bold">Sign in</h1>
          <input
            className=" bg-gray-500 rounded h-10 text-white pl-3 placeholder-white"
            type="email"
            placeholder="email or phone number"
          />
          <input
            className=" bg-gray-500 rounded h-10 text-white pl-3 placeholder-white"
            type="password"
            placeholder="Password"
          />
          <button className="loginButton h-10 rounded bg-purple-600 text-xl cursor-pointer font-medium">
            Sign In
          </button>
          <span className=" text-gray-200">
            New to StreamScene? <b className=" text-white">Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
