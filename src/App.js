import './App.css';
import Video from './pages/Video';

function App(){
  return(
    <div className='App'>
      <div className='app_videos'>
      <Video 
        likes={111}
        messages={222}
        shares={300}
      />

      <Video />
      <Video />

      </div>
    </div>
  );
}

export default App;