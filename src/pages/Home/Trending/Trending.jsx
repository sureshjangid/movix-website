import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SwtichTabs from "../../../components/SwtichTabs/SwtichTabs";
import { useState } from "react";
import useFetch from "../../../customHook/useFetch";
import Carousel from "../../../components/Carousel/Carousel";

const Trending = () => {
  const[endPoints, setEndPoints] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endPoints}`);
  const onTabChange = (tab) => {
    setEndPoints(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Treding</span>
        <SwtichTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  );
};

export default Trending;
