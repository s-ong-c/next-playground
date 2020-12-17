import * as React from 'react';

import PageTemplate from './PageTemplate';
import media from '../../../styles/media';
import styled from 'styled-components';

const Block = styled(PageTemplate)`
  main {
    height: 100vh;
    ${media.large} {
      width: 1024px;
    }
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    ${media.medium} {
      justify-content: center;
      width: 100%;
    }
  }
`;
const Main = styled.div`
  width: 100%;
  ${media.large} {
    width: 526px;
  }
  ${media.medium} {
    width: 768px;
  }
  ${media.small} {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const Side = styled.div`
  background: yellow;
  width: 100%;
  ${media.medium} {
    display: none;
  }
`;

type LayoutBlockNamespace = {
  Side: typeof Side;
  Main: typeof Main;
};

interface LayoutProps {}
const HalfLayout: React.FC<LayoutProps> & LayoutBlockNamespace = ({
  children,
}) => {
  return (
    <Block>
      <main>{children}</main>
    </Block>
  );
};

HalfLayout.Main = Main;
HalfLayout.Side = Side;

export default HalfLayout;
