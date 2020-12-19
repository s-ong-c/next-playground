import * as React from 'react';

import Button from '../common/Button';
import LabelInput from '../common/LabelInput';
import styled from 'styled-components';
import useInput from '../../../utils/hooks/useInput';

const LoginTemplateBlock = styled.div`
  padding: 24px;
  flex: 1 1 0%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 376px;
  width: 100%;
`;

export interface LoginTemplateProps {
  onSendAuthEmail: (email: string) => void;
}

function LoginTemplate({ onSendAuthEmail }: LoginTemplateProps) {
  const [email, onChangeEmail] = useInput('');
  console.log(email);
  return (
    <LoginTemplateBlock>
      {/** Header */}
      <Wrapper>
        <h1>로그인</h1>
        <LabelInput
          label="*이메일로 로그인"
          value={email}
          onChange={onChangeEmail}
          color={'primaryLight'}
          placeholder="email@email.com"
        />
        <Button
          style={{
            borderRadius: '6px',
          }}
          color="primaryMain"
          onClick={() => {
            onSendAuthEmail(email);
          }}
        >
          로그인
        </Button>
      </Wrapper>
    </LoginTemplateBlock>
  );
}

export default LoginTemplate;
