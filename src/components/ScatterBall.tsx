import Phaser from 'phaser';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { BallScene } from '../scenes/BallScene';

const ScatterBallWrapper = styled.canvas`
  height: min(30vw, 35vh);
  width: min(30vw, 35vh);
  z-index: 3;
  position: absolute;
  margin: 0;
`;

export default function ScatterBall(props: { texture: string; diameter: number }) {
  const ref = useRef(null);
  const { texture, diameter } = props;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const canvas = ref.current! as HTMLCanvasElement;
    const width = document.documentElement.clientWidth * 0.2;
    const height = width;

    new Phaser.Game({
      width,
      height,
      type: Phaser.CANVAS,
      canvas,
      scene: [new BallScene(texture, diameter)],
      // backgroundColor: 'transparent',
      render: {
        transparent: true,
      },
    });
  });
  return <ScatterBallWrapper ref={ref}></ScatterBallWrapper>;
}
