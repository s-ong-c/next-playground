import * as React from 'react';

import HalfLayout from '../components/common/HalfLayout';
import LoginTemplate from '../components/login/LoginTemplate';

function LoginPage() {
  return (
    <HalfLayout>
      <HalfLayout.Main>
        <LoginTemplate onSubmit={() => {}} />
      </HalfLayout.Main>
      <HalfLayout.Side>이미지</HalfLayout.Side>
    </HalfLayout>
  );
}

export default LoginPage;
