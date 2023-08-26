import CreativeIcon from "@rsuite/icons/Creative";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { BiFoodMenu, BiSolidCategoryAlt } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
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

const DashboardSidebar = () => {
  return (
    <div className="flex flex-col lg:justify-between md:py-5 lg:py-2  font-sans h-full">
      <div className=" md:space-y-5 lg:space-y-3">
        <div className="flex justify-center">
          <span className=" bg-[#fdefe0]  p-2.5 rounded-2xl">
            <CreativeIcon className="text-2xl" />
          </span>
        </div>
        <div className="flex flex-col md:gap-3  lg:gap-2 justify-center items-center ">
          <Link
            href="/dashboard"
            className="flex flex-col items-center  py-3 px-3 rounded-xl bg-[#fef0e1]"
          >
            <span>
              <BsHouseDoorFill className="text-[#ec7905]" size={16} />
            </span>
            <h4 className="text-[#ec7905] text-xs  ">Home</h4>
          </Link>
          <Link
            href="/dashboard"
            className="flex flex-col items-center  py-2.5 px-3.5 rounded-xl hover:bg-[#fef0e1]"
          >
            <span>
              <BiSolidCategoryAlt className="text-[#7f7f7f] text-lg" />
            </span>
            <h4 className="text-[#7f7f7f] text-xs">Table</h4>
          </Link>
          <Link
            href="/dashboard"
            className="flex flex-col items-center  py-2.5 px-3 rounded-xl hover:bg-[#fef0e1]"
          >
            <span>
              <BiFoodMenu className="text-[#7f7f7f] text-lg" />
            </span>
            <h4 className="text-[#7f7f7f] text-xs">Menu</h4>
          </Link>
          <Link
            href="/dashboard"
            className="flex flex-col items-center  py-2.5 px-3 rounded-xl hover:bg-[#fef0e1]"
          >
            <span>
              <FaShoppingCart className="text-[#7f7f7f] text-lg" />
            </span>
            <h4 className="text-[#7f7f7f] text-xs ">Order</h4>
          </Link>
          <Link
            href="/dashboard"
            className="flex flex-col items-center  py-2.5 px-2.5 rounded-xl hover:bg-[#fef0e1]"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#7f7f7f"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h4 className="text-[#7f7f7f] text-xs">History</h4>
          </Link>
          <Link
            href="/dashboard"
            className="flex flex-col items-center  py-2.5 px-3 rounded-xl hover:bg-[#fef0e1]"
          >
            <span>
              <FaChartPie className="text-[#7f7f7f] text-lg" />
            </span>
            <h4 className="text-[#7f7f7f] text-xs">Report</h4>
          </Link>
          <Link
            href="/dashboard"
            className="flex flex-col items-center  py-2.5 px-[18px] rounded-xl hover:bg-[#fef0e1]"
          >
            <span>
              <IoNotificationsSharp className="text-[#7f7f7f] text-lg" />
            </span>
            <h4 className="text-[#7f7f7f] text-xs">Alert</h4>
          </Link>
          <Link
            href="/dashboard"
            className="flex flex-col items-center  py-2.5 px-3 rounded-xl hover:bg-[#fef0e1]"
          >
            <span>
              <RiSettings4Fill className="text-[#7f7f7f] text-lg" />
            </span>
            <h4 className="text-[#7f7f7f] text-xs">Settings</h4>
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
