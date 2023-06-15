import React from 'react'
import "./Video.css"
import Vd2 from '../videos/Download.mp4'

function Video() {
  return (
    <div className='video'>
      {/* <video
      className='video_player'
      controls
      src="https://www.youtube.com/watch?v=Jwy1yCJjNEA"
         >
      </video> */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Jwy1yCJjNEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <video controls autostart autoPlay src={Vd2} type="video/mp4" />

    </div>
  )
}

export default Video