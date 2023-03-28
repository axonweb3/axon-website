import React, { PropsWithChildren } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { ResourceLoadContext } from '../hooks/useResourceLoad';
import loadingBackground from '../assets/img/webp/loading-background.webp';
import { m, useAnimationControls, Variants } from 'framer-motion';

const variants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 1, delay: 0.2 },
  },
};

function Loading(props: PropsWithChildren) {
  const { loaded } = React.useContext(ResourceLoadContext);
  const [showLoading, setShowLoading] = React.useState(true);
  const controls = useAnimationControls();

  React.useEffect(() => {
    if (loaded) {
      controls.start('offscreen');
      setTimeout(() => {
        setShowLoading(false);
      }, 300);
    }
  }, [loaded, controls]);

  return (
    <>
      {showLoading && (
        <m.div
          className="fixed top-0 left-0 bg-cover flex justify-center items-center w-screen h-screen z-50"
          style={{ backgroundImage: `url(${loadingBackground})` }}
          variants={variants}
          animate={controls}
        >
          <div className="flex flex-col justify-center items-center">
            <BounceLoader className="mb-4" color="#F0CE59" size={100} />
            <span className="font-neue-kabel text-lg">Loading...</span>
          </div>
        </m.div>
      )}
      {props.children}
    </>
  );
}

export default Loading;
