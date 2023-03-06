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
          <div className="container pt-32 px-64 2xl:px-72">
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
