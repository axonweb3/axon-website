import React from 'react';
import featuresConfig, { IFeature } from '../features-config';
import featuresBackground from '../assets/img/features-background.png';
import featureTitle from '../assets/img/features-title.png';

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
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? `flex-row` : `flex-row-reverse`
                  }`}
                  key={feature.title}
                >
                  <div className="basis-7/12 px-8">
                    <div className="border-b-2 border-axon-theme mb-4">
                      <h2 className="text-xl font-bold">{feature.title}</h2>
                    </div>
                    <p>{feature.description}</p>
                  </div>
                  <div className="basis-5/12">
                    <img src={feature.image} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
