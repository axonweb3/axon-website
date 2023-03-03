import {
  motion,
  TargetAndTransition,
  Transition,
  useAnimationControls,
} from 'framer-motion';
import React from 'react';

export interface IMaskProps {
  src: string;
  animate: (
    containerRect: DOMRect,
    maskRect: DOMRect,
  ) => TargetAndTransition;
  containerClassName?: string;
}

function Mask(props: IMaskProps) {
  const { src, animate, containerClassName } = props;
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const maskRef = React.useRef<HTMLImageElement | null>(null);
  const controls = useAnimationControls();
  const [loaded, setLoaded] = React.useState(false);

  const startAnimate = React.useCallback((transition?: Transition) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const maskRect = maskRef.current?.getBoundingClientRect();
    const animation = animate(containerRect!, maskRect!);
    if (transition) {
      animation.transition = transition;
    }
    controls.start(animation);
    return controls.stop;
  }, [controls, animate]);

  React.useEffect(() => {
    const listener = () => startAnimate({ duration: 0 });
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [startAnimate]);

  React.useEffect(() => {
    if (!loaded) {
      return;
    }
    const stop = startAnimate();
    return stop;
  }, [loaded, startAnimate]);

  return (
    <div className={containerClassName} ref={containerRef}>
      <motion.img
        className="absolute"
        ref={maskRef}
        src={src}
        animate={controls}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default Mask;
