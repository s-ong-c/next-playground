import '../styles/typography.css';

import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import Head from 'next/head';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../store';

/** 전역 설정  */
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
