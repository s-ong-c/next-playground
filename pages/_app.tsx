import type { AppProps } from "next/app";

/** 전역 설정  */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
