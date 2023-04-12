import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  console.log(genres, "suresh");
  return (
    <div className="genres">
      {data?.map((item, index) => {
        if (!genres[item]?.name) return;
        return (
          <div key={index} className="genre">
            {genres[item].name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
