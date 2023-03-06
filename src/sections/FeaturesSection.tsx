import React from 'react';
import { features, IFeature } from '../config';
import featuresBackground from '../assets/img/webp/features-background.webp';
import featureTitle from '../assets/img/webp/features-title.webp';
import Feature from '../components/Feature';

function FeaturesSection() {
  return (
    <div
      className={`bg-contain pb-20`}
      style={{ backgroundImage: `url(${featuresBackground})` }}
    >
      <div className="flex flex-row justify-center pt-16">
        <img className="w-4/12 sm:w-3/12 md:w-2/12" src={featureTitle} />
      </div>
      <div className="flex flex-row justify-center">
        <div className="container pt-10 sm:pt-20 w-full sm:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-5/12">
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
