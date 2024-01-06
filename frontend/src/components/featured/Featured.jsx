import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const Featured = ({ type }) => {
  return (
    <div className="featured h-[90vh] relative">
      {type && (
        <div className="category absolute top-20 left-14 text-2xl flex items-center">
          <span className="text-white text-4xl">
            {type === "movie" ? "Movies" : "Series"}
          </span>
          <select
            className="cursor-pointer border bg-[#0b0b0b] border-white text-white ml-5 p-1"
            name="genre"
            id="genre"
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        className="w-full h-full object-cover"
        src="https://images.hdqwalls.com/wallpapers/breaking-bad-4k-art-zy.jpg"
        alt=""
      />
      <div className="info w-[35%] absolute left-[50px] bottom-[100px] flex flex-col">
        <img
          className=" w-[400px]"
          src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
          alt=""
        />
        <span className="desc text-white mb-[20px] mt-[20px] text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sint
          aut repudiandae doloribus quia autem exercitationem dolorum possimus
          obcaecati eum fugiat harum blanditiis, minima distinctio accusantium
          ea explicabo corporis nemo!
        </span>
        <div className="buttons flex">
          <button className="play bg-white pt-3 pb-3 pl-6 pr-6 mr-3 rounded-md flex items-center justify-center text-lg font-medium">
            <FaPlay />
            <span className="ml-2">Play</span>
          </button>
          <button className="more bg-gray-500 pt-3 pb-3 pl-6 pr-6 mr-3 rounded-md flex items-center justify-center text-lg font-medium text-white">
            <BsInfoCircle />
            <span className="ml-2">Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
