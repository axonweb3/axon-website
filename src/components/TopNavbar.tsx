import TripOriginIcon from '@mui/icons-material/TripOrigin';
import * as React from 'react';
import styled from 'styled-components';
import { ArrowOutwardBlack, ArrowOutwardLight } from './ArrowOutward';

const TopNavbarWrapper = styled.div`
  height: var(--navbar-height);
  width: 100%;
  font-family: 'Montserrat', serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid #ffffff 1px;
  z-index: 10;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .top-left {
    height: 100%;
    width: 300px;

    > div {
      width: 100%;
      border-right: solid #ffffff 1px;

      > img {
        height: 54px;
      }
    }
  }

  .top-middle {
    width: 100%;
    flex: 1;

    > div {
      height: 100%;
      color: #ffffff;

      > a {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        padding: 36px;
        cursor: default;
        :hover {
          text-decoration: underline #61dafb;
        }
      }
    }
  }

  .top-right {
    height: 100%;
    width: 300px;

    > div {
      height: 54px;
      width: 100%;
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
      font-style: normal;
      line-height: 150%;
      border-left: solid #ffffff 1px;
    }
    .top-link {
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
  }
`;

interface TopNavbarProps {
  toHome: () => void;
  toFeatures: () => void;
  toInteroperability: () => void;
  toRoadmap: () => void;
}

export default function TopNavbar(props: TopNavbarProps) {
  const { toHome, toFeatures, toInteroperability, toRoadmap } = props;

  return (
    <TopNavbarWrapper>
      <div className="top-left">
        <div>
          <img src="./logo.png" alt="logo" />
        </div>
      </div>
      <div className="top-middle">
        <div>
          <a onClick={toHome}>Home</a>
          <TripOriginIcon sx={{ fontSize: '10px' }} />
          <a onClick={toFeatures}>Features</a>
          <TripOriginIcon sx={{ fontSize: '10px' }} />
          <a onClick={toInteroperability}>Interoperability</a>
          <TripOriginIcon sx={{ fontSize: '10px' }} />
          <a onClick={toRoadmap}>Roadmap</a>
        </div>
      </div>
      <div className="top-right">
        <div>
          <div className="top-link">
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
      </div>
    </TopNavbarWrapper>
  );
}
