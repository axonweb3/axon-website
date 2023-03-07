import React from 'react';
import brandImage from '../assets/img/webp/brand.webp';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

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
  const zIndex = useTransform(scrollYProgress, (val) => (val >= 0.5 ? 30 : 0));

  React.useEffect(() => {
    control.start('visible');
  }, [control]);

  return (
    <div className="py-40" ref={ref}>
      <motion.div
        className="flex flex-col justify-center items-center"
        style={{
          opacity: rate,
          scale: rate,
          zIndex,
        }}
        variants={brandVariants}
        initial="hidden"
        animate={control}
      >
        <img className="w-8/12 sm:w-7/12 md:w-5/12 lg:w-5/12 xl:w-4/12 mb-2" src={brandImage} />
        <p className="w-10/12 sm:w-8/12 md:w-6/12 xl:w-4/12 text-center text-[20px] font-medium font-neue-kabel z-30">
          Axon is a layer 2 framework built on CKB aims to unleash the power of
          app-chain future.
        </p>
      </motion.div>
    </div>
  );
}

export default Brand;
