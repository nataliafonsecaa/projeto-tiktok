import React, { useRef, useState } from "react";
import videoFooter from "./components/footer/videoFooter.js";
import "./Video.css";
import vD from "../videos/Download.mp4";

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

<videoFooter />

    </div>
  );
}

export default Video;
