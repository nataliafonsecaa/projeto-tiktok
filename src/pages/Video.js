import React, { useRef, useState } from "react";
import "./Video.css";
import vD from "../videos/Download.mp4";
import VideoFooter from "./components/footer/VideoFooter"


function Video() {
  const videoRef = useRef(null);
  const [ play, setPlay ] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }
  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={vD} type="video/mp4"
      ></video>

{/*side bar*/}

<VideoFooter>
  </VideoFooter>

    </div>
  );
}

export default Video;
