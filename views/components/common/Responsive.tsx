import React from 'react';
import { mediaQuery } from '../../../styles/media';
import styled from 'styled-components';

export type MainResponsiveProps = {
  className?: string;
  children: React.ReactNode;
};

function MainResponsive({ className, children }: MainResponsiveProps) {
  return <Block className={className}>{children}</Block>;
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(1919)} {
    width: 1376px;
  }
  ${mediaQuery(1440)} {
    width: 1280px;
  }
  ${mediaQuery(1312)} {
    width: 912px;
  }
  ${mediaQuery(944)} {
    width: 100%;
  }
  ${mediaQuery(767)} {
    width: 100%;
  }
`;

export default MainResponsive;
