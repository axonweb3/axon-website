import {
  m,
  TargetAndTransition,
  Transition,
  useAnimationControls,
} from 'framer-motion';
import React from 'react';
import { ResourceLoadContext } from '../hooks/useResourceLoad';

export interface IMaskProps {
  src: string;
  animate: (containerRect: DOMRect, maskRect: DOMRect) => TargetAndTransition;
  containerClassName?: string;
}

function Mask(props: IMaskProps) {
  const { src, animate, containerClassName } = props;
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const maskRef = React.useRef<HTMLImageElement | null>(null);
  const controls = useAnimationControls();
  const { loaded } = React.useContext(ResourceLoadContext);

  const startAnimate = React.useCallback(
    (transition?: Transition) => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      const maskRect = maskRef.current?.getBoundingClientRect();
      const animation = animate(containerRect!, maskRect!);
      if (transition) {
        animation.transition = transition;
      }
      controls.start(animation);
      return controls.stop;
    },
    [controls, animate],
  );

  React.useEffect(() => {
    if (!loaded) {
      return;
    }
    const stop = startAnimate();
    return stop;
  }, [loaded, startAnimate]);

  return (
    <div className={containerClassName} ref={containerRef}>
      <m.img
        className="absolute"
        ref={maskRef}
        src={src}
        animate={controls}
      />
    </div>
  );
}

export default Mask;
