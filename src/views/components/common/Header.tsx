import * as React from 'react';

import styled, { css } from 'styled-components';

import Button from './Button';
import HeaderLogo from './HeaderLogo';
import media from '../../../styles/media';

const HeaderBlock = styled.div<{ floating: boolean }>`
  width: 100%;
  > .wrapper {
    width: ${media.xlarge};
    height: 6rem;
    margin: 0rem auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.large} {
      width: 1024px;
    }
    ${media.medium} {
      width: 100%;
      .write-button {
        display: none;
      }
      .search {
        display: block;
      }
    }
    ${media.small} {
      height: 3.5rem;

      .login-button {
        font-size: 0.875rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
    }
    .logged-in {
      position: relative;
      display: flex;
      align-items: center;
    }
  }

  ${(props) =>
    props.floating &&
    css`
      position: fixed;
      top: 0;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.08);
    `}
`;
const Placeholder = styled.div`
  width: 100%;
  height: 4rem;
`;

interface HeaderProps {
  floating: boolean;
  floatingMargin: number;
}

function Header({ floating, floatingMargin }: HeaderProps): React.ReactElement {
  return (
    <>
      <HeaderBlock
        floating={floating}
        style={{ marginTop: floating ? floatingMargin : 0 }}
        data-testid="Header"
      >
        <div className="wrapper">
          <div className="brand">
            <HeaderLogo />
          </div>
          <div className="right">
            <Button className="login-button" color="blue" onClick={() => {}}>
              Get Started
            </Button>
          </div>
        </div>
      </HeaderBlock>
      {floating && <Placeholder />}
    </>
  );
}

export default Header;
