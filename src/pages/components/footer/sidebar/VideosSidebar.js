import React, {useState} from 'react'
import "./VideoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideosSidebar({likes, messages, shares}) {

    const [liked, setliked] = useState (false)

    function handlelike() {
        setliked(!liked)
    }

  return (
	<div className='videosidebar'>
    
  <div 
      className='videosidebar-options'
      onClick={handlelike}
      >
        { liked ? <FavoriteIcon fontSize='large' />  : <FavoriteBorderIcon fontSize='large' />}
    
    <p>{liked ? likes + 1 : likes }</p>
  </div>

  <div className='videosidebar-options'>
  <ChatIcon fontSize='large'/>
  <p> 150</p>
</div>

<div className='videosidebar-options'>
  <ShareIcon fontSize='large'/>
  <p> 100</p>
</div>
  
  </div>
  )
}

export default VideosSidebar