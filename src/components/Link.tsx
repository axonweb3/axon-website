import React from 'react';
import linkBackground from '../assets/img/webp/link-background.webp';
import linkHoverBackground from '../assets/img/webp/link-hover.webp';
import learnMoreImage from '../assets/img/webp/learn-more.webp';
import { ILink } from '../config';
import { m, useAnimationControls } from 'framer-motion';

export interface ILinkProps {
  item: ILink;
}

const backgroundVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
};

const letterVariants = {
  hover: {
    letterSpacing: '1px',
  },
  default: {
    letterSpacing: '0px',
  },
};

function Link(props: ILinkProps) {
  const { item } = props;
  const [hover, setHover] = React.useState(false);
  const backgroundControls = useAnimationControls();
  const letterControls = useAnimationControls();

  React.useEffect(() => {
    backgroundControls.start(hover ? 'visible' : 'hidden');
    letterControls.start(hover ? 'hover' : 'default');
  }, [hover, backgroundControls, letterControls]);

  return (
    <m.div
      className="relative w-full md:w-[230px] md:h-[150]"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <a href={item.link}>
        <img src={linkBackground} />
        <m.img
          className="absolute top-0 left-0 opacity-0"
          src={linkHoverBackground}
          initial="hidden"
          variants={backgroundVariants}
          animate={backgroundControls}
        />
        <div className="absolute top-0 left-0 h-full flex flex-col justify-between py-4 px-6 xl:p-8">
          <div className="flex flex-row items-center h-[40px]">
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
          <m.div
            className="flex flex-row items-center"
            initial="default"
            variants={letterVariants}
            animate={letterControls}
          >
            <span className="font-neue-kabel font-medium text-[16px]">
              Learn More
            </span>
            <img className="ml-3 w-[14px] h-[14px]" src={learnMoreImage} />
          </m.div>
        </div>
      </a>
    </m.div>
  );
}

export default Link;
