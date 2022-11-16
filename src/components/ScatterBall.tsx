import * as React from 'react';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const ScatterBallWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 30px auto;
  border: none;
  text-align: center;
  line-height: 200px;
  font-weight: bold;
  font-size: 24px;
  border-radius: 50%;

  //filter: blur(10px);
  background-clip: content-box;
  background-size: 200% 100%;
  animation: change 5s infinite linear;

  :before {
    content: '';
    position: absolute;
    left: 50%;
    width: 0;
    height: 100%;
    border: 3px solid #ffffff;
    border-left: none;
    border-right: none;
    transition: all 0.8s;
    box-sizing: border-box;
  }

  :hover :before {
    width: 100%;
    left: 0;
  }
`;

export default function ScatterBall({ children }: PropsWithChildren) {
  return <ScatterBallWrapper className="scatter-ball">{children}</ScatterBallWrapper>;
}
