import * as React from 'react';
import styled from 'styled-components';
import { ArrowOutwardLight, ArrowOutwardBlack } from '../components/ArrowOutward';
import MeshGradient from '../components/MeshGradient';

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  z-index: 1;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mesh-gradient-back {
    height: 100vh;
    width: 100%;
    z-index: -2;
    background-color: #83d4ce;
    position: absolute;
    margin: 0;
  }

  .home {
    height: 100vh;
    width: 100%;
    flex-direction: column;
    :before {
      content: '';
      height: var(--navbar-height);
      width: 100%;
    }

    .home-main {
      font-family: 'Transducer', serif;
      width: 100%;
      flex: 1;

      > div {
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

    .home-bottom {
      height: 132px;
      width: 100%;
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      border-top: solid #ffffff 1px;
      border-bottom: solid #ffffff 1px;

      > div {
        height: 54px;
        width: 25%;
        color: white;
        font-size: 18px;
        font-weight: 700;
      }

      > div:nth-child(2) {
        border-right: solid #ffffff 1px;
      }
    }

    .home-scroll {
      height: 56px;
      width: 100%;
      font-family: 'Montserrat', serif;
      color: white;
      font-size: 13px;
      font-weight: 400;
      line-height: 150%;
    }
  }

  .home-link {
    border-bottom-style: solid;
    border-bottom-width: 0.3px;
    padding-bottom: 1px;
    > div {
      white-space: nowrap;
      transition: 0.6s;
    }
    > div:last-child {
      margin-left: 10px;
    }
    .light {
      display: block;
    }
    .dark {
      display: none;
    }
    :hover {
      color: #000000;
      padding-bottom: 0;
      .light {
        display: none;
      }
      .dark {
        display: block;
      }
      > div:first-child {
        transform: translate(0, 4px);
      }
      > div:last-child {
        transform: translate(4px, -2px);
      }
    }
  }

  @media (max-width: 996px) {
    .home {
      color: red;
    }
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <div className="mesh-gradient-back"></div>
      <MeshGradient />
      <div className="home">
        <div className="home-main">
          <div>
            Start Your Web3 Future in <strong>10 Minutes</strong>
          </div>
        </div>
        <div className="home-bottom">
          <div />
          <div>
            <div className="home-link">
              <div>Open Docsite</div>
              <div>
                <div className="light">
                  <ArrowOutwardLight />
                </div>
                <div className="dark">
                  <ArrowOutwardBlack />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="home-link">
              <div>Open in Github</div>
              <div>
                <div className="light">
                  <ArrowOutwardLight />
                </div>
                <div className="dark">
                  <ArrowOutwardBlack />
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
        <div className="home-scroll">SCROLL FOR MORE</div>
      </div>
    </HomeWrapper>
  );
}
