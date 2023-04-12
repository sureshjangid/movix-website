import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Img from "../lazyImageLoading/Img";
import PosterFallback from "../../assets/no-poster.png";
// import CircleRating from "../../assets/CircleRating ";
// import Genres from "../genres/Genres";

import "./style.scss";
import CircleRating from "../CircleRating/CircleRating";
import Genres from "../Genres/Genres";
const Carousel = ({ title, data, loading, endPoints }) => {
  const carouselContainer = useRef();
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const navigator = (dir) => {
    const containter = carouselContainer.current;
    console.log(containter, "containtercontainter");
    const scrollAmount =
      dir === "left"
        ? containter.scrollLeft - (containter.offsetWidth + 20)
        : containter.scrollLeft + (containter.offsetWidth + 20);

    containter.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    console.log(scrollAmount, "scrollAmount");
  };
  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigator("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigator("right")}
        />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item, index) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              console.log(item, "posterUrl");
              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() =>
                    navigate(`/${item.media_type || endPoints}/${item.id}`)
                  }
                >
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="textBlock">
                    <div className="title">{item.title || item.name}</div>
                    <div className="date">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
