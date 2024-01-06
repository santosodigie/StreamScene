import React, { useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ListItem from "../listitem/ListItem";

const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 48;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 8) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list w-full mt-3">
      <span className="listTitle text-white font-medium text-xl ml-12">
        Contine to watch
      </span>
      <div className=" relative mt-3">
        <IoIosArrowBack
          className="w-[50px] h-32 bg-[#171718] text-white absolute left-0 z-[999] top-0 bottom-0 m-auto opacity-50 cursor-pointer"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div
          className="ml-12 flex w-max translate-x-0 transition-all duration-1000 ease-linear"
          ref={listRef}
        >
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
          <ListItem index={12} />
          <ListItem index={13} />
          <ListItem index={14} />
          <ListItem index={15} />
        </div>
        <IoIosArrowForward
          className="w-[50px] h-32 bg-[#171718] text-white absolute right-0 z-[9999] top-0 bottom-0 m-auto opacity-50 cursor-pointer"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
