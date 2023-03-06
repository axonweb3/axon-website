import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Mask, { IMaskProps } from '../components/Mask';
import heroBackground from '../assets/img/hero-background.png';
import topMaskImage from '../assets/img/top-mask.png';
import bottomMaskImage from '../assets/img/bottom-mask.png';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Brand from '../components/Brand';
import Starting from '../components/Strating';

const HERO_TRANSITION = { ease: 'easeOut', duration: 1 };
const BUTTON_TRANSITION = { duration: 0.3, delay: 0.7 };

function HeroSection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [scrollSnap, setScrollSnap] = React.useState(true);

  React.useEffect(() => {
    const $html = document.querySelector('html');
    $html!.className = scrollSnap ? 'snap-y snap-mandatory scroll-smooth' : '';
  }, [scrollSnap]);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setScrollSnap(progress !== 1);
  });

  const topMaskAnimate: IMaskProps['animate'] = React.useCallback(
    (containerRect: DOMRect) => {
      const top = containerRect.top;
      return {
        top,
        transition: HERO_TRANSITION,
      };
    },
    [],
  );

  const bottomMaskAnimate: IMaskProps['animate'] = React.useCallback(
    (containerRect: DOMRect, maskRect: DOMRect) => {
      const top = containerRect.bottom - maskRect.height;
      return {
        top,
        transition: HERO_TRANSITION,
      };
    },
    [],
  );

  return (
    <div
      className={`relative bg-cover bg-fixed`}
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="sticky top-0 w-screen h-screen flex justify-center">
        <div className="absolute top-0 sm:w-10/12 md:w-8/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 h-full">
          <Mask
            src={topMaskImage}
            containerClassName="absolute top-0 h-full w-full flex flex-col justify-center"
            animate={topMaskAnimate}
          />
          <Mask
            src={bottomMaskImage}
            containerClassName="absolute top-0 h-full w-full flex flex-col justify-center"
            animate={bottomMaskAnimate}
          />
        </div>

        <div className="absolute top-0 left-0 w-3/12 md:w-2/12">
          <Logo />
        </div>

        <div className="absolute bottom-0 left-0 w-full flex flex-row justify-center z-20">
          <motion.div
            className="flex flex-row mb-12 xl:mb-16 2xl:mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: BUTTON_TRANSITION }}
          >
            <Button text="Open Docsite" />
            <div className="w-4" />
            <Button text="Open in GitHub" />
          </motion.div>
        </div>
      </div>

      <div style={{ marginTop: '-100vh' }} ref={ref}>
        <section className="w-screen h-screen flex justify-center -mt-screen snap-center">
          <div className="flex flex-col h-full justify-center items-center">
            <Brand />
          </div>
        </section>
        <section
          className="w-screen h-screen flex justify-center snap-center"
          style={{ marginTop: '-50vh' }}
        >
          <div className="flex flex-col h-full w-full justify-center items-center">
            <Starting />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
