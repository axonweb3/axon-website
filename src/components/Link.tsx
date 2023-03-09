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
      className="relative w-[230px] h-[150]"
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
              className="w-[40px] mr-2"
              src={item.icon}
              loading="lazy"
              decoding="async"
            />
            <span className="text-[16px] font-alfarn-2 font-bold leading-6">
              {item.name}
            </span>
          </div>
          <div>
            <img className="w-[122px]" src={learnMoreImage} />
          </div>
        </div>
      </a>
    </m.div>
  );
}

export default Link;
