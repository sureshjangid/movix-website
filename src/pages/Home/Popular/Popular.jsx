import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SwtichTabs from "../../../components/SwtichTabs/SwtichTabs";
import { useState } from "react";
import useFetch from "../../../customHook/useFetch";
import Carousel from "../../../components/Carousel/Carousel";

const Popular = () => {
  const[endPoints, setEndPoints] = useState("movie");

  const { data, loading } = useFetch(`/${endPoints}/popular`);
  const onTabChange = (tab) => {
    setEndPoints(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwtichTabs data={["Movies", "Tv shoes"]} onTabChange={onTabChange} />
      </ContentWrapper>
        <Carousel endPoints={endPoints} data={data?.results} loading={loading}/>
    </div>
  );
};

export default Popular;
