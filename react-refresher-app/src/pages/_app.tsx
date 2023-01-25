import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import MainHeader from "@/components/Header/MainHeader";
import store from "@/store";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainHeader />
      <Component {...pageProps} />
    </Provider>
  );
}
