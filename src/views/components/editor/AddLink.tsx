import * as React from 'react';

import Button from '../common/Button';
import { MdDelete } from 'react-icons/md';
import OutsideClickHandler from 'react-outside-click-handler';
import palette from '../../../styles/palette';
import styled from 'styled-components';
import useInput from '../../../utils/hooks/useInput';

const AddLinkBlock = styled.div`
  position: absolute;
  & > .wrapper {
    margin-top: 1rem;
    width: 20rem;
    background: ${palette.typo2};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    form {
      width: 100%;
      display: flex;
      align-items: center;
      background: ${palette.typo2};
      input {
        flex: 1;
        border: none;
        outline: none;
        background: ${palette.typo2};
        font-family: 'Fira Mono', monospace;
        color: white;
        border-bottom: 1px inset ${palette.typo4};
        font-size: 1rem;
        margin-right: 0.5rem;
        line-height: 1.5;
        padding: 0;
        &::placeholder {
            color: white;
        }
      }
    }
    padding: 1.25rem 1rem;
  }
`;
interface AddLinkProps {
  left: number;
  top: number;
  stickToRight?: boolean;
  onConfirm: (link: string) => void;
  onClose: () => void;
  onDelete?: () => void;
  defaultValue: string;
}

const { useCallback, useRef, useEffect } = React;
const AddLink: React.FC<AddLinkProps> = ({
  left,
  top,
  stickToRight,
  onConfirm,
  onClose,
  onDelete,
  defaultValue,
}) => {
  const [value, onChange] = useInput('');
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onConfirm(value);
    },
    [onConfirm, value],
  );
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!input.current) return;
    input.current.focus();
  }, []);
  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <AddLinkBlock
        style={{
          left: stickToRight ? 'initial' : left,
          top,
          right: stickToRight ? '3rem' : 'initial',
        }}
      >
        <div className="wrapper">
          <form onSubmit={onSubmit}>
            <input
              value={value}
              onChange={onChange}
              placeholder="Paste or type link...."
              ref={input}
            />
            <Button color="blue">
              {defaultValue ? '수정' : 'OK'}
            </Button>
            {defaultValue && <MdDelete onClick={onDelete} />}
          </form>
        </div>
      </AddLinkBlock>
    </OutsideClickHandler>
  );
};

export default AddLink;
