import Phaser from 'phaser';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MeshGradientScene } from '../scenes/MeshGradientScene';

const MeshGradientWrapper = styled.canvas`
  height: 100vh;
  width: 100%;
  z-index: -1;
  position: absolute;
  filter: blur(150px);
  margin: 0;
`;

export default function MeshGradient() {
  const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const canvas = ref.current! as HTMLCanvasElement;

    new Phaser.Game({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      type: Phaser.CANVAS,
      canvas,
      scene: [MeshGradientScene],
      backgroundColor: '#83d4ce',
    });
  });
  return <MeshGradientWrapper ref={ref}></MeshGradientWrapper>;
}
