import { motion, Variants } from 'framer-motion';
import React from 'react';
import { IFeature } from '../features-config';

export interface IFeatureProps {
  feature: IFeature;
  index: number;
}

const descriptVariants: Variants = {
  offscreen: {
    y: -20,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 1, delay: 0.2 },
  },
};

const imageVariants: Variants = {
  offscreen: {
    y: -20,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 1 },
  },
};

function Feature(props: IFeatureProps) {
  const { feature, index } = props;

  return (
    <motion.div
      className={`flex items-center ${
        index % 2 === 0 ? `flex-row` : `flex-row-reverse`
      }`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.div className="basis-7/12 px-8" variants={descriptVariants}>
        <div className="border-b-2 border-axon-theme mb-4">
          <h2 className="text-xl font-bold">{feature.title}</h2>
        </div>
        <p>{feature.description}</p>
      </motion.div>
      <motion.div className="basis-5/12" variants={imageVariants}>
        <img src={feature.image} />
      </motion.div>
    </motion.div>
  );
}

export default Feature;
