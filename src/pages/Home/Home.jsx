import React from "react";
import "./style.scss";

import HeroBanner from "./HeroBanner/HeroBanner";
import Trending from "./Trending/Trending";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TodRated";
const Home = () => {
  return (
    <>
      <HeroBanner />
      <Trending/>
      <Popular/>
      <TopRated/>
      {/* <div className="" style={{ height: "100vh" }}></div> */}
    </>
  );
};

export default Home;
