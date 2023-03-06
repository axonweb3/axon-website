import React from 'react';
import linkBackground from '../assets/img/webp/link-background.webp';
import learnMoreImage from '../assets/img/webp/learn-more.webp';
import { ILink } from '../config';

export interface ILinkProps {
  data: ILink;
}

function Link(props: ILinkProps) {
  const { data } = props;

  return (
    <div className="relative">
      <img src={linkBackground} />
      <div className="absolute top-0 left-0 h-full flex flex-col justify-between p-6">
        <div className="flex flex-row items-center">
          <img className="h-8 md:h-6 lg:h-8 2xl:h-9 mr-2 2xl:mr-4" src={data.icon} />
          <span className="font-bold">{data.name}</span>
        </div>
        <div className="cursor-pointer">
          <img className="h-4 2xl:h-5" src={learnMoreImage} />
        </div>
      </div>
    </div>
  );
}

export default Link;
