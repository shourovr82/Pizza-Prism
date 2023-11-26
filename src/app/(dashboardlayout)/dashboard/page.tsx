import HeroSection from "@/components/dashboard/dashboardHome/SwipeAbleTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Pizza-Prisma",
  description: "shourovr82 | pizza-prism | Shafinur Islam",
};

const DashboardHomePage = () => {
  return (
    <>
      <div>dashboard Home page</div>
      <div>
        <HeroSection />
      </div>
    </>
  );
};

export default DashboardHomePage;
