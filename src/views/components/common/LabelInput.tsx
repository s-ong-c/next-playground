import React, { useCallback, useEffect, useState } from 'react';
import palette, { colorMap } from '../../../styles/palette';
import styled, { css } from 'styled-components';

import { MdLockOutline } from 'react-icons/md';

type LabelInput = {
  focus: boolean;
  width: InputSize;
  color: string;
};
const LabelInputBlock = styled.div<LabelInput>`
  padding-bottom: 0.5em;
  label,
  input {
    display: block;
    line-height: 1;
    color: ${palette.typo1};
    span {
      color: ${palette.error};
    }
  }
  label {
    display: flex;
    font-weight: bold;
    font-size: 15px;
    height: 17px;
    margin-bottom: 0.5rem;
    transition: all 0.125s ease-in;
  }
  input {
    text-indent: 1rem;
    font-size: 16px;
    font-weight: 500;
    border: none;
    outline: none;
    width: 100%;
    transition: all 0.125s ease-in;
    &::placeholder {
      color: ${(props) => colorMap[props.color].background};
    }
    &:disabled {
      background: white;
      color: ${palette.typo2};
      cursor: not-allowed;
    }
  }
`;

const InputWrapper = styled.div<LabelInput>`
  border: 1px solid ${(props) => colorMap[props.color].background};
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: transparent;
  ${(props) =>
    props.focus &&
    css`
      border: 1px solid ${colorMap[props.color].background};
    `}
  svg {
    font-size: 1.5rem;
    color: ${palette.typo2};
  }
  input {
    color: ${palette.typo1};
    font-weight: 400;
    border-radius: 4px;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
`;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type InputSize = 'SMALL' | 'DEFAULT' | undefined;
export interface LabelInputProps extends InputProps {
  label?: string;
  placeholder: string;
  required?: boolean;
  name?: string;
  value?: string | number;
  comment?: string;
  width?: InputSize;
  type?: string;
  onChange?: React.ChangeEventHandler;
  errorComment?: string;
  isError?: boolean;
  color?: string;
}
function LabelInput({
  label,
  name,
  width = 'DEFAULT',
  value,
  placeholder,
  comment,
  required,
  onChange,
  disabled,
  type,
  isError,
  errorComment,
  color = 'transparent',
  ...rest
}: LabelInputProps) {
  const [focus, setFocus] = useState(false);
  const [, setErrorCheck] = useState(false);
  useEffect(() => {
    if (isError) {
      setFocus(true);
    }
  }, [isError]);
  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);
  const onBlur = useCallback(() => {
    if (!isError) {
      setFocus(false);
      setErrorCheck(false);
    }
    if (isError) {
      setErrorCheck(true);
    }
  }, [isError]);
  useEffect(() => {}, [value, placeholder]);

  return (
    <>
      <LabelInputBlock focus={focus} width={width} color={color}>
        {label && (
          <label>
            {label} {required && <span>*</span>}
            {comment && <span className="comment"> {comment}</span>}
          </label>
        )}

        <InputWrapper focus={focus} width={width} color={color}>
          <input
            type={type}
            name={name}
            autoComplete="off"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            {...rest}
          />
          {disabled && <MdLockOutline />}
        </InputWrapper>
      </LabelInputBlock>
    </>
  );
}

export default LabelInput;
