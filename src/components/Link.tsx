import React from 'react';
import linkBackground from '../assets/img/webp/link-background.webp';
import linkHoverBackground from '../assets/img/webp/link-hover.webp';
import learnMoreImage from '../assets/img/webp/learn-more.webp';
import { ILink } from '../config';
import { m, useAnimationControls } from 'framer-motion';

export interface ILinkProps {
  item: ILink;
}

const variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
};

function Link(props: ILinkProps) {
  const { item } = props;
  const [hover, setHover] = React.useState(false);
  const controls = useAnimationControls();

  React.useEffect(() => {
    controls.start(hover ? 'visible' : 'hidden');
  }, [hover, controls]);

  return (
    <m.div
      className="relative"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <a href={item.link}>
        <img src={linkBackground} />
        <m.img
          className="absolute top-0 left-0 opacity-0"
          src={linkHoverBackground}
          initial="hidden"
          variants={variants}
          animate={controls}
        />
        <div className="absolute top-0 left-0 h-full flex flex-col justify-between p-6">
          <div className="flex flex-row items-center">
            <img
              className="h-8 md:h-6 lg:h-8 2xl:h-9 mr-2 2xl:mr-4"
              src={item.icon}
              loading="lazy"
              decoding="async"
            />
            <span className="font-alfarn-2 font-bold">{item.name}</span>
          </div>
          <div>
            <img className="h-4 2xl:h-5" src={learnMoreImage} />
          </div>
        </div>
      </a>
    </m.div>
  );
}

export default Link;
