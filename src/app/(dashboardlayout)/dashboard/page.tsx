import { FiSearch } from "react-icons/fi";
import HeroSection from "@/components/dashboard/dashboardHome/CategorySwipeAbleTabs";
import { Input } from "@nextui-org/react";
import { Metadata } from "next";
import PopularDishesTabs from "@/components/dashboard/dashboardHome/PopularDishesTabs";
import DashboardOrderReports from "@/components/dashboard/dashboardHome/DashboardOrderReports";

export const metadata: Metadata = {
  title: "Dashboard | Pizza-Prisma",
  description: "shourovr82 | pizza-prism | Shafinur Islam",
};

const DashboardHomePage = () => {
  return (
    <section className="p-5 ">
      <div className=" ">
        <div>
          <Input
            color="warning"
            radius="full"
            variant="bordered"
            classNames={{
              base: "max-w-full   h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search Food, Cuisine, Dish or Order No..."
            size="sm"
            startContent={<FiSearch size={20} />}
            type="search"
          />
        </div>
        {/* category */}
        <div className="mt-5">
          <HeroSection />
        </div>
        {/* popular dishes */}
        <div className="mt-5">
          <PopularDishesTabs />
        </div>
        {/* Order Reports */}
        <div className="mt-5">
          <DashboardOrderReports />
        </div>
      </div>
    </section>
  );
};

export default DashboardHomePage;
