import type { AppProps } from "next/app";
import Header from "../components/Header";

import { GlobalStyle } from "../styles/reset";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
