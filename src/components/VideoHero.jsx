import { string } from "prop-types";
import React from "react";

function VideoHero({ videoSrc }) {
  return (
    <div className="video-background">
      <video id="background-video" loop autoPlay muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

VideoHero.propTypes = {
  videoSrc: string.isRequired,
};

export default VideoHero;
