import Link from "next/link";
import { useRouter } from "next/router";
import { BiSolidLock } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { FaEye, FaHotel, FaUserTie } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi";
import { HiMiniLanguage } from "react-icons/hi2";
import { IoNotifications, IoWalletSharp } from "react-icons/io5";

const DashboardProfileSidebar = () => {
  const router = useRouter();

  const allLinks = [
    {
      href: "/dashboard/profile-setting",
      title: "Personal Information",
      icon: (
        <FaUserTie
          className={`${
            router.pathname === "/dashboard/profile-setting" &&
            "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
    {
      href: "/dashboard/profile-setting/login-password",
      title: "Login & Password",
      icon: (
        <BiSolidLock
          className={`${
            router.pathname === "/dashboard/login-password" && "!text-[#ec7905]"
          }  group-hover:text-[#ec7905] text-[#939393] `}
          size={20}
        />
      ),
    },
  ];

  return (
    <div className="py-5 flex flex-col gap-5 px-3">
      <div className="space-y-5">
        <div className=" flex justify-center">
          <div className="border h-36 w-36 rounded-full "></div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-semibold text-2xl">Shafinur Islam</h2>
          <p className="text-md font-medium">Cashier</p>
        </div>
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
      </div>
    </div>
  );
};

export default DashboardProfileSidebar;
