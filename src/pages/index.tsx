import RootLayout from "@/components/Layouts/RootLayout";
import DiscoverMenuSection from "@/components/Ui/Home/DiscoverMenuSection";
import HeroSection from "@/components/Ui/Home/HeroSection";
import Head from "next/head";
import { motion } from "framer-motion";
import OurStory from "@/components/Ui/Home/OurStory";

interface ExtendedHomePage extends React.FC {
  getLayout: (page: JSX.Element) => JSX.Element;
}

const HomePage: ExtendedHomePage = () => {
  return (
    <>
      <Head>
        <title>Pizza Prism</title>
        <meta name="description" content="loser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main section */}
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            // clipPath: " circle(18.2% at 50% 50%)",
            clipPath: "circle(18% at 50% 100%)",
          },
          animateState: {
            opacity: 1,
            // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            clipPath: " circle(100% at 50% 50%)",
          },
          exitState: {
            opacity: 0,
            clipPath: "circle(18% at 50% 100%)",
          },
        }}
      >
        <div className="bannerImg   select-none  flex justify-center">
          <HeroSection />
        </div>
      </motion.div>
      <>
        <DiscoverMenuSection />
      </>
      <>
        <OurStory />
      </>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
