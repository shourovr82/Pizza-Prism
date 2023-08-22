import "@/styles/globals.css";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { AppProps } from "next/app";
import store from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";

type ComponentWithLayout = AppProps["Component"] & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

export default function App({ Component, pageProps }: AppProps) {
  const componentWithLayout = Component as ComponentWithLayout; //
  const getLayout = componentWithLayout.getLayout || ((page) => page);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={Math.random()}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: " circle(18.2% at 50% 50%)",
            },
            animateState: {
              opacity: 1,
              // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              clipPath: " circle(100% at 50% 50%)",
            },
            exitState: {
              opacity: 0,
              clipPath: "circle(10% at 100% 100%)",
            },
          }}
        >
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
