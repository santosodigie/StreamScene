import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { GrLike, GrDislike } from "react-icons/gr";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "/dragonball.mp4";
  return (
    <div
      className="listItem group w-[225px] h-[120px] bg-[#0b0b0b] text-white mr-[5px] overflow-hidden cursor-pointer hover:w-[325px] hover:h-[300px] hover:absolute hover:top-[-150px] hover:rounded-md"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://www.bupipedream.com/wp-content/uploads/2022/09/better-call-saul-1024x576.jpeg"
        alt=""
        className=" w-full h-full object-cover group-hover:h-[140px]"
      />
      {isHovered && (
        <>
          <video
            src={trailer}
            autoPlay={true}
            loop
            className=" w-full h-[140px] object-cover absolute top-0 left-0"
          />
          <div className="itemInfo flex flex-col p-1">
            <div className="icons flex mb-3">
              <FaPlay className=" border-2 border-white p-[2px] rounded-[50%] text-3xl mr-2" />
              <IoMdAdd className="border-2 border-white p-[2px] rounded-[50%] text-3xl mr-2" />
              <GrLike className="border-2 border-white p-[2px] rounded-[50%] text-3xl mr-2" />
              <GrDislike className="border-2 border-white p-[2px] rounded-[50%] text-3xl mr-2" />
            </div>
            <div className="iteminfotop flex items-center mb-3 font-bold text-gray-500">
              <span>1 hour 10 minutes</span>
              <span className="limit border-gray-500 border pt-[1px] pb-[1px] pr-[3px] pl-[3px] ml-2 mr-2">
                +16
              </span>
              <span>2012</span>
            </div>
            <div className="desc text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              ratione, similique quisquam magnam maiores repudiandae.
            </div>
            <div className="genre text-sm text-gray-300">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
