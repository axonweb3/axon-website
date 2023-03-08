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
      className={`flex items-center flex-col-reverse mb-8 sm:mb-0 ${
        index % 2 === 0 ? `sm:flex-row-reverse` : `sm:flex-row`
      }`}
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
      <motion.div className="basis-7/12 px-16 sm:px-8 z-30" variants={descriptVariants}>
        <div className="border-b-2 border-axon-theme mb-4">
          <h2 className="text-xl font-bold">{feature.title}</h2>
        </div>
        <p className="relative font-serif">
          <span className="absolute -left-12 -top-3 text-7xl text-axon-theme">
            “
          </span>
          {feature.description}
          <span className="absolute -right-10 -bottom-12 text-7xl text-axon-theme">
            ”
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Feature;
