import * as React from 'react';
import { useEffect, useLayoutEffect, useState } from 'react';
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

  @media (max-width: 1080px) {
    > div:not(:first-child) {
      position: inherit !important;
      .interoperability-and-roadmap,
      .features {
        :before {
          content: none;
        }
      }
    }
    // TopNavbar
    .top-left {
      margin-left: 0;
      > div {
        border-right: none !important;
      }
    }
    .top-middle,
    .top-right {
      display: none !important;
    }
    .navbar-toggle {
      display: flex !important;
      justify-content: flex-end;
      flex: 1;
      padding: 2rem;
      > button {
        background-color: transparent;
        border-style: none;
      }
    }
    // Home
    .home-main-title {
      display: none;
    }
    .home-main-title-m {
      display: flex !important;
    }
    .home-bottom {
      height: 180px !important;
      flex-direction: column;
      border: none !important;
      > div:first-child {
        height: 0 !important;
      }
      > div:nth-child(2) {
        border-right: none !important;
        padding: 22px;
        height: 78px;
        width: calc(100% - 44px);
        border-top: solid #ffffff 1px;
      }
      > div:nth-child(3) {
        padding: 22px;
        height: 78px;
        width: calc(100% - 44px);
        border-top: solid #ffffff 1px;
      }
      > div:nth-child(4) {
        height: 0 !important;
      }
    }
    .home-scroll {
      display: none;
    }
    // Features
    .features {
      .features-main {
        width: calc(100% - 36px);
        .features-list {
          align-items: flex-start;
          > div:first-child {
            width: 20%;
            height: 105px;
          }
          > div:nth-child(2) {
            width: 40%;
            height: 105px;
          }
          > div:nth-child(3) {
            flex: 1;
            height: 105px;
            transform: scale(0.5);
          }
          > div:last-child {
            display: block;
            position: absolute;
            height: auto;
            width: calc(100% - 36px);
            padding: 14px;
            transform: translateY(105px);
          }
        }
        .features-list-item-1 {
          height: 288px;
        }
        .features-list-item-2 {
          height: 214px;
        }
        .features-list-item-3 {
          height: 236px;
        }
        .features-list-item-4 {
          height: 214px;
          border-bottom: none !important;
        }
      }
      .features-scroll {
        display: none;
      }
    }
    // Interoperability
    .interoperability {
      height: 78vw;
    }
    .interoperability-title {
      > div:first-child {
        transform: scale(0.7);
      }
    }
    // roadmap
    .roadmap {
      > .roadmap-row-1 {
        height: 404px;
        .box-disc {
          transform: translate(0, 124px);
        }
        .line-h {
          transform: translate(0, 93px) rotate(90deg);
        }
        .line-v {
          transform: translate(0, 233px);
        }
      }
      > .roadmap-row-2 {
        height: 522px;
        .box-disc {
          transform: translate(0, 124px);
        }
        .line-h {
          transform: translate(0, 93px) rotate(90deg);
        }
        .line-v {
          transform: translate(0, 351px);
        }
      }
      > .roadmap-row-3 {
        height: 490px;
        .box-disc {
          transform: translate(0, 244px);
        }
        .line-h {
          transform: translate(0, 214px) rotate(90deg);
        }
        .line-v {
          transform: translate(0, 233px);
        }
      }
      > .roadmap-row {
        > div {
          position: absolute !important;
        }
      }
    }
    // JoinUs
    .join-us {
      display: none;
    }
    // FindUs
    .find-us {
      > div:nth-child(2) {
        width: 320px;
        text-align: center;
      }
      > div:last-child {
        margin-top: 30px;
        margin-bottom: 34px;
        flex-direction: column;
        > div {
          margin: 22px;
        }
      }
    }
    .footer {
      flex-direction: column;
      height: 287px;
      > div:first-child {
        margin-left: 0 !important;
        order: 3;
      }
      > div:nth-child(2) {
        flex: initial !important;
        order: 1;
        margin: 40px;
      }
      > div:last-child {
        margin-right: 0 !important;
        order: 2;
      }
    }
  }
