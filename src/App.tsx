import * as React from 'react';
import { useEffect, useLayoutEffect } from 'react';
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

  > div:not(:first-child) {
    position: inherit !important;
    .interoperability-and-roadmap,
    .features {
      :before {
        content: none;
      }
    }
  }

  .top-nav-bar {
    position: fixed;
    z-index: 99;
    background-color: rgba(78, 49, 136, var(--top-nav-bar-alpha));
  }

  .interoperability-and-roadmap {
    :before {
      display: none;
    }
  }

  @media (max-width: 1080px) {
    // TopNavbar
    .top-left {
      margin-left: 0;
      > a {
        border-right: none !important;
        justify-content: flex-start;
        > img {
          height: 40px;
          margin-left: 25px;
        }
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
      padding: 1rem;
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
      .features-title {
        padding-top: 50px !important;
        font-size: 32px !important;
      }
      .features-main {
        width: calc(100% - 36px);
        .features-list {
          align-items: flex-start;
          pointer-events: none;
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
        //.features-list-item-1 {
        //  height: calc(~'(100% - 1260px) / 2');
        //  height: 288px;
        //}
        //.features-list-item-2 {
        //  height: 214px;
        //}
        //.features-list-item-3 {
        //  height: 236px;
        //}
        .features-list-item-4 {
          //height: 214px;
          border-bottom: none !important;
        }
      }
      .features-scroll {
        display: none;
      }
    }
    // Interoperability
    .interoperability {
      height: 61.49vw;
      .interoperability-background,
      .interoperability-title {
        display: none;
      }
      .interoperability-m {
        display: block;
      }
    }
    // roadmap
    .roadmap {
      > .roadmap-title {
        font-size: 32px;
        margin-top: 50px;
        margin-bottom: 29px;
      }
      > .roadmap-row {
        > .box-age {
          > svg {
            transform: scale(0.5);
          }
          > div {
            font-size: 20px !important;
          }
        }
        > :not(.box-age) {
          svg {
            line,
            path {
              stroke-width: 2;
            }
          }
        }
      }
      > .roadmap-row-1 {
        height: 237px;
        .box-disc {
          transform: translate(0, 66px);
        }
        .line-h {
          transform: translate(0, 56px) rotate(90deg) scaleX(0.3);
        }
        .line-v {
          transform: translate(0, 129px) scaleY(0.462);
        }
      }
      > .roadmap-row-2 {
        height: 325px;
        .box-disc {
          transform: translate(0, 66px);
        }
        .line-h {
          transform: translate(0, 56px) rotate(90deg) scaleX(0.3);
        }
        .line-v {
          transform: translate(0, 247px) scaleY(0.462);
        }
      }
      > .roadmap-row-3 {
        height: 370px;
        .box-age {
          > div {
            padding-left: 60px;
            padding-right: 60px;
          }
        }
        .box-disc {
          transform: translate(0, 157px);
        }
        .line-h {
          transform: translate(0, 147px) rotate(90deg) scaleX(0.3);
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
      //display: none;
      > div:first-child {
        font-size: 32px;
        margin-top: 50px;
        padding-left: 20px;
        padding-right: 20px;
      }
      > div:nth-child(2) {
        flex-direction: column;
        margin-top: 30px;
        margin-bottom: 40px;
        > div:first-child {
          height: 0 !important;
        }
        > div:nth-child(2) {
          padding: 22px;
          height: 78px;
          width: calc(100% - 44px);
        }
        > div:nth-child(3) {
          padding: 22px;
          height: 78px;
          width: calc(100% - 44px);
        }
        > div:nth-child(4) {
          height: 0 !important;
        }
      }
    }
    // FindUs
    .find-us {
      > div:first-child {
        font-size: 32px;
        margin-top: 50px;
      }
      > div:nth-child(2) {
        width: 320px;
        text-align: center;
      }
      > div:last-child {
        margin-top: 30px;
        margin-bottom: 34px;
        flex-direction: column;
        > a {
          margin: 22px;
        }
      }
    }
    .footer {
      flex-direction: column;
      height: 287px;
      > div:first-child {
        margin-left: 0 !important;
        margin-top: 8px !important;
        order: 3;
      }
      > div:nth-child(2) {
        flex: initial !important;
        order: 1;
        margin: 25px;
      }
      > div:last-child {
        margin-right: 0 !important;
        order: 2;
      }
    }
  }
`;

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const alpha = 3 * (document.documentElement.scrollTop / document.documentElement.clientHeight);
      if (alpha <= 1) {
        document.documentElement.style.setProperty('--top-nav-bar-alpha', alpha.toString());
        document.documentElement.setAttribute('on-page', '1');
      } else {
        document.documentElement.style.setProperty('--top-nav-bar-alpha', '1');
        document.documentElement.setAttribute('on-page', '2');
      }
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1080) {
        document.querySelectorAll('.features-list').forEach((el) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          (el as HTMLElement).style.height = (el as HTMLElement).lastElementChild!.clientHeight + 120 + 'px';
        });
      } else {
        document.querySelectorAll('.features-list').forEach((el) => {
          (el as HTMLElement).style.removeProperty('height');
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toHome = () => {
    console.log('toHome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToClass = (className: string) => {
    console.log(`to ${className}`);
    const ele = document.getElementsByClassName(className)[0];
    const navbarHeight = window.getComputedStyle(document.documentElement).getPropertyValue('--navbar-height');
    const top = ele.getBoundingClientRect().top + window.scrollY - parseInt(navbarHeight);
    window.scrollTo({ top, behavior: 'smooth' });
  };
  const toFeatures = () => {
    console.log('toFeatures');
    scrollToClass('features');
  };
  const toInteroperability = () => {
    console.log('toInteroperability');
    scrollToClass('interoperability');
  };
  const toRoadmap = () => {
    console.log('toRoadmap');
    scrollToClass('roadmap');
  };

  return (
    <AppWrapper className="app">
      <TopNavbar {...{ toHome, toFeatures, toInteroperability, toRoadmap }} />
      <Home />
      <Features />
      <InteroperabilityAndRoadmap />
    </AppWrapper>
  );
}
