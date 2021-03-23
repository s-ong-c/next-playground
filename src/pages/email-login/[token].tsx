import { NextPage } from 'next';
import React from 'react';

const EmailLogin: NextPage<{ token: string; code: string }> = ({
  token,
  code,
}) => {
  console.log(token, code);
  return <div>{token}</div>;
};
EmailLogin.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
    code: query.code as string,
  };
};

export default EmailLogin;
