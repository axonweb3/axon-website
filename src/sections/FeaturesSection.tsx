import React from 'react';
import featuresConfig, { IFeature } from '../features-config';
import featuresBackground from '../assets/img/webp/features-background.webp';
import featureTitle from '../assets/img/webp/features-title.webp';
import Feature from '../components/Feature';

function FeaturesSection() {
  return (
    <div
      className={`relative bg-cover`}
      style={{ backgroundImage: `url(${featuresBackground})` }}
    >
      <img className="invisible" src={featuresBackground} />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex flex-row justify-center pt-20">
          <img className="w-96" src={featureTitle} />
        </div>
        <div className="flex flex-row justify-center">
          <div className="container pt-10 sm:pt-32 w-full sm:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-5/12">
            {featuresConfig.map((feature: IFeature, index: number) => {
              return (
                <Feature feature={feature} index={index} key={feature.title} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
