import React from 'react';
import brandImage from '../assets/img/brand.png';
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
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
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rate = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const zIndex = useTransform(scrollYProgress, val => val >= 0.5 ? 30 : 0);

  React.useEffect(() => {
    control.start('visible');
  }, [control]);

  return (
    <div className="flex flex-row justify-center" ref={ref}>
      <motion.img
        className="w-full lg:w-10/12 xl:w-9/12"
        style={{
          opacity: rate,
          scale: rate,
          zIndex,
        }}
        src={brandImage}
        variants={brandVariants}
        initial="hidden"
        animate={control}
      />
    </div>
  );
}

export default Brand;
