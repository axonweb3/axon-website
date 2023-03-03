import React from 'react';
import brandImage from '../assets/img/brand.png';
import { throttle } from 'lodash-es';
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

const brandVariants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: { ease: 'easeOut', duration: 1 },
  },
  hidden: {
    scale: 0,
    opacity: 0,
  },
};

function Brand() {
  const control = useAnimation();
  const { scrollY } = useScroll();

  React.useEffect(() => {
    control.start('visible');
  }, [control]);

  useMotionValueEvent(
    scrollY,
    'change',
    throttle((latest) => {
      const rate = Math.max(1 - latest / window.innerHeight, 0);
      control.start({
        opacity: rate,
        scale: rate,
      });
    }, 100),
  );

  return (
    <motion.img
      className="w-full lg:w-10/12 xl:w-9/12"
      src={brandImage}
      variants={brandVariants}
      initial="hidden"
      animate={control}
    />
  );
}

export default Brand;
