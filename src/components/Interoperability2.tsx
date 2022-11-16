import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScatterBall from './ScatterBall';

const InteroperabilityWrapper = styled.div`
  height: 56vw;
  width: 100%;
  background-color: #b7c1e0;
  > div:first-child {
    height: 100%;
    width: 100%;
    display: block;
    position: relative;
    :before {
      content: '';
      position: absolute;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      z-index: 12;
      left: calc(var(--m-x) * 100%);
      top: calc(var(--m-y) * 100%);
      transform: translate(-50%, -50%);
      //-webkit-mask: radial-gradient(
      //  circle at calc(var(--m-x) * 100%) calc(var(--m-y) * 100%),
      //  transparent 50px,
      //  #000000 51px
      //);
      -webkit-mask: radial-gradient(
        circle at calc(var(--m-x) * 100%) calc(var(--m-y) * 100%),
        transparent 50px,
        #000000 51px
      );
      background: rgba(0, 0, 0, 0.3);
      //background: radial-gradient(
      //  circle at calc(var(--m-x) * 100%) calc(var(--m-y) * 100%),
      //  transparent 50px,
      //  rgba(0, 0, 0, 0.5) 51px
      //);
      //background: radial-gradient(circle at center, transparent 50px, rgba(0, 0, 0, 0.5) 51px);
      backdrop-filter: blur(-10px);
    }
  }

  .interoperability-background {
    height: 100%;
    width: 100%;
    display: block;
    position: relative;
    > div {
      position: absolute;
      height: 20vw;
      width: 20vw;
      margin: 30px auto;
      text-align: center;
      line-height: 200px;
      font-weight: bold;
      font-size: 24px;
      border-radius: 50%;
    }
    > div:first-child {
      top: 10%;
      left: 10%;
      background: linear-gradient(to right top, darkmagenta, #61dafb 20%);
    }
    > div:nth-child(2) {
      top: 5%;
      left: 70%;
      background: linear-gradient(to right top, #61dafb 60%, darkmagenta);
    }
    > div:nth-child(3) {
      top: 55%;
      left: 20%;
      background: linear-gradient(to right top, #61dafb 10%, #f6f211 70%, chocolate);
    }
    > div:nth-child(4) {
      top: 50%;
      left: 60%;
      background: linear-gradient(to left top, #61dafb 10%, chartreuse);
    }
  }

  .interoperability {
    position: absolute;
    z-index: 15;
    > div {
      flex-direction: column;
      width: 300px;
      color: white;
      font-size: 48px;
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
    const bg = ref.current! as HTMLElement;
    const handleMouseMove = (event: MouseEvent) => {
      console.log(event);
      bg.style.setProperty('--m-x', (event.pageX / bg.offsetWidth).toString());
      const y = (event.pageY - 124) / bg.offsetHeight;
      if (y > 0 && y < 1) {
        bg.style.setProperty('--m-y', y.toString());
      }
    };
    bg.addEventListener('mousemove', handleMouseMove);
    return () => {
      bg.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <InteroperabilityWrapper>
      <div ref={ref}>
        <div className="interoperability-background">
          <ScatterBall>Cosmos</ScatterBall>
          <ScatterBall>Ethereum</ScatterBall>
          <ScatterBall>Nervos</ScatterBall>
          <ScatterBall>More</ScatterBall>
        </div>
      </div>
      <div className="interoperability">
        <div>
          <div>Interoperability</div>
          <div>in</div>
          <strong>AXON</strong>
        </div>
      </div>
    </InteroperabilityWrapper>
  );
}
