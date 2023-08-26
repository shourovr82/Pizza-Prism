import RootLayout from "@/components/Layouts/RootLayout";
import DiscoverMenuSection from "@/components/Ui/Home/DiscoverMenuSection";
import HeroSection from "@/components/Ui/Home/HeroSection";
import Head from "next/head";
import { motion } from "framer-motion";
import OurStory from "@/components/Ui/Home/OurStory";
import CustomersSays from "@/components/Ui/Home/CustomersSays";
import MeetOurGreatChefs from "@/components/Ui/Home/MeetOurGreatChefs";
import OrderNowSection from "@/components/Ui/Home/OrderNowSection";
import OurLocation from "@/components/Ui/Home/OurLocation";
import BookReservation from "@/components/Ui/Home/BookReservation";

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
        className="bg-[#fafafa]"
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
      <div className="bg-[#f3f2f2]">
        <OurStory />
      </div>
      <div className="">
        <CustomersSays />
      </div>
      <div className="bg-[#f3f2f2] pb-5">
        <MeetOurGreatChefs />
      </div>
      <div className="">
        <OrderNowSection />
      </div>
      <div className="bg-[#f3f2f2] ">
        <OurLocation />
      </div>
      <div className="reservationBg   ">
        <BookReservation />
      </div>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
