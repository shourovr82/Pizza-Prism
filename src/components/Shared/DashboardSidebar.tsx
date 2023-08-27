import CreativeIcon from "@rsuite/icons/Creative";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { BiFoodMenu, BiSolidCategoryAlt } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
import { GoClockFill } from "react-icons/go";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsHouseDoorFill } from "react-icons/bs";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/router";

const DashboardSidebar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:justify-between md:py-5 lg:py-2  font-sans h-full">
      <div className=" md:space-y-5 lg:space-y-3">
        <div className="flex justify-center">
          <span className=" bg-[#fdefe0]  p-2.5 rounded-2xl">
            <CreativeIcon className="text-2xl" />
          </span>
        </div>
        <div className="flex flex-col md:gap-3  lg:gap-2 justify-center items-center ">
          {/* dashboard home */}
          <Link
            href="/dashboard"
            className={`   ${
              router.pathname === "/dashboard" && "bg-[#fef0e1]"
            }  flex flex-col    
             items-center py-3 px-3 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <BsHouseDoorFill
                className={`${
                  router.pathname === "/dashboard" && "text-[#ec7905]"
                }  group-hover:text-[#ec7905] text-[#7f7f7f] text-lg`}
                size={16}
              />
            </span>
            <h4
              className={`${
                router.pathname === "/dashboard" && "text-[#ec7905]"
              }  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}
            >
              Home
            </h4>
          </Link>

          {/* dashboard table */}
          <Link
            href="/dashboard/table"
            className={`   ${
              router.pathname === "/dashboard/table" && "bg-[#fef0e1]"
            }  flex flex-col items-center  py-3 px-3.5 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <BiSolidCategoryAlt
                className={`${
                  router.pathname === "/dashboard/table" && "text-[#ec7905]"
                }  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4
              className={`${
                router.pathname === "/dashboard/table" && "text-[#ec7905]"
              }  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}
            >
              Table
            </h4>
          </Link>
          {/* dashboard menu */}
          <Link
            href="/dashboard/menu"
            className={`   ${
              router.pathname === "/dashboard/menu" && "bg-[#fef0e1]"
            }  flex flex-col items-center  py-3 px-3 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <BiFoodMenu
                className={`${
                  router.pathname === "/dashboard/menu" && "text-[#ec7905]"
                }  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4
              className={`${
                router.pathname === "/dashboard/menu" && "text-[#ec7905]"
              }  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}
            >
              Menu
            </h4>
          </Link>
          {/* dashboard orders */}
          <Link
            href="/dashboard/orders"
            className={`   ${
              router.pathname === "/dashboard/orders" && "bg-[#fef0e1]"
            }  flex flex-col items-center  py-3 px-3 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <FaShoppingCart
                className={`${
                  router.pathname === "/dashboard/orders" && "text-[#ec7905]"
                }  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4
              className={`${
                router.pathname === "/dashboard/menu" && "text-[#ec7905]"
              }  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}
            >
              Orders
            </h4>
          </Link>
          {/* dashboard history */}
          <Link
            href="/dashboard/history"
            className={`   ${
              router.pathname === "/dashboard/history" && "bg-[#fef0e1]"
            }  flex flex-col items-center  py-3 px-3 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <GoClockFill
                className={`${
                  router.pathname === "/dashboard/history" && "text-[#ec7905]"
                }  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4
              className={`${
                router.pathname === "/dashboard/history" && "text-[#ec7905]"
              }  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}
            >
              History
            </h4>
          </Link>
          {/* dashboard report */}
          <Link
            href="/dashboard/report"
            className={`   ${
              router.pathname === "/dashboard/report" && "bg-[#fef0e1]"
            }  flex flex-col items-center  py-3 px-3 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <FaChartPie
                className={`${
                  router.pathname === "/dashboard/report" && "text-[#ec7905]"
                }  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4
              className={`${
                router.pathname === "/dashboard/report" && "text-[#ec7905]"
              }  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}
            >
              Report
            </h4>
          </Link>
          {/* dashboard alert */}
          <Link
            href="/dashboard/alert"
            className={`   ${
              router.pathname === "/dashboard/alert" && "bg-[#fef0e1]"
            }  flex flex-col    
             items-center  py-3 px-4 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <IoNotificationsSharp
                className={`${
                  router.pathname === "/dashboard/alert" && "text-[#ec7905]"
                }  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4
              className={`${
                router.pathname === "/dashboard/alert" && "text-[#ec7905]"
              }  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}
            >
              Alert
            </h4>
          </Link>
          {/* dashboard settings */}
          <Link
            href="/dashboard/settings"
            className={`   ${
              router.pathname === "/dashboard/settings" && "bg-[#fef0e1]"
            }  flex flex-col    
             items-center  py-3 px-4 group rounded-xl hover:bg-[#fef0e1]`}
          >
            <span>
              <RiSettings4Fill
                className={`${
                  router.pathname === "/dashboard/settings" && "text-[#ec7905]"
                }  group-hover:text-[#ec7905] text-lg text-[#7f7f7f]`}
              />
            </span>
            <h4
              className={`${
                router.pathname === "/dashboard/settings" && "text-[#ec7905]"
              }  group-hover:text-[#ec7905] text-xs text-[#7f7f7f]`}
            >
              Settings
            </h4>
          </Link>
        </div>
      </div>
      <div className="md:mt-2 ">
        <div className="flex items-center justify-center gap-4">
          <Dropdown type="menu">
            <DropdownTrigger>
              <Button
                isIconOnly
                color="default"
                radius="full"
                aria-label="Like"
              >
                <Avatar
                  isBordered
                  color="secondary"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action event example"
              onAction={(key) => alert(key)}
            >
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
