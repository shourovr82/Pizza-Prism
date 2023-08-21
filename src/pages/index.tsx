import RootLayout from "@/components/Layouts/RootLayout";
import HeroSection from "@/components/Ui/Home/HeroSection";
import Head from "next/head";
import React from "react";

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
      <>
        <HeroSection />
      </>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
