import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Mask, { IMaskProps } from '../components/Mask';

const MASK_TRANSITION = { ease: 'easeOut', duration: 1 };

function HeroSection() {
  const topMaskAnimate: IMaskProps['animate'] = React.useCallback(
    (containerRect: DOMRect) => {
      const top = containerRect.top;
      return {
        top,
        transition: MASK_TRANSITION,
      };
    },
    [],
  );

  const bottomMaskAnimate: IMaskProps['animate'] = React.useCallback(
    (containerRect: DOMRect, maskRect: DOMRect) => {
      const top = containerRect.bottom - maskRect.height;
      return {
        top,
        transition: MASK_TRANSITION,
      };
    },
    [],
  );

  return (
    <div className="relative w-screen h-screen bg-hero bg-cover flex justify-center">
      <div className="absolute top-0 left-0 flex flex-row justify-center items-center h-full z-0">
        <img className="w-full lg:w-10/12 xl:w-9/12" src={'/img/brand.png'} />
      </div>

      <div className="relative w-full sm:w-10/12 md:w-8/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 h-full z-20">
        <Mask
          src={'/img/top-mask.png'}
          containerClassName="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
          animate={topMaskAnimate}
        />
        <Mask
          src={'/img/bottom-mask.png'}
          containerClassName="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
          animate={bottomMaskAnimate}
        />
      </div>

      <div className="absolute top-0 left-0 w-3/12 md:w-2/12 z-30">
        <Logo />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-30">
        <div className="absolute bottom-0 left-0 w-full flex flex-row justify-center z-30">
          <div className="flex flex-row mb-12 xl:mb-16 2xl:mb-20">
            <Button text="Open Docsite" />
            <div className="w-4" />
            <Button text="Open in GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
