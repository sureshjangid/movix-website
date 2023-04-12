import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../customHook/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyImageLoading/Img";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
const HeroBanner = () => {
  const { url } = useSelector((state) => state.home);
  console.log(url, "suresh");
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bgImage =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    console.log(bgImage, "backdrop_pathbackdrop_path");
    setBackground(bgImage);
  }, [data]);
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
    }
  };
  const searchData = () => {
    navigate(`/search/${query}`);
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} className={""} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search for a movie or Tv show..."
            />
            <button onClick={() => searchData()}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
