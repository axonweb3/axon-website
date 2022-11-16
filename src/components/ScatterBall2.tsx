import * as React from 'react';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const positionN = () =>
  [...Array(100)]
    .map((_, i) => {
      const x = i % 10;
      const y = (i - x) / 10;
      return `
        .position:nth-child(${i + 1}) {
          top: ${y * 20}px;
          left: ${x * 20}px;
          // border: 1px solid #eee;
        }

        .position:nth-child(${i + 1}):hover ~ .ball {
          top: ${y * 20 + 10}px;
          left: ${x * 20 + 10}px;
        }
      `;
    })
    .join('');

const ScatterBallWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin: 30px auto;
  border: 2px solid #e4007e;
  text-align: center;
  line-height: 200px;
  font-weight: bold;
  font-size: 24px;
  background: burlywood;
  border-radius: 50%;
  position: absolute;
  // overflow: hidden;
  top: 50%;
  left: 50%;
  // border: 1px solid #000;
  //transform: translate(-50%, -50%);

  .btn {
    position: absolute;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #69a6d8;
    opacity: 0.8;
    border-radius: 50%;
    // box-shadow: 0 0 3px 3px #42a5f5;
    z-index: 1;
    color: #000;
    font-size: 36px;
    transition: color 1s;
    // filter: blur(10px);
  }

  .ball {
    position: absolute;
    width: 130px;
    height: 130px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #00869a;
    // background: #00e2ff;
    border-radius: 50%;
    opacity: 0;
    z-index: 0;
    filter: blur(10px);
    transition: left 0.1s ease-in, top 0.1s ease-out, opacity 0s;
    mix-blend-mode: lighten;
  }

  .position {
    position: absolute;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    cursor: pointer;
    z-index: 2;
    // border: 1px solid #eee;
  }

  :hover .ball {
    opacity: 0.78;
  }

  .position:hover ~ .btn {
    // color: #fff;
  }

  ${positionN()}
`;

export default function ScatterBall({ children }: PropsWithChildren) {
  return (
    <ScatterBallWrapper>
      {[...Array(100)].map((_, i) => (
        <div className="position" key={i} />
      ))}
      <div className="ball" />
      <div className="btn">{children}</div>
    </ScatterBallWrapper>
  );
}
