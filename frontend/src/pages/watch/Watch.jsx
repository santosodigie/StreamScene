import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const Watch = () => {
  const trailer = "/dragonball.mp4";

  return (
    <>
      <div className="watch w-[100vw] h-[100vh]">
        <div className="back flex items-center absolute top-[10px] left-[10px] text-white cursor-pointer z-50 text-2xl">
          <IoMdArrowBack />
          Home
        </div>
        <video
          src={trailer}
          className=" w-full h-full object-cover"
          autoPlay={true}
          controls
        />
      </div>
    </>
  );
};

export default Watch;