`;

export default function App() {
  const [onDuty, setOnDuty] = useState<number>(1);
  const [onMove, setOnMove] = useState<number>(0);
  const [isM, setIsM] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const stepPercent = 5;
  const doc = document.documentElement;
  let inputOff = 0;

  const addScroll = (delta: number): number => {
    const moveVar = window.getComputedStyle(doc).getPropertyValue('--move-var');
    const move = parseInt(moveVar.substring(0, moveVar.length - 1));
    let nowMove;
    let delay;
    if (move < 70 && delta > 0) {
      nowMove = 0;
      delay = 700;
    } else if (move > 30 && delta < 0) {
      nowMove = 100;
      delay = 700;
    } else {
      nowMove = move + (delta > 0 ? -stepPercent : stepPercent);
      delay = 100;
    }
    delayOff(delay);
    document.documentElement.style.setProperty('--move-var', nowMove + '%');
    if (nowMove >= 100) {
      setTimeout(() => {
        // cancel
        setOnMove(0);
      }, delay);
    } else if (nowMove <= 0) {
      setTimeout(() => {
        document.documentElement.setAttribute('on-page', (onDuty + 1).toString());
        setOnDuty(onDuty + 1);
        setOnMove(0);
      }, delay);
    }
    return nowMove;
  };
  const toScroll = (percent: number, fn?: () => void): number => {
    document.documentElement.style.setProperty('--move-var', percent + '%');
    fn && setTimeout(fn, 1000);
    return percent;
  };

  const delayOff = (ms: number) => {
    inputOff = new Date().getTime() + ms;
  };

  const doMove = (delta: number) => {
    if (isM || new Date().getTime() < inputOff) {
      return;
    }
    console.log('doMove');
    delayOff(100);
    if (onMove !== 0) {
      addScroll(delta);
      return;
    }
    if (Math.round(doc.scrollTop + doc.clientHeight) === Math.round(doc.scrollHeight) && delta > 0) {
      if (onDuty === 1) {
        document.documentElement.style.overflow = 'hidden';
        toScroll(100, () => setOnMove(2));
      } else if (onDuty === 2) {
        document.documentElement.style.overflow = 'hidden';
        toScroll(100, () => setOnMove(3));
      }
    }
    if (doc.scrollTop === 0 && delta < 0) {
      if (onDuty === 2) {
        document.documentElement.style.overflow = 'hidden';
        toScroll(0, () => {
          document.documentElement.setAttribute('on-page', '1');
          setOnDuty(1);
          setOnMove(2);
        });
      } else if (onDuty === 3) {
        document.documentElement.style.overflow = 'hidden';
        toScroll(0, () => {
          document.documentElement.setAttribute('on-page', '2');
          setOnDuty(2);
          setOnMove(3);
        });
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
  }, [onMove, onDuty, isM]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080) {
        setIsM(false);
      } else if (window.innerWidth <= 1080) {
        setIsM(true);
        document.querySelectorAll('.features-list').forEach((el) => {
          (el as any).style.height = el.lastElementChild!.clientHeight + 120 + 'px';
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <AppWrapper className="app">
      <TopNavbar {...{ toHome, toFeatures, toInteroperability, toRoadmap }} />
      {(onDuty === 1 || isM) && (
        <div className={onMove === 1 ? 'move' : undefined}>
          <Home />
        </div>
      )}
      {(onDuty === 2 || onMove === 2 || isM) && (
        <div className={onMove === 2 ? 'move' : undefined}>
          <Features />
        </div>
      )}
      {(onDuty === 3 || onMove === 3 || isM) && (
        <div className={onMove === 3 ? 'move' : undefined}>
          <InteroperabilityAndRoadmap />
        </div>
      )}
    </AppWrapper>
  );
}
