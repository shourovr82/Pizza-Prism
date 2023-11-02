"use client";

import BookReservation from "@/components/Home/UI/BookReservation";
import CustomersSays from "@/components/Home/UI/CustomersSays";
import DiscoverMenuSection from "@/components/Home/UI/DiscoverMenuSection";
import HeroSection from "@/components/Home/UI/HeroSection";
import MeetOurGreatChefs from "@/components/Home/UI/MeetOurGreatChefs";
import OrderNowSection from "@/components/Home/UI/OrderNowSection";
import OurLocation from "@/components/Home/UI/OurLocation";
import OurStory from "@/components/Home/UI/OurStory";
// import { Metadata } from "next";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Pizza Prism - Home",
//   description: "Created By Shafinur Islam(@shourovr82)",
//   applicationName: "Pizza Prism",
// };

export default function Home() {
  return (
    <>
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
        <div className="bannerImg selection:bg-[#f78908] selection:text-white    flex justify-center">
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
}
