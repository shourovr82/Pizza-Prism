import Head from "next/head";
import CardSection from "@/components/dashboard/cardSection";
import UserSection from "@/components/dashboard/userSection";
import OrderChart from "@/components/dashboard/orderChart";
import LatestOrderAndStock from "@/components/dashboard/latestOrderAndStock";

import DashboardLayout from "@/components/Layouts/Dashboard/DashboardLayout";
import TotalIncomeChart from "@/components/dashboard/TotalIncomeChart";

export default function DashboardHomePage() {
  return (
    <>
      <Head>
        <title>DASHBOARD</title>
        <meta name="description" content="loser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* Static sidebar for desktop */}
        {/* <Dashboard /> */}

        {/*  */}
        <div className="relative font-sans">
          {/* Main Layout for Dashboard */}
          <main className=" w-full p-5 bg-[#fafafa]">
            <div className="">
              <UserSection />
              <CardSection />
              <div className="grid grid-cols-8  mt-6  gap-5">
                <div className="col-span-5">
                  <OrderChart />
                </div>
                <div className="col-span-3">
                  <TotalIncomeChart />
                </div>
              </div>
              <LatestOrderAndStock />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

DashboardHomePage.getLayout = function getLayout(page: any) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
