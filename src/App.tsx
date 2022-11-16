import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TopNavbar from './components/TopNavbar';
import Features from './views/Features';
import Home from './views/Home';
import InteroperabilityAndRoadmap from './views/InteroperabilityAndRoadmap';

const AppWrapper = styled.div`
  > div {
    width: 100%;
    position: absolute;
  }
  > .move {
    transition: transform 1s;
    transform: translateX(var(--move-var));
  }
`;

export default function App() {
  const [onDuty, setOnDuty] = useState<number>(1);
  const [onMove, setOnMove] = useState<number>(0);
  const location = useLocation();
  const navigate = useNavigate();
  const stepPercent = 5;
  const doc = document.documentElement;
  let inputOff = 0;

  const addScroll = (percent: number): number => {
    const moveVar = window.getComputedStyle(doc).getPropertyValue('--move-var');
    const nowMove = parseInt(moveVar.substring(0, moveVar.length - 1)) - percent;
    document.documentElement.style.setProperty('--move-var', nowMove + '%');
    return nowMove;
  };
  const toScroll = (percent: number): number => {
    document.documentElement.style.setProperty('--move-var', percent + '%');
    return percent;
  };

  const delayOff = (ms: number) => {
    inputOff = new Date().getTime() + ms;
  };

  const doMove = (delta: number) => {
    if (new Date().getTime() < inputOff) {
      return;
    }
    delayOff(100);
    if (onMove !== 0) {
      const nowMove = addScroll(delta < 0 ? -stepPercent : stepPercent);
      if (nowMove >= 100) {
        // cancel
        setOnMove(0);
      } else if (nowMove <= 0) {
        document.documentElement.setAttribute('on-page', (onDuty + 1).toString());
        setOnDuty(onDuty + 1);
        setOnMove(0);
      } else {
      }
      return;
    }
    if (doc.scrollTop + doc.clientHeight === doc.scrollHeight && delta > 0) {
      if (onDuty === 1) {
        document.documentElement.style.overflow = 'hidden';
        toScroll(100);
        setOnMove(2);
      } else if (onDuty === 2) {
        document.documentElement.style.overflow = 'hidden';
        toScroll(100);
        setOnMove(3);
      }
    }
    if (doc.scrollTop === 0 && delta < 0) {
      if (onDuty === 2) {
        document.documentElement.style.overflow = 'hidden';
        toScroll(0);
        document.documentElement.setAttribute('on-page', '1');
        setOnDuty(1);
        setOnMove(2);
      } else if (onDuty === 3) {
        document.documentElement.style.overflow = 'hidden';
        toScroll(0);
        document.documentElement.setAttribute('on-page', '2');
        setOnDuty(2);
        setOnMove(3);
      }
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    console.log(event.key);
  };
  const handleWheel = (event: WheelEvent) => {
    doMove(event.deltaY);
  };

  useEffect(() => {
    if (onMove === 0) {
      // todo
      document.documentElement.style.overflow = '';
    } else {
      if (onDuty === onMove) {
        // todo
      } else {
        // todo
      }
    }

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [onMove, onDuty]);

  const toHome = () => {
    console.log('toHome');
    if (onDuty === 2) {
      delayOff(1000);
      document.documentElement.style.overflow = 'hidden';
      toScroll(0);
      setOnDuty(1);
      setOnMove(2);
      setTimeout(() => {
        toScroll(100);
        setTimeout(() => {
          document.documentElement.setAttribute('on-page', '1');
          setOnMove(0);
        }, 1000);
      }, 0);
    }
    if (onDuty === 3) {
      delayOff(1000);
      document.documentElement.style.overflow = 'hidden';
      toScroll(0);
      setOnDuty(1);
      setOnMove(3);
      setTimeout(() => {
        toScroll(100);
        setTimeout(() => {
          document.documentElement.setAttribute('on-page', '1');
          setOnMove(0);
        }, 1000);
      }, 0);
    }
  };
  const toFeatures = () => {
    console.log('toFeatures');
    if (onDuty === 1) {
      delayOff(1000);
      document.documentElement.style.overflow = 'hidden';
      toScroll(100);
      setOnMove(2);
      setTimeout(() => {
        toScroll(0);
        setTimeout(() => {
          document.documentElement.setAttribute('on-page', '2');
          setOnDuty(2);
          setOnMove(0);
        }, 1000);
      }, 0);
    }
    if (onDuty === 3) {
      delayOff(1000);
      document.documentElement.style.overflow = 'hidden';
      toScroll(0);
      setOnDuty(2);
      setOnMove(3);
      setTimeout(() => {
        toScroll(100);
        setTimeout(() => {
          document.documentElement.setAttribute('on-page', '2');
          setOnMove(0);
        }, 1000);
      }, 0);
    }
  };
  const toInteroperability = () => {
    console.log('toInteroperability');
    if (onDuty === 1 || onDuty === 2) {
      delayOff(1000);
      document.documentElement.style.overflow = 'hidden';
      toScroll(100);
      setOnMove(3);
      setTimeout(() => {
        toScroll(0);
        setTimeout(() => {
          document.documentElement.setAttribute('on-page', '3');
          setOnDuty(3);
          setOnMove(0);
        }, 1000);
      }, 0);
    }
    if (onDuty === 3) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const toRoadmap = () => {
    console.log('toRoadmap');
    if (onDuty === 1 || onDuty === 2) {
      delayOff(1000);
      document.documentElement.style.overflow = 'hidden';
      toScroll(100);
      setOnMove(3);
      setTimeout(() => {
        toScroll(0);
        setTimeout(() => {
          document.documentElement.setAttribute('on-page', '3');
          setOnDuty(3);
          setOnMove(0);
          document.getElementsByClassName('roadmap')[0].scrollIntoView({ behavior: 'smooth' });
        }, 1000);
      }, 0);
    }
    if (onDuty === 3) {
      document.getElementsByClassName('roadmap')[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppWrapper>
      <TopNavbar {...{ toHome, toFeatures, toInteroperability, toRoadmap }} />
      {onDuty === 1 && (
        <div className={onMove === 1 ? 'move' : undefined}>
          <Home />
        </div>
      )}
      {(onDuty === 2 || onMove === 2) && (
        <div className={onMove === 2 ? 'move' : undefined}>
          <Features />
        </div>
      )}
      {(onDuty === 3 || onMove === 3) && (
        <div className={onMove === 3 ? 'move' : undefined}>
          <InteroperabilityAndRoadmap />
        </div>
      )}
    </AppWrapper>
  );
}
