import * as React from 'react';

import palette, { ColorType, colorMap } from '../../../styles/palette';
import styled, { css } from 'styled-components';

import { Route } from 'react-router-dom';

type ButtonStyleProps = {
  color: ColorType;
  inline: boolean;
  isRadius: boolean;
};
const ButtonBlock = styled.button<ButtonStyleProps>`
  width: 100%;
  display: inline-flex;
  align-items: center;
  height: 3rem;
  padding: 0;
  font-size: 1rem;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
  background: ${(props) => colorMap[props.color].background};
  color: ${(props) => colorMap[props.color].color};
  &:disabled {
    background-color: ${palette.primaryLight};
    cursor: not-allowed;
    color: ${palette.typo6};
  }
  &:focus {
    background-color: ${palette.primaryLight};
  }
  padding-top: 0;
  padding-bottom: 0;
  ${(props) =>
    props.isRadius &&
    css`
      border-radius: 4px;
    `}
`;
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  color?: ColorType;
  inline?: boolean;
  isRadius?: boolean;
  to?: string;
}

function Button({
  children,
  ref,
  to,
  color = 'transparent',
  isRadius,
  inline,
  ...rest
}: ButtonProps) {
  const htmlProps = rest as any;
  if (to) {
    return (
      <Route
        render={({ history }) => (
          <ButtonBlock
            onClick={(e) => {
              e.preventDefault();
              history.push(to);
            }}
            color={color}
            isRadius={isRadius}
            inline={inline}
            {...htmlProps}
          >
            {children}
          </ButtonBlock>
        )}
      />
    );
  }

  return (
    <ButtonBlock
      color={color}
      isRadius={isRadius}
      inline={inline}
      {...htmlProps}
    >
      {children}
    </ButtonBlock>
  );
}

export default Button;
