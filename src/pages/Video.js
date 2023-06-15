import React from 'react'
import "./Video.css"

function Video() {
  return (
    <div className='video'>
      <video
      className='video_player'
      controls
      src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appsot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
         >
      </video>
    </div>
  )
}

export default Video