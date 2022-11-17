import type { AppProps } from "next/app";

import Header from "../components/Header";

import { ToastContainer } from "react-toastify";

import Provider from "../contexts";

import { GlobalStyle } from "../styles/reset";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <Header />
        <Component {...pageProps} />
        <ToastContainer />
        <GlobalStyle />
      </Provider>
    </>
  );
}
