import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';

function HeroSection() {
  return (
    <div className="relative w-screen h-screen bg-hero bg-cover">
      <div className="absolute top-0 left-0 ml-4 w-2/12 z-10">
        <Logo />
      </div>
      <div className="absolute top-0 left-0 flex flex-row justify-center items-center h-full">
        <img className="w-4/5" src={'/img/brand.png'} />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex flex-row justify-center">
        <div className="flex flex-row mb-10">
          <Button text="Open Docsite" />
          <div className="w-4" />
          <Button text="Open in GitHub" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
