import React from 'react';
import useScreenSize from 'use-screen-size';
import { features, IFeature } from '../config';
import featuresBackground from '../assets/img/webp/features-background.webp';
import featureTitle from '../assets/img/webp/features-title.webp';
import Feature from '../components/Feature';

function FeaturesSection() {
  const size = useScreenSize();

  return (
    <div
      className={`bg-cover pb-6 pt-[80px]`}
      style={{
        backgroundImage:
          size.screen === 'xs' ? '' : `url(${featuresBackground})`,
      }}
    >
      <div className="flex flex-row justify-center">
        <img className="w-[220px] sm:w-[310px]" src={featureTitle} />
      </div>
      <div className="flex flex-row justify-center">
        <div className="grid grid-cols-1 grid-rows-4 gap-44 container py-8 sm:py-20 px-0 md:px-20 xl:px-48 2xl:px-64">
          {features.map((feature: IFeature, index: number) => {
            return (
              <Feature feature={feature} index={index} key={feature.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
