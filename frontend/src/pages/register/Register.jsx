import React, { useRef, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register w-full h-[100vh]">
      <div className="top">
        <div className="wrapper pt-5 pb-5 pr-12 pl-12 flex items-center justify-between">
          <img
            className="logo h-20"
            src="src/assets/StreamScenelogo.png"
            alt=""
          />
          <button className="loginbutton bg-purple-600 text-white rounded-md pl-5 pr-5 pt-1 pb-1 font-medium text-lg cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
      <div className="w-full h-full absolute flex flex-col justify-center items-center text-white top-0 left-0">
        <h1 className=" text-5xl font-bold">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="m-5 font-medium text-3xl">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input w-[50%] bg-white flex items-center justify-between mt-5 h-12 rounded">
            <input
              ref={emailRef}
              className=" flex-[9] h-full pl-2 pr-2 text-black"
              type="email"
              placeholder="email address"
            />
            <button
              className="flex-[3] h-full bg-purple-600 cursor-pointer text-xl"
              onClick={handleStart}
            >
              Get Started
            </button>
          </div>
        ) : (
          <form className="input w-[50%] bg-white flex items-center justify-between mt-5 h-12 rounded">
            <input
              ref={passwordRef}
              className=" flex-[9] h-full pl-2 pr-2 text-black"
              type="password"
              placeholder="password"
            />
            <button
              className="flex-[3] h-full bg-purple-600 cursor-pointer text-xl"
              onClick={handleFinish}
            >
              Start Membership
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
