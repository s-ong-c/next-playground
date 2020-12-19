import * as React from 'react';

import { SendAuthEmailResponse, sendAuthEmail } from '../../api/auth';

import HalfLayout from '../components/common/HalfLayout';
import LoginTemplate from '../components/login/LoginTemplate';
import useRequest from '../../utils/hooks/useRequest';

function LoginPage() {
  const [
    _sendAuthEmail,
    loading,
    data,
    ,
    resetSendAuthEmail,
  ] = useRequest<SendAuthEmailResponse>(sendAuthEmail);

  const onSendAuthEmail = React.useCallback(
    async (email: string) => {
      console.log(email);
      _sendAuthEmail(email);
      // try {
      //     setLoad(true);
      //     const result = await sendAuthEmail(email);
      //     setLoad(false);
      //     setRegistered(result.data.registered);
      // } catch (e) {
      //     console.log(e);
      // }
    },
    [_sendAuthEmail],
  );

  return (
    <HalfLayout>
      <HalfLayout.Main>
        <LoginTemplate onSendAuthEmail={onSendAuthEmail} />
      </HalfLayout.Main>
      <HalfLayout.Side>이미지</HalfLayout.Side>
    </HalfLayout>
  );
}

export default LoginPage;
