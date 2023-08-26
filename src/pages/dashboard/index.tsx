import Head from "next/head";
import CardSection from "@/components/dashboard/cardSection";
import UserSection from "@/components/dashboard/userSection";
import OrderChart from "@/components/dashboard/orderChart";
import LatestOrderAndStock from "@/components/dashboard/latestOrderAndStock";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import DashboardLayout from "@/components/Layouts/DashboardLayout";

export default function DashboardHomePage() {
  type Inputs = {
    searchTerm: string;
  };

  const { register, handleSubmit } = useForm<Inputs>();

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
        <div className="relative">
          {/* Main Layout for Dashboard */}
          <main className=" w-full p-5 bg-[#FAFAFA]">
            <div className="">
              <UserSection />
              <CardSection />
              <OrderChart />
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
