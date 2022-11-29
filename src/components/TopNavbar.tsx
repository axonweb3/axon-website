import CloseIcon from '@mui/icons-material/Close';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { SwipeableDrawer } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import styled from 'styled-components';
import { ArrowOutwardBlack, ArrowOutwardLight } from './ArrowOutward';

const TopNavbarWrapper = styled.div`
  height: var(--navbar-height);
  width: 100%;
  font-family: 'Montserrat', serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
        width: 190px;
        text-align: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        padding: 8px;
        cursor: default;
        transition: letter-spacing 0.6s ease;
        :hover {
          letter-spacing: 0.2em;
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
      border-bottom-width: 2px;
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
        letter-spacing: 0.2em;
        //padding-bottom: 0;
        .light {
          display: none;
        }
        .dark {
          display: block;
        }
        > div:first-child {
          //transform: translate(0, 4px);
        }
        > div:last-child {
          transform: translate(4px, -2px);
        }
      }
    }
  }

  .navbar-toggle {
    display: none;
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
  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);

  const doAndCloseDrawer = (toFunc: () => void) => {
    return () => {
      setTimeout(toFunc, 0);
      setShowDrawer(false);
    };
  };

  return (
    <TopNavbarWrapper className="top-nav-bar">
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
      <div className="navbar-toggle">
        <button
          aria-label="Navigation bar toggle"
          className="navbar__toggle clean-btn"
          type="button"
          onClick={() => setShowDrawer(true)}
        >
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
            <line x1="1" y1="1" x2="27" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="7" x2="27" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="13" x2="27" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <SwipeableDrawer
          anchor="right"
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          onOpen={() => setShowDrawer(true)}
          PaperProps={{
            sx: { width: '70%', backgroundColor: '#4e3188' },
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '2rem', color: 'white' }}>
            <CloseIcon onClick={() => setShowDrawer(false)} />
          </div>
          <div style={{ padding: '120px 50px' }}>
            <Typography className="navbar-menu-item" sx={{ p: 2, color: 'white' }} onClick={doAndCloseDrawer(toHome)}>
              Home
            </Typography>
            <Typography
              className="navbar-menu-item"
              sx={{ p: 2, color: 'white' }}
              onClick={doAndCloseDrawer(toFeatures)}
            >
              Features
            </Typography>
            <Typography
              className="navbar-menu-item"
              sx={{ p: 2, color: 'white' }}
              onClick={doAndCloseDrawer(toInteroperability)}
            >
              Interoperability
            </Typography>
            <Typography
              className="navbar-menu-item"
              sx={{ p: 2, color: 'white' }}
              onClick={doAndCloseDrawer(toRoadmap)}
            >
              Roadmap
            </Typography>
          </div>
        </SwipeableDrawer>
      </div>
    </TopNavbarWrapper>
  );
}
