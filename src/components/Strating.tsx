import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { throttle } from 'lodash-es';
import startingImage from '../assets/img/starting.png';
import React from 'react';

const startingVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
};

function Starting() {
  const control = useAnimation();
  const { scrollY } = useScroll();

  useMotionValueEvent(
    scrollY,
    'change',
    throttle((latest) => {
      if (latest < window.innerHeight) {
        const rate = Math.min((latest / window.innerHeight) * 2, 1);
        control.start({
          opacity: rate,
          scale: rate,
          zIndex: rate > 0.8 ? 20 : 0,
        });
      }
    }, 100),
  );

  return (
    <motion.img
      className="w-10/12 lg:w-8/12 xl:w-6/12"
      src={startingImage}
      variants={startingVariants}
      initial="hidden"
      animate={control}
    />
  );
}

export default Starting;
