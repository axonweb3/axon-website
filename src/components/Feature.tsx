import { motion, Variants } from 'framer-motion';
import React from 'react';
import { IFeature } from '../config';

export interface IFeatureProps {
  feature: IFeature;
  index: number;
}

const descriptVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 1, delay: 0.2 },
  },
};

const imageVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 1 },
  },
};

function Feature(props: IFeatureProps) {
  const { feature, index } = props;

  return (
    <motion.div
      className={`flex items-center flex-col-reverse mb-8 sm:mb-0
      ${index % 2 === 0 ? `sm:flex-row-reverse` : `sm:flex-row`}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="w-1/2 sm:w-full mb-4 sm:mb-0 basis-5/12 -mt-10">
        <motion.img
          src={feature.image}
          loading="lazy"
          decoding="async"
          variants={imageVariants}
        />
      </div>
      <motion.div
        className="basis-7/12 py-10 px-20 sm:py-6 sm:px-12 z-30 backdrop-blur-[1px] bg-white bg-opacity-30 rounded-md"
        variants={descriptVariants}
      >
        <div className="border-b-2 border-axon-theme mb-4">
          <h2 className="text-xl font-alfarn-2 font-bold">{feature.title}</h2>
        </div>
        <p className="relative font-neue-kabel font-medium">
          <span className="absolute -left-12 -top-3 text-7xl text-axon-theme font-serif">
            “
          </span>
          {feature.description}
          <span className="absolute -right-10 -bottom-12 text-7xl text-axon-theme font-serif">
            ”
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Feature;
