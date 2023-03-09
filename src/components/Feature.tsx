import { m, Variants } from 'framer-motion';
import React from 'react';
import useScreenSize from 'use-screen-size';
import { IFeature } from '../config';

export interface IFeatureProps {
  feature: IFeature;
  index: number;
}

const descriptVariants: Variants = {
  offscreen: {
    opacity: 0,
    translateY: -20,
  },
  onscreen: {
    opacity: 1,
    translateY: 0,
    transition: { ease: 'easeOut', duration: 1, delay: 0.2 },
  },
};

const imageVariants: Variants = {
  offscreen: {
    opacity: 0,
    translateY: -20,
  },
  onscreen: {
    opacity: 1,
    translateY: 0,
    transition: { ease: 'easeOut', duration: 1 },
  },
};

function Feature(props: IFeatureProps) {
  const { feature, index } = props;
  const size = useScreenSize();
  const image = React.useMemo(
    () => <img src={feature.image} loading="lazy" decoding="async" />,
    [feature.image],
  );

  return (
    <m.div
      className={`flex items-center flex-col-reverse mb-8 sm:mb-0
      ${index % 2 === 0 ? `sm:flex-row-reverse` : `sm:flex-row`}`}
      initial={size.screen === 'xs' ? 'onscreen' : 'offscreen'}
      whileInView={size.screen === 'xs' ? undefined : 'onscreen'}
      viewport={{ once: true, amount: 0.6 }}
    >
      <m.div
        className="w-1/2 sm:w-full basis-6/12"
        variants={imageVariants}
      >
        {image}
      </m.div>
      <m.div
        className="basis-6/12 pl-8 px-4 z-30 backdrop-blur-[1px] bg-white bg-opacity-30 rounded-md"
        variants={descriptVariants}
      >
        <div className="relative mb-[25px]">
          <h2 className="text-[18px] font-alfarn-2 font-bold leading-7">{feature.title}</h2>
          <div className="absolute -bottom-[3px] left-0 w-10/12 border-b-[3px] border-axon-theme" />
        </div>
        <p className="relative font-neue-kabel font-medium leading-6">
          <span className="absolute -left-9 -top-4 text-7xl text-axon-theme font-serif">
            “
          </span>
          {feature.description}
          <span className="absolute -right-6 -bottom-12 text-7xl text-axon-theme font-serif">
            ”
          </span>
        </p>
      </m.div>
    </m.div>
  );
}

export default Feature;
