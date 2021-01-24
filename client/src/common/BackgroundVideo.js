import React, { useState } from 'react';
function BackgroundVideo({ source }) {
  // var vid = document.getElementById('myVideo');
  // vid.playbackRate = 0.5;
  return (
    <div className='bg-video'>
      <video id='myVideo' className='bg-video__content' autoPlay muted loop>
        <source src={source} type='video/mp4' />
        {/* <source src={source} type='video/webm' /> */}
        Your browser is not supported
      </video>
    </div>
  );
}

export default BackgroundVideo;
