import Link from "next/link";
import { useRouter } from "next/router";
import { FaTools } from "react-icons/fa";
import { FaEye, FaHotel } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi";
import { HiMiniLanguage } from "react-icons/hi2";
import { IoNotifications, IoWalletSharp } from "react-icons/io5";

const DashboardSettingsSidebar = () => {
  const router = useRouter();

  const allLinks = [
    {
      href: "/dashboard/settings/appearance",
      title: "Appearance",
      icon: (
        <FaEye
          className={`${
            router.pathname === "/dashboard/settings/appearance" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={19}
        />
      ),
    },
    {
      href: "/dashboard/your-restaurant",
      title: "Your Restaurant",
      icon: (
        <FaHotel
          className={`${
            router.pathname === "/dashboard/settings/your-restaurant" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={19}
        />
      ),
    },
    {
      href: "/dashboard/settings",
      title: "Product Management",
      icon: (
        <FaTools
          className={`${
            router.pathname === "/dashboard/settings" && "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={19}
        />
      ),
    },
    {
      href: "/dashboard/settings/checkout-settings",
      title: "Checkout Settings",
      icon: (
        <IoWalletSharp
          className={`${
            router.pathname === "/dashboard/settings/checkout-settings" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={19}
        />
      ),
    },
    {
      href: "/dashboard/settings/notifications",
      title: "Notifications",
      icon: (
        <IoNotifications
          className={`${
            router.pathname === "/dashboard/settings/notifications" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={19}
        />
      ),
    },
    {
      href: "/dashboard/settings/security",
      title: "Security",
      icon: (
        <HiShieldCheck
          className={`${
            router.pathname === "/dashboard/settings/security" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={19}
        />
      ),
    },
    {
      href: "/dashboard/settings/language",
      title: "Language",
      icon: (
        <HiMiniLanguage
          className={`${
            router.pathname === "/dashboard/settings/language" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={19}
        />
      ),
    },
  ];

  return (
    <div className="py-5 flex flex-col gap-3.5 px-3">
      {allLinks?.map((item) => (
        <Link
          key={Math.random()}
          href={item.href}
          className={`   ${
            router.pathname === item.href && "bg-[#fef0e1]"
          }  flex  gap-3 
               items-center py-3 px-4 w-full duration-300 ease-in-out transition-all group rounded-full hover:bg-[#fef0e1]`}
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

export default DashboardSettingsSidebar;
