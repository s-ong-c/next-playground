import * as React from 'react';

import Symbol from '../../../static/svg/symbol.svg';
import palette from '../../../styles/palette';
import styled from 'styled-components';

const HeaderLogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${palette.typo2};
  font-size: 1.3125rem;
  text-decoration: none;
  svg {
    height: 2.5rem;
    width: 2rem;
  }
`;

function HeaderLogo() {
  return (
    <HeaderLogoBlock>
      <Symbol data-testid="songc-logo" />
    </HeaderLogoBlock>
  );
}

export default HeaderLogo;
