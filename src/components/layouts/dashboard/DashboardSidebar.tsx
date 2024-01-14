"use client";

import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { BiFoodMenu, BiSolidCategoryAlt } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
import { GoClockFill } from "react-icons/go";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsHouseDoorFill } from "react-icons/bs";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import dashboardLogo from "@/assets/logo/dashboard-logo.svg";
import Image from "next/image";

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:justify-between shadow-xl rounded-r-xl  md:py-5 lg:py-2  font-sans h-full">
      <div className=" md:space-y-5 lg:space-y-3">
        <div className="flex justify-center">
          <Link href="/">
            <Image className="w-16 border border-[#ff5900] shadow-inner shadow-[#ff5900] rounded-full p-2" src={dashboardLogo} alt="shourovr82" />
          </Link>
        </div>
        <div className="flex flex-col md:gap-3  lg:gap-2 justify-center items-center ">
          {/* dashboard home */}
          <Link
            href="/dashboard"
            className={`   ${pathname === "/dashboard" && "bg-[#fef0e1]"}  flex flex-col    
             items-center py-3 px-3 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <BsHouseDoorFill
                className={`${pathname === "/dashboard" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-[#7f7f7f] text-lg`}
                size={16}
              />
            </span>
            <h4 className={`${pathname === "/dashboard" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}>Home</h4>
          </Link>

          {/* dashboard table */}
          <Link
            href="/dashboard/tables"
            className={`   ${
              pathname === "/dashboard/tables" && "bg-[#fef0e1]"
            }  flex flex-col items-center  py-3 px-3.5 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <BiSolidCategoryAlt
                className={`${pathname === "/dashboard/tables" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4 className={`${pathname === "/dashboard/tables" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}>Table</h4>
          </Link>
          {/* dashboard menu */}
          <Link
            href="/dashboard/menu"
            className={`   ${
              pathname === "/dashboard/menu" && "bg-[#fef0e1]"
            }  flex flex-col items-center  py-3 px-3 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <BiFoodMenu className={`${pathname === "/dashboard/menu" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`} />
            </span>
            <h4 className={`${pathname === "/dashboard/menu" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}>Menu</h4>
          </Link>
          {/* dashboard orders */}
          <Link
            href="/dashboard/orders"
            className={`   ${
              pathname?.startsWith("/dashboard/orders") && "bg-[#fef0e1]"
            }  flex flex-col items-center  py-3 px-3 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <FaShoppingCart
                className={`${pathname?.startsWith("/dashboard/orders") && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4 className={`${pathname?.startsWith("/dashboard/orders") && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}>
              Orders
            </h4>
          </Link>
          {/* dashboard history */}
          <Link
            href="/dashboard/history"
            className={`   ${
              pathname === "/dashboard/history" && "bg-[#fef0e1]"
            }  flex flex-col items-center  py-3 px-3 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <GoClockFill
                className={`${pathname === "/dashboard/history" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4 className={`${pathname === "/dashboard/history" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}>History</h4>
          </Link>
          {/* dashboard report */}
          <Link
            href="/dashboard/report"
            className={`   ${
              pathname === "/dashboard/report" && "bg-[#fef0e1]"
            }  flex flex-col items-center  py-3 px-3 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <FaChartPie className={`${pathname === "/dashboard/report" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`} />
            </span>
            <h4 className={`${pathname === "/dashboard/report" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}>Report</h4>
          </Link>
          {/* dashboard alert */}
          <Link
            href="/dashboard/alert"
            className={`   ${pathname === "/dashboard/alert" && "bg-[#fef0e1]"}  flex flex-col    
             items-center  py-3 px-4 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <IoNotificationsSharp
                className={`${pathname === "/dashboard/alert" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4 className={`${pathname === "/dashboard/alert" && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}>Alert</h4>
          </Link>
          {/* dashboard settings */}
          <Link
            href="/dashboard/settings"
            className={`   ${pathname?.startsWith("/dashboard/settings") && "bg-[#fef0e1]"}  flex flex-col    
             items-center  py-3 px-4 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <RiSettings4Fill
                className={`${pathname?.startsWith("/dashboard/settings") && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4 className={`${pathname?.startsWith("/dashboard/settings") && "text-[#ec7905]"}  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}>
              Settings
            </h4>
          </Link>
        </div>
      </div>
      <div className="md:mt-2 ">
        <div className="flex items-center justify-center gap-4">
          <Dropdown type="menu">
            <DropdownTrigger>
              <Button isIconOnly color="default" radius="full" aria-label="Like">
                <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Action event example">
              <DropdownItem key="profile setting" as={Link} href="/dashboard/profile-setting">
                Personal Information
              </DropdownItem>
              <DropdownItem key="login and password setting" as={Link} href="/dashboard/login-password">
                Login & Password Setting
              </DropdownItem>

              <DropdownItem key="delete" className="text-red-600 hover:!text-white font-semibold py-2" color="warning">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
