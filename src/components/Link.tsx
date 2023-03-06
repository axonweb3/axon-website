import React from 'react';
import linkBackground from '../assets/img/webp/link-background.webp';
import learnMoreImage from '../assets/img/webp/learn-more.webp';
import { ILink } from '../config';

export interface ILinkProps {
  item: ILink;
}

function Link(props: ILinkProps) {
  const { item } = props;

  return (
    <div className="relative">
      <img src={linkBackground} />
      <div className="absolute top-0 left-0 h-full flex flex-col justify-between p-6">
        <div className="flex flex-row items-center">
          <img
            className="h-8 md:h-6 lg:h-8 2xl:h-9 mr-2 2xl:mr-4"
            src={item.icon}
          />
          <span className="font-bold">{item.name}</span>
        </div>
        <a href={item.link}>
          <img className="h-4 2xl:h-5" src={learnMoreImage} />
        </a>
      </div>
    </div>
  );
}

export default Link;
