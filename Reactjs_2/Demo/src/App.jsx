import { useState } from 'react'
import './App.css'
import MyChannelVideos from './Components/videos'
import StatesDemo from './Components/StatesDemo';

function App() {
  
  let videos = ["React js 1", "React js 2", "React js 3"];
  return (
    <>
      <MyChannelVideos />
      {

      videos.map((video,index) => {
        return <li key={index}>{video} - {index}</li>
      })

      }
      <StatesDemo />
      
    </>
  )
}

export default App
