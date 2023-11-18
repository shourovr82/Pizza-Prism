"use client";

import TotalIncomeChart from "@/components/dashboard/UI/TotalIncomeChart";
import CardSection from "@/components/dashboard/UI/cardSection";
import LatestOrderAndStock from "@/components/dashboard/UI/latestOrderAndStock";
import OrderChart from "@/components/dashboard/UI/orderChart";
import UserSection from "@/components/dashboard/UI/userSection";

const OverAllReports = () => {
  return (
    <>
      <div>
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
};

export default OverAllReports;
