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
      className={`bg-contain pb-20`}
      style={{
        backgroundImage:
          size.screen === 'xs' ? '' : `url(${featuresBackground})`,
      }}
    >
      <div className="flex flex-row justify-center mt-[90px]">
        <img className="w-[220px] sm:w-[310px]" src={featureTitle} />
      </div>
      <div className="flex flex-row justify-center">
        <div className="container pt-10 sm:pt-20 px-64">
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
