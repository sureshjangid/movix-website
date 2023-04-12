import React, { useState } from "react";

import "./style.scss";

import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import {PlayIcon} from "../DetailsBanner/PlayIcon";
import VideoPopup from "../../../components/VideoPopup/VideoPopup";
import Img from "../../../components/lazyImageLoading/Img";

const Video = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results.map((video, index) => (
                
              <div
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
                className="videoItem"
                key={index}
              >
                <div className="videoThumbnail">
                  <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <PlayIcon />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
    </div>
  );
};

export default Video;
