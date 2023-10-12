import React from 'react';

function YouTubeVideo() {
  return (
    <div className="ratio ratio-16x9 object-fit-contain border rounded">
      <iframe
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        title="YouTube video"
        
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;