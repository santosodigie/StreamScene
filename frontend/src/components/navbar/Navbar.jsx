import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true); // if YOffset = 0 /topofpage/ then = false, else true
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);
  return (
    <div
      className={
        isScrolled
          ? "text-white text-xl flex items-center w-full fixed z-[999] bg-[#0b0b0b]" // execute this tailwind css if isScrolled is true
          : "text-white text-xl flex items-center w-full fixed z-[999] my-navbar-class" // execute this tailwind css if isScrolled is false
      }
    >
      <img className="h-20 ml-5" src="src/assets/StreamScenelogo.png" alt="" />
      <span className="ml-4 cursor-pointer">Homepage</span>
      <span className="ml-4 cursor-pointer">Series</span>
      <span className="ml-4 cursor-pointer">Movies</span>
      <span className="ml-4 cursor-pointer">New and Popular</span>
      <span className="ml-4 cursor-pointer">My List</span>
      <div className="ml-auto flex items-center">
        <IoMdSearch className="text-3xl cursor-pointer" />
        <span className="ml-4 cursor-pointer">KID</span>
        <IoNotificationsSharp className="ml-4 mr-4 text-3xl cursor-pointer" />
        <img
          className="h-8 rounded-md cursor-pointer"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        <div className="relative group">
          <IoMdArrowDropdown className="ml-4 mr-4 cursor-pointer" />
          <div className="opacity-0 group-hover:opacity-100 absolute mt-2 bg-[#0b0b0b] text-white right-0 transition-opacity duration-300 rounded-md">
            <span className="block px-4 py-2 cursor-pointer">Settings</span>
            <span className="block px-4 py-2 cursor-pointer">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
