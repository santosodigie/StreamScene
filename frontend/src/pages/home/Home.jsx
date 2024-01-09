import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className=" bg-[#0b0b0b] overflow-hidden">
      <Navbar />
      <Featured type={"movie"} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
