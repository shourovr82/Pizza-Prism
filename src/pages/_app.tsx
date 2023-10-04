import "@/styles/globals.css";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { AppProps } from "next/app";
import store from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import "rsuite/dist/rsuite-no-reset.min.css";
import "react-nice-dates/build/style.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
type ComponentWithLayout = AppProps["Component"] & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

export default function App({ Component, pageProps }: AppProps) {
  const componentWithLayout = Component as ComponentWithLayout; //
  const getLayout = componentWithLayout.getLayout || ((page) => page);
  return (
    <>
      {" "}
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <AnimatePresence mode="wait">
        <motion.div key={Math.random()}>
          <NextUIProvider>
            {/* <Provider store={store}> */}
            <Toaster />
            {getLayout(<Component {...pageProps} />)}
            {/* </Provider> */}
          </NextUIProvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
