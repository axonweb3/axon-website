import * as _ from 'lodash';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScatterBall from './ScatterBall';

const InteroperabilityWrapper = styled.div`
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  background-color: #b7c1e0;
  > div:first-child {
    height: 100%;
    width: 100%;
    display: block;
    position: relative;
  }

  video {
    height: 100%;
    width: 100%;
    source {
      height: 100%;
      width: 100%;
    }
  }

  .interoperability-background {
    height: 100%;
    width: 100%;
    display: block;
    position: relative;
    background-image: url('./assets/pics/motion-bg.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    > div {
      position: absolute;
      height: min(30vw, 35vh);
      width: min(30vw, 35vh);
      margin: 30px auto;
      text-align: center;
      line-height: 200px;
      font-weight: bold;
      font-size: 24px;
      border-radius: 50%;
      transition: 1s;
    }
    > div:nth-child(2) {
      > canvas {
        transform: scale(1.1);
      }
    }
    [t-s='0'] {
      transform: none;
    }
    [t-s='1'] {
      transform: translate(var(--t-x), var(--t-y)) rotate(var(--t-r));
    }
    > div:first-child {
      top: 10%;
      left: 10%;
      //background: linear-gradient(to right top, darkmagenta, #61dafb 20%);
      // ball-1
      --t-x: -20%;
      --t-y: -10%;
      --t-r: -20deg;
    }
    > div:nth-child(2) {
      top: 5%;
      left: 70%;
      //background: linear-gradient(to right top, #61dafb 60%, darkmagenta);
      // ball-2
      --t-x: 20%;
      --t-y: 20%;
      --t-r: 30deg;
    }
    > div:nth-child(3) {
      top: 55%;
      left: 20%;
      //background: linear-gradient(to right top, #61dafb 10%, #f6f211 70%, chocolate);
      // ball-3
      --t-x: -20%;
      --t-y: 5%;
      --t-r: 30deg;
    }
    > div:nth-child(4) {
      top: 50%;
      left: 60%;
      //background: linear-gradient(to left top, #61dafb 10%, chartreuse);
      // ball-4
      --t-x: 20%;
      --t-y: 10%;
      --t-r: -20deg;
    }
  }

  .interoperability-m {
    height: 100%;
    width: 100%;
    display: none;
    position: relative;
    background-image: url('./assets/pics/interoperability-m.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .interoperability-title {
    font-family: transducer, sans-serif;
    position: absolute;
    transform: translateY(calc(-1 * var(--navbar-height) + 5vh));
    z-index: 15;
    > div {
      flex-direction: column;
      width: 300px;
      color: white;
      font-size: 60px;
      font-weight: 600;

      > strong {
        padding-left: 1rem;
        color: #1f1f1f;
        font-size: 60px;
        font-weight: 600;
      }
    }
  }
`;

export default function Interoperability() {
  const ref = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const bg = ref.current! as HTMLElement;
    const handleMouseMove = (event: MouseEvent) => {
      bg.style.setProperty('--m-x', (event.pageX / bg.offsetWidth).toString());
      const y = (event.pageY - 124) / bg.offsetHeight;
      if (y > 0 && y < 1) {
        bg.style.setProperty('--m-y', y.toString());
      }
    };
    bg.addEventListener('mousemove', handleMouseMove);

    bg.querySelectorAll('.interoperability-background > div').forEach((el) => {
      const enterFn = _.throttle(() => {
        console.log('handleMouseEnter');
        const tS = el.getAttribute('t-s');
        el.setAttribute('t-s', tS !== '1' ? '1' : '0');
      }, 1000);
      el.addEventListener('mouseenter', () => enterFn());
    });
    return () => {
      bg.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <InteroperabilityWrapper className="interoperability">
      <div ref={ref}>
        <div className="interoperability-background">
          <div>
            <ScatterBall texture="assets/pics/ball-cosmos.png" diameter={412} />
          </div>
          <div>
            <ScatterBall texture="assets/pics/ball-ethereum.png" diameter={376} />
          </div>
          <div>
            <ScatterBall texture="assets/pics/ball-nervos.png" diameter={446} />
          </div>
          <div>
            <ScatterBall texture="assets/pics/ball-more.png" diameter={372} />
          </div>
        </div>
        <div className="interoperability-m" />
        {/*<video id="v0" autoPlay loop muted>*/}
        {/*  <source src="assets/v/interoperability-bg.mp4" type="video/mp4" />*/}
        {/*</video>*/}
      </div>
      <div className="interoperability-title">
        <div>
          <strong>AXON</strong>
          <div>Interoperability</div>
        </div>
      </div>
    </InteroperabilityWrapper>
  );
}
