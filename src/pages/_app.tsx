import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { AppProps } from "next/app";
import store from "@/redux/store";

type ComponentWithLayout = AppProps["Component"] & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

export default function App({ Component, pageProps }: AppProps) {
  const componentWithLayout = Component as ComponentWithLayout; //
  const getLayout = componentWithLayout.getLayout || ((page) => page);
  return (
    <>
      <Provider store={store}>
        <Toaster />
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}
