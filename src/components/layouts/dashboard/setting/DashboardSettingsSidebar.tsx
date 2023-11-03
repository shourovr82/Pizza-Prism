"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTools } from "react-icons/fa";
import { FaEye, FaHotel } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi";
import { HiMiniLanguage } from "react-icons/hi2";
import { IoNotifications, IoWalletSharp } from "react-icons/io5";

const DashboardSettingsSidebar = () => {
  const pathname = usePathname();

  const allLinks = [
    {
      href: "/dashboard/settings/appearance",
      title: "Appearance",
      icon: (
        <FaEye
          className={`${
            pathname === "/dashboard/settings/appearance" && "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/settings/my-restaurant",
      title: "My Restaurant",
      icon: (
        <FaHotel
          className={`${
            pathname === "/dashboard/settings/my-restaurant" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/settings",
      title: "Product Management",
      icon: (
        <FaTools
          className={`${
            pathname === "/dashboard/settings" && "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/settings/checkout-settings",
      title: "Checkout Settings",
      icon: (
        <IoWalletSharp
          className={`${
            pathname === "/dashboard/settings/checkout-settings" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/settings/notifications",
      title: "Notifications",
      icon: (
        <IoNotifications
          className={`${
            pathname === "/dashboard/settings/notifications" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/settings/security",
      title: "Security",
      icon: (
        <HiShieldCheck
          className={`${
            pathname === "/dashboard/settings/security" && "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/settings/language",
      title: "Language",
      icon: (
        <HiMiniLanguage
          className={`${
            pathname === "/dashboard/settings/language" && "!text-[#ec7905]"
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
            pathname === item.href && "bg-[#fef0e1]"
          }  flex  gap-3 
               items-center py-2.5 px-4 w-full duration-300 ease-in-out transition-all group rounded-full hover:bg-[#fef0e1]`}
        >
          <span className="duration-300 ease-in-out transition-all">
            {item.icon}
          </span>
          <h4
            className={`${
              pathname === item.href && "!text-[#ec7905]"
            }  group-hover:text-[#ec7905] text-sm font-semibold  duration-300 ease-in-out transition-all text-[#939393]`}
          >
            {item.title}
          </h4>
        </Link>
      ))}
    </div>
  );
};

export default DashboardSettingsSidebar;
