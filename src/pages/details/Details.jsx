import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../customHook/useFetch";
import DetailsBanner from "./DetailsBanner/DetailsBanner";
import Cast from "./Cast/Cast";
import Video from './Videos/Video'
import Similar from "./Carousels/Similar";
import Recommendation from "./Carousels/Recommendation";
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/> 
      <Cast data={credits?.cast.slice(0,6)} loading={creditsLoading} />;
      <Video data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </>
  );
};

export default Details;
