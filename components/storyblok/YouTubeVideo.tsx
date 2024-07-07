// components/YouTubeVideo.tsx
import React, { useState } from 'react';

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  blok: { videoId },
}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className='relative pt-[56.25%]'>
      {true ? (
        <div
          role='status'
          className='bg-Grey-300 animate-pulse dark:bg-Grey-700 flex h-full w-full items-center justify-center rounded-lg absolute inset-0'
        >
          <span className='sr-only'>Loading...</span>
        </div>
      ) : null}
      <iframe
        onLoad={handleLoad}
        className={`shadow-xl ${isLoading ? 'hidden' : ''} absolute inset-0 h-full w-full`}
        width='560'
        height='315'
        src={embedUrl}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;
