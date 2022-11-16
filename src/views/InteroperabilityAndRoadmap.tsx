import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import * as React from 'react';
import styled from 'styled-components';
import { ArrowOutwardBlack, ArrowOutwardLight } from '../components/ArrowOutward';
import { DiscordCard, GithubCard, MediumCard, TwitterCard } from '../components/FindUsCards';
import Interoperability from '../components/Interoperability';
import {
  DiscordLight,
  DiscordDark,
  GithubLight,
  GithubDark,
  MediumLight,
  MediumDark,
  TwitterLight,
  TwitterDark,
} from '../components/Logos';
import Roadmap from '../components/Roadmap';

const InteroperabilityAndRoadmapWrapper = styled.div`
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :before {
    content: '';
    background-color: #4e3188;
    height: var(--navbar-height);
    width: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .join-us {
    height: 25vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-image: url('./assets/pics/join-us-background.png');
    background-size: 100% 100%;
    > div:first-child {
      margin-top: 120px;
      font-family: 'Transducer', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 150%;
    }
    > div:last-child {
      width: 100%;
      margin-top: 80px;
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      > div {
        width: 25%;
      }
      .join-us-link {
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
        :hover {
          color: #000000;
          padding-bottom: 0;
          > div:first-child {
            transform: translate(0, 4px);
          }
          > div:last-child {
            transform: translate(4px, -2px);
          }
        }
      }
    }
  }

  .find-us {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #83d4ce;
    > div:first-child {
      margin-top: 100px;
      font-family: 'Transducer', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 150%;
      color: #ffffff;
    }
    > div:nth-child(2) {
      margin-top: 16px;
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      color: #ffffff;
    }
    > div:last-child {
      margin-top: 50px;
      margin-bottom: 100px;
      width: 80%;
      > div {
        width: 25%;
        margin: 10px;
      }
    }
  }

  .footer {
    height: 10vw;
    width: 100%;
    background: #54b8ec;
    > div:first-child {
      width: 141px;
      margin-left: 81px;
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
    > div:nth-child(2) {
      flex: 1;
      > svg {
        margin: 21px;
      }
    }
    > div:last-child {
      margin-right: 84px;
      > img {
        height: 54px;
      }
    }
  }
`;

export default function InteroperabilityAndRoadmap() {
  return (
    <InteroperabilityAndRoadmapWrapper>
      <Interoperability />
      <Roadmap />
      <div className="join-us">
        <div>Join us on this journey to a multi-chain future!</div>
        <div>
          <div />
          <div>
            <div className="join-us-link">
              <div>Open Docsite</div>
              <div>
                <ArrowOutwardBlack />
              </div>
            </div>
          </div>
          <div>
            <div className="join-us-link">
              <div>Open in Github</div>
              <div>
                <ArrowOutwardBlack />
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
      <div className="find-us">
        <div>Where to find us</div>
        <div>Be a part of our Global Community By Participating in Open Discussions.</div>
        <div>
          <div>
            <DiscordCard />
          </div>
          <div>
            <GithubCard />
          </div>
          <div>
            <MediumCard />
          </div>
          <div>
            <TwitterCard />
          </div>
        </div>
      </div>
      <div className="footer">
        <div>© Axon, Inc. 2022.</div>
        <div>
          <DiscordLight />
          <GithubLight />
          <MediumLight />
          <TwitterLight />
        </div>
        <div>
          <img src="./logo.png" alt="axon" />
        </div>
      </div>
    </InteroperabilityAndRoadmapWrapper>
  );
}
