import * as React from 'react';
import styled from 'styled-components';
import { Border_01, Border_03, Border_kink_01, Border_kink_02, Border_kink_03, Line_h_01, Line_v_01 } from './Border';

const RoadmapWrapper = styled.div`
  height: 75vw;
  width: 100%;
  background-color: #4418bb;
  background-image: url('./assets/pics/roadmap-background.png');
  background-size: 100% 100%;
  flex-direction: column;
  justify-content: flex-start !important;
  color: #ffffff;

  .roadmap-title {
    font-family: 'Transducer', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 150%;
    margin-top: 100px;
    margin-bottom: 70px;
  }

  .roadmap-row {
    align-items: flex-start;
    height: 240px;

    .box-disc {
      width: 379px;
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;

      > div {
        width: 360px;
        font-size: 16px;
      }
    }

    .box-age {
      width: 172px;

      > div {
        text-align: center;
        font-family: 'Transducer', serif;
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 150%;
        width: 160px;
      }
    }

    .box {
      margin-left: 27.5px;
      margin-right: 27.5px;

      > svg {
      }

      > div {
        position: absolute;
        margin: 0 auto;
        font-weight: 500;
        line-height: 150%;
        padding-left: 40px;
        padding-right: 40px;
      }
    }

    .line-h-1 {
      position: absolute;
      transform: translate(-113px, 32px);
    }

    .line-h-2 {
      position: absolute;
      transform: translate(114px, 32px);
    }

    .line-h-3 {
      position: absolute;
      transform: translate(-113px, 32px);
    }

    .line-v {
      position: absolute;
      transform: translate(0, 69px);
    }
  }

  .md {
    flex-direction: column;
    align-items: flex-start;

    > span {
      padding-left: 4px;

      ::before {
        content: '•⠀';
        display: inline-block;
      }
    }
  }
`;

export default function Roadmap() {
  return (
    <RoadmapWrapper className="roadmap">
      <div className="roadmap-title">Roadmap</div>
      <div className="roadmap-row">
        <div className="box box-disc">
          <Border_kink_01 />
          <div>The birth of Axon, as Nervos` sidechain.</div>
        </div>
        <div className="line-h-1">
          <Line_h_01 />
        </div>
        <div className="box box-age">
          <Border_01 />
          <div>2021</div>
        </div>
        <div className="box box-disc"></div>
        <div className="line-v">
          <Line_v_01 />
        </div>
      </div>
      <div className="roadmap-row">
        <div className="box box-disc"></div>
        <div className="box box-age">
          <Border_01 />
          <div>2022</div>
        </div>
        <div className="line-h-2">
          <Line_h_01 />
        </div>
        <div className="box box-disc">
          <Border_kink_02 />
          <div className="md">
            Improving Axon’s Native cross-chain communication.
            <span>100% EVM compatibility</span>
            <span>Compatibility with Inter‐Blockchain Communication (IBC) protocol (almost there!)</span>
          </div>
        </div>
        <div className="line-v">
          <Line_v_01 />
        </div>
      </div>
      <div className="roadmap-row">
        <div className="box box-disc">
          <Border_kink_03 />
          <div className="md">
            <span>Make web3 more accessible to devs and users</span>
            <span>Provide the infrastructure for more DApp use cases</span>
            <span>Support more cross-chain protocols</span>
          </div>
        </div>
        <div className="line-h-3">
          <Line_h_01 />
        </div>
        <div className="box box-age">
          <Border_03 />
          <div>2023 & future</div>
        </div>
        <div className="box box-disc"></div>
      </div>
    </RoadmapWrapper>
  );
}
