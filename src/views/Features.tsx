import * as React from 'react';
import styled from 'styled-components';
import { Circle_01, Circle_02, Circle_03, Circle_04 } from '../components/CircleNumber';

const FeaturesWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  z-index: 2;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .features {
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
        font-family: transducer, sans-serif;
        padding-top: 100px;
        padding-bottom: 37px;
        font-weight: 600;
        font-size: 48px;
        line-height: 150%;
        color: #54b8ec;
      }
      .features-list {
        min-height: 225px;
        img {
          width: 128px;
          transition: 1s;
          opacity: 0.5;
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
              transform: scale(1.5);
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
      height: 100px;
      width: 100%;
      color: #1f1f1f;
      padding-top: 40px;
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
          <div className="features-title">
            Features
            {/*<svg width="229" height="36" viewBox="0 0 229 36" fill="none">*/}
            {/*  <path*/}
            {/*    d="M0.9505 28.376C0.9505 31.112 0.9505 33.08 0.9025 35H8.2465C8.1985 33.032 8.1985 31.112 8.1985 28.376V21.848H10.7905C14.1025 21.848 21.5905 21.848 24.5185 21.896V15.752H8.1985V7.16H13.7185C18.7585 7.16 23.2705 7.16 26.6305 7.208V0.919998H0.9025C0.9505 2.696 0.9505 4.616 0.9505 7.112V28.376ZM42.5241 35.576C52.6041 35.576 55.6281 32.792 55.6281 25.4L48.6201 25.208C48.6201 28.28 47.4681 29.576 42.5721 29.576C37.9641 29.576 36.2841 28.232 35.9961 22.712H55.6281V20.264C55.6281 9.56 51.9801 6.392 42.3321 6.392C32.6361 6.392 28.7961 9.56 28.7961 20.264V21.704C28.7961 32.408 32.6361 35.576 42.5241 35.576ZM42.3321 11.72C46.7481 11.72 48.0921 12.872 48.2841 18.008H36.0441C36.3801 12.872 38.0601 11.72 42.3321 11.72ZM70.153 35.576C75.241 35.576 78.073 34.04 79.609 31.304L79.657 35H86.185C86.137 31.208 86.137 28.76 86.137 25.88C86.137 21.08 86.185 19.64 86.185 15.848C86.185 9.368 83.401 6.392 73.417 6.392C64.153 6.392 61.129 9.08 61.225 15.608L67.801 15.752C67.801 13.112 68.521 12.2 73.177 12.2C77.881 12.2 79.081 13.496 79.081 17.48V20.504C77.497 18.584 74.761 17.72 70.249 17.72C62.617 17.72 59.929 20.36 59.929 26.744C59.929 33.08 62.425 35.576 70.153 35.576ZM73.177 30.296C68.617 30.296 67.177 29.384 67.177 26.456C67.177 23.48 68.185 22.376 73.417 22.376C77.977 22.376 79.273 23.432 79.273 25.592V26.504C79.273 29.192 77.977 30.296 73.177 30.296ZM94.2509 15.704C94.2509 20.024 94.2029 24.248 94.2029 27.08C94.2029 33.272 96.3629 35.192 103.995 35.192C105.723 35.192 107.067 35.144 108.891 35L108.843 29C107.499 29.048 106.779 29.096 105.771 29.096C101.835 29.096 101.307 28.424 101.307 25.112V12.968H108.843V6.968H101.307C101.307 4.664 101.307 3.08 101.355 1.448L94.2029 1.64C94.2509 3.128 94.2509 5 94.2509 6.968H89.9789V12.968H94.2509V15.704ZM113.765 17.816C113.765 20.936 113.717 24.728 113.717 26.216C113.717 32.888 116.261 35.576 122.837 35.576C127.685 35.576 130.757 34.088 132.485 30.152L132.533 35H139.301C139.253 32.936 139.253 31.4 139.253 29V13.4C139.253 10.712 139.253 9.176 139.301 6.968H132.101C132.149 9.128 132.149 10.52 132.149 13.16V21.176C132.149 27.8 130.613 29.048 126.341 29.048C122.021 29.048 120.821 27.8 120.821 22.424V12.632C120.821 10.232 120.869 8.936 120.869 6.968H113.717C113.765 9.176 113.765 10.664 113.765 12.728V17.816ZM146.254 28.52C146.254 31.256 146.254 32.744 146.206 35H153.406C153.358 32.792 153.358 31.448 153.358 28.76V20.984C153.358 14.072 154.942 12.872 158.254 12.872C161.518 12.872 162.286 13.784 162.286 17V19.64L169.102 19.544C169.15 17.96 169.15 16.184 169.15 14.792C169.15 8.456 167.23 6.392 161.518 6.392C157.246 6.392 154.558 8.12 153.022 11.768L152.974 6.968H146.206C146.254 9.032 146.254 10.568 146.254 12.92V28.52ZM186.337 35.576C196.417 35.576 199.441 32.792 199.441 25.4L192.433 25.208C192.433 28.28 191.281 29.576 186.385 29.576C181.777 29.576 180.097 28.232 179.809 22.712H199.441V20.264C199.441 9.56 195.793 6.392 186.145 6.392C176.449 6.392 172.609 9.56 172.609 20.264V21.704C172.609 32.408 176.449 35.576 186.337 35.576ZM186.145 11.72C190.561 11.72 191.905 12.872 192.097 18.008H179.857C180.193 12.872 181.873 11.72 186.145 11.72ZM215.982 35.576C225.726 35.576 228.318 33.224 228.318 26.648C228.318 21.656 226.638 19.4 216.894 18.056C211.182 17.24 210.318 16.52 210.318 14.6C210.318 12.44 211.518 11.672 215.022 11.672C219.438 11.672 220.494 12.536 220.494 14.888V15.56L227.31 15.416C227.31 8.888 225.342 6.392 215.166 6.392C206.334 6.392 203.454 8.84 203.454 14.936C203.454 20.456 205.278 22.184 213.822 23.528C220.446 24.536 221.166 25.496 221.166 27.224C221.166 29.336 220.11 30.248 216.078 30.248C210.846 30.248 209.694 29.384 209.694 26.408V25.784L202.974 25.928C202.974 33.656 205.566 35.576 215.982 35.576Z"*/}
            {/*    fill="#54B8EC"*/}
            {/*  />*/}
            {/*</svg>*/}
          </div>
          <div className="features-list features-list-item-1">
            <div>
              <Circle_01 />
            </div>
            <div>Universal Abstraction</div>
            <div>
              <img src="./assets/pics/features-universal-abstraction.png" alt="Universal Abstraction" />
            </div>
            <div>
              Axon’s abstraction capacity is derived from the universal CKB, which allows for the construction of any
              account model and virtual machine instruction. Devs on Axon can load and verify cells through a
              precompiled contract on CKB-VM, which makes the development of multi-chain, contract wallet, and other
              applications much easier.
            </div>
          </div>
          <div className="features-list features-list-item-2">
            <div>
              <Circle_02 />
            </div>
            <div>Developer-Friendly Design</div>
            <div>
              <img src="./assets/pics/features-developer-friendly-design.png" alt="Developer-Friendly Design" />
            </div>
            <div>
              Axon’s full-fledged toolkit allows web3 developers to build dApps right away. The all-in-one client can be
              installed in less than 10 minutes.
            </div>
          </div>
          <div className="features-list features-list-item-3">
            <div>
              <Circle_03 />
            </div>
            <div>Native Interoperability</div>
            <div>
              <img src="./assets/pics/features-native-interoperability.png" alt="Native InteroperabilityAndRoadmap" />
            </div>
            <div>
              More than 100% EVM compatible, Axon presents a new paradigm with native cross-chain capacity that supports
              all the encryption algorithms used by mainstream crypto wallets.
            </div>
          </div>
          <div className="features-list features-list-item-4">
            <div>
              <Circle_04 />
            </div>
            <div>High Performance</div>
            <div>
              <img src="./assets/pics/features-high-performance.png" alt="High Performance" />
            </div>
            <div>
              Axon‘s optimized Byzantine Fault Tolerance algorithm enables over 3000 TPS (tested 1000+ TPS on Uniswap
              V3) with fast transaction finality.
            </div>
          </div>
        </div>
        <div className="features-scroll"></div>
      </div>
    </FeaturesWrapper>
  );
}
