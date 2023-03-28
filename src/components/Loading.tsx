import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import useResourceLoad from '../hooks/useResourceLoad';
import heroBackground from '../assets/img/webp/hero-background.webp';

function Loading() {
  const { loading, progress } = useResourceLoad();

  if (!loading) {
    return null;
  }

  return (
    <div
      className="relative top-0 left-0 flex justify-center items-center w-screen h-screen z-50"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="flex flex-col justify-center items-center">
        <BounceLoader className="mb-4" color="#F0CE59" size={80} />
        <span className="font-neue-kabel text-lg">Loading... {progress}%</span>
      </div>
    </div>
  );
}

export default Loading;
