import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
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
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rate = useTransform(scrollYProgress, [1, 0.5], [0, 1]);
  const zIndex = useTransform(scrollYProgress, val => val <= 0.5 ? 30 : 0);

  return (
    <div className="flex flex-row justify-center" ref={ref}>
      <motion.img
        className="w-10/12 lg:w-8/12 xl:w-6/12"
        style={{
          opacity: rate,
          scale: rate,
          zIndex,
        }}
        src={startingImage}
        variants={startingVariants}
        initial="hidden"
        animate={control}
      />
    </div>
  );
}

export default Starting;
