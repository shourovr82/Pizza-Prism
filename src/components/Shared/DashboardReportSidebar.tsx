import Link from "next/link";
import { useRouter } from "next/router";
import { TiChartArea } from "react-icons/ti";
import { FaSellsy } from "react-icons/fa6";
import { TbChartDonutFilled } from "react-icons/tb";

import { IoReceipt, IoWalletSharp } from "react-icons/io5";

import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { RiWaterPercentFill } from "react-icons/ri";

const DashboardReportSidebar = () => {
  const router = useRouter();

  const allLinks = [
    {
      href: "/dashboard/report",
      title: "Sales Summary",
      icon: (
        <TbChartDonutFilled
          className={`${
            router.pathname === "/dashboard/report" && "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/report/payment-method",
      title: "Payment Method",
      icon: (
        <IoWalletSharp
          className={`${
            router.pathname === "/dashboard/report/payment-method" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/report/item-sales",
      title: "Item Sales",
      icon: (
        <TiChartArea
          className={`${
            router.pathname === "/dashboard/report/item-sales" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/report/category-sales",
      title: "Category Sales",
      icon: (
        <FaSellsy
          className={`${
            router.pathname === "/dashboard/report/category-sales" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/report/modifier-sales",
      title: "Modifier Sales",
      icon: (
        <BiSolidBarChartAlt2
          className={`${
            router.pathname === "/dashboard/report/modifier-sales" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/report/discounts",
      title: "Discounts",
      icon: (
        <RiWaterPercentFill
          className={`${
            router.pathname === "/dashboard/report/discounts" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/report/taxes",
      title: "Taxes",
      icon: (
        <IoReceipt
          className={`${
            router.pathname === "/dashboard/report/taxes" && "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
  ];

  return (
    <div className="py-5 flex flex-col gap-5 px-3">
      {allLinks?.map((item) => (
        <Link
          key={Math.random()}
          href={item.href}
          className={`   ${
            router.pathname === item.href && "bg-[#fef0e1]"
          }  flex  gap-3 
               items-center py-2.5 px-4 w-full duration-300 ease-in-out transition-all group rounded-full hover:bg-[#fef0e1]`}
        >
          <span className="duration-300 ease-in-out transition-all">
            {item.icon}
          </span>
          <h4
            className={`${
              router.pathname === item.href && "!text-[#ec7905]"
            }  group-hover:text-[#ec7905] text-sm font-semibold  duration-300 ease-in-out transition-all text-[#939393]`}
          >
            {item.title}
          </h4>
        </Link>
      ))}
    </div>
  );
};

export default DashboardReportSidebar;
