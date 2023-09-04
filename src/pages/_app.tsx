import "@/styles/globals.css";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { AppProps } from "next/app";
import store from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import "rsuite/dist/rsuite-no-reset.min.css";
import "react-nice-dates/build/style.css";

type ComponentWithLayout = AppProps["Component"] & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

export default function App({ Component, pageProps }: AppProps) {
  const componentWithLayout = Component as ComponentWithLayout; //
  const getLayout = componentWithLayout.getLayout || ((page) => page);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={Math.random()}>
          <NextUIProvider>
            <Provider store={store}>
              <Toaster />
              {getLayout(<Component {...pageProps} />)}
            </Provider>
          </NextUIProvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
