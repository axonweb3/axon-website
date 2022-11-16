import * as React from 'react';
import styled from 'styled-components';
import { Circle_01, Circle_02, Circle_03, Circle_04 } from '../components/CircleNumber';

const FeaturesWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  width: 100%;
  z-index: 2;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .features {
    min-height: 100vh;
    flex-direction: column;
    :before {
      content: '';
      background-color: #4e3188;
      height: var(--navbar-height);
      width: 100%;
    }
    .features-main {
      flex-direction: column;
      width: calc(100% - 310px);
      > div {
        width: 100%;
        border-bottom: 2px solid #54b8ec;
      }
      .features-title {
        padding-top: 91px;
        padding-bottom: 37px;
        font-weight: 600;
        font-size: 48px;
        line-height: 150%;
        color: #54b8ec;
      }
      .features-list {
        height: 225px;
        img {
          transition: 1s;
          transform: scale(0.5);
          opacity: 0.7;
        }
        > div {
          height: 100%;
        }
        > div:first-child {
          width: 10%;
        }
        > div:nth-child(2) {
          width: 25%;
          font-family: 'Montserrat', serif;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 150%;
        }
        > div:nth-child(3) {
          width: 30%;
        }
        > div:nth-child(4) {
          width: 45%;
          font-family: 'Montserrat', serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
        }
        :hover {
          background-color: #4e3188;
          > div:first-child {
            path {
              fill: url(#number_linear);
            }
            circle {
              stroke: url(#circle_linear);
            }
          }
          > div:nth-child(2) {
            color: #54b8ec;
          }
          > div:nth-child(3) {
            img {
              transform: scale(0.75);
              opacity: 1;
            }
          }
          > div:nth-child(4) {
            color: #ffffff;
          }
        }
      }
    }
    .features-scroll {
      font-family: 'Montserrat', serif;
      height: 56px;
      width: 100%;
      color: #1f1f1f;
      margin-top: auto;
      padding-bottom: 40px;
      font-size: 13px;
      font-weight: 400;
      line-height: 150%;
    }
  }
`;

export default function Features() {
  return (
    <FeaturesWrapper>
      <div className="features">
        <div className="features-main">
          <div className="features-title">Features</div>
          <div className="features-list">
            <div>
              <Circle_01 />
            </div>
            <div>Universal Abstraction</div>
            <div>
              <img src="./assets/pics/universal-abstraction.png" alt="Universal Abstraction" />
            </div>
            <div>
              Axon’s abstraction capacity is derived from the universal CKB, which allows for the construction of any
              account model and virtual machine instruction. Devs on Axon can load and verify cells through a
              precompiled contract on CKB-VM, which makes the development of multi-chain, contract wallet, and other
              applications much easier.
            </div>
          </div>
          <div className="features-list">
            <div>
              <Circle_02 />
            </div>
            <div>Developer-Friendly Design</div>
            <div>
              <img src="./assets/pics/developer-friendly-design.png" alt="Developer-Friendly Design" />
            </div>
            <div>
              Axon’s full-fledged toolkit allows web3 developers to build dApps right away. The all-in-one client can be
              installed in less than 10 minutes.
            </div>
          </div>
          <div className="features-list">
            <div>
              <Circle_03 />
            </div>
            <div>Native Interoperability</div>
            <div>
              <img src="./assets/pics/native-interoperability.png" alt="Native InteroperabilityAndRoadmap" />
            </div>
            <div>
              More than 100% EVM compatible, Axon presents a new paradigm with native cross-chain capacity that supports
              all the encryption algorithms used by mainstream crypto wallets.
            </div>
          </div>
          <div className="features-list">
            <div>
              <Circle_04 />
            </div>
            <div>High Performance</div>
            <div>
              <img src="./assets/pics/high-performance.png" alt="High Performance" />
            </div>
            <div>
              Axon‘s optimized Byzantine Fault Tolerance algorithm enables over 3000 TPS (tested 1000+ TPS on Uniswap
              V3) with fast transaction finality.
            </div>
          </div>
        </div>
        <div className="features-scroll">SCROLL FOR MORE</div>
      </div>
    </FeaturesWrapper>
  );
}
