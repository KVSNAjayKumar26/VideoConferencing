import React from 'react'
import VideoStream from './components/VideoStream'
import ChatBox from './components/ChatBox'

const App = () => {
  return (
    <div className='flex flex-col items-center p-8 space-y-8 bg-gray-100 min-h-screen'>
      <h1 className='text-2xl font-bold text-blue-600'>Video Conferencing App</h1>
      <VideoStream />
      <ChatBox />
    </div>
  );
};

export default App;