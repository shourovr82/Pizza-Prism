"use client";

import { Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import NavLink from "next/link";

import { FaPhoneFlip } from "react-icons/fa6";
import { BsHandbagFill } from "react-icons/bs";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className=" bg-[#15181b] shadow-xl sticky top-0 z-50 shadow-[#1415129c] w-full">
      <div className="bg-transparent  max-w-7xl mx-auto flex justify-between   items-center py-2">
        <div>
          <h1 className=" text-white text-xl  selection:bg-[#f78908] selection:text-white  ">Pizza Prism</h1>
        </div>
        <div className="hidden sm:flex  items-center gap-6">
          <Link href="/" className="font-sans text-[15px] text-[#d1710c]">
            Home
          </Link>

          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-[#d8d9d9] font-sans  text-[15px] data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                Menu
              </Button>
            </DropdownTrigger>

            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem key="autoscaling" description="ACME scales apps to meet user demand, automagically, based on load.">
                Specials and Coupons
              </DropdownItem>
              <DropdownItem key="usage_metrics" description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.">
                Contact
              </DropdownItem>
              <DropdownItem key="production_ready" description="ACME runs on ACME, join us and others serving requests at web scale.">
                Production Ready
              </DropdownItem>
              <DropdownItem key="99_uptime" description="Applications stay on the grid with high availability and high uptime guarantees.">
                +99% Uptime
              </DropdownItem>
              <DropdownItem key="supreme_support" description="Overcome any challenge with a supporting team ready to respond.">
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavLink href="/news" className="text-[#d8d9d9] text-[15px]   font-sans font-[400]">
            Specials <span className="max-lg:hidden"> and Coupons</span>
          </NavLink>

          <Link href="#" className="text-[#d8d9d9] text-[15px]   font-sans font-[400]">
            Contact
          </Link>

          <NavLink href="/dashboard" className="text-[#d8d9d9] text-[15px]   font-sans font-[400]">
            Dashboard
          </NavLink>
        </div>
        <div className="items-center gap-4 flex">
          <button className="font-sans border-2 p-2 rounded-full border-[#dd9710] relative text-[15px] text-[#dd9710]" aria-current="page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="20"
              height="20"
              viewBox="0 0 256 256"
              xmlSpace="preserve"
            >
              <g
                style={{
                  stroke: "none",
                  strokeWidth: 0,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "none",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 41.845 89.564 c -0.323 -0.09 -0.641 -0.192 -0.953 -0.306 C 41.204 89.373 41.521 89.476 41.845 89.564 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(251,188,4)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
                <path
                  d="M 49.786 84.654 c 2.33 -4.533 -9.916 -6.488 -16.71 -6.578 c 0 5.139 3.258 9.506 7.816 11.182 C 45.952 89.411 48.26 87.528 49.786 84.654 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(251,188,4)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
                <path
                  d="M 43.877 89.943 c -0.235 -0.023 -0.467 -0.06 -0.698 -0.097 C 43.411 89.882 43.642 89.921 43.877 89.943 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(251, 188, 4)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
                <path
                  d="M 42.83 89.793 c -0.303 -0.057 -0.602 -0.127 -0.897 -0.206 C 42.229 89.666 42.527 89.737 42.83 89.793 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(251, 188, 4)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
                <path
                  d="M 54.888 78.076 l 2.036 -1.63 l -23.848 1.63 c 6.794 0.091 16.995 2.045 14.665 6.578 c -1.526 2.874 -3.918 4.089 -6.849 4.604 C 42.174 89.73 43.554 90 45 90 c 6.585 0 11.924 -5.339 11.924 -11.924 H 54.888 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(227, 162, 6)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
                <path
                  d="M 43.461 9.488 C 43.97 9.448 44.482 9.422 45 9.422 C 44.482 9.422 43.97 9.449 43.461 9.488 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(251, 188, 4)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
                <path
                  d="M 67.799 66.937 c -9.006 -10.389 -11.965 -21.808 -12.631 -34.984 c 0 -9.44 -6.654 -17.702 -13.544 -22.244 c -10.37 1.773 -18.304 11.585 -18.304 23.425 c -0.608 12.038 -3.312 22.471 -11.539 31.962 c -1.258 1.376 -2.036 3.277 -2.036 5.376 c 0 4.199 3.112 7.603 6.951 7.603 H 45 h 23.317 c 1.068 -1.433 1.71 -3.261 1.71 -5.254 C 70.028 70.524 69.176 68.443 67.799 66.937 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(251, 188, 4)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
                <path
                  d="M 41.625 9.709 c 0.501 -0.086 1.009 -0.147 1.521 -0.195 C 42.634 9.561 42.126 9.623 41.625 9.709 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(251, 188, 4)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
                <path
                  d="M 78.219 65.096 c -8.228 -9.491 -10.932 -19.924 -11.539 -31.962 c 0 -13.096 -9.706 -23.713 -21.679 -23.713 c -1.148 0 -2.275 0.099 -3.375 0.288 c 6.89 4.542 11.498 12.804 11.498 22.244 c 0.665 13.176 3.625 24.596 12.631 34.984 c 1.377 1.506 2.228 3.587 2.228 5.885 c 0 1.993 -0.642 3.821 -1.71 5.254 h 7.032 c 3.839 0 6.951 -3.404 6.951 -7.603 C 80.255 68.373 79.477 66.472 78.219 65.096 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(227, 162, 6)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
              </g>
            </svg>{" "}
            <span className="absolute -top-1 font-semibold py-0.5 bg-white px-1.5 rounded-full text-xs -right-1.5">2</span>
          </button>

          <button className="font-sans border-2 p-2 rounded-full border-[#dd9710] relative text-[15px] text-[#dd9710]" aria-current="page">
            <BsHandbagFill size={20} />
            <span className="absolute -top-1 font-semibold py-0.5 bg-white px-1.5 rounded-full text-xs -right-1.5">2</span>
          </button>

          <button className="font-sans border-2 p-2 rounded-full border-[#dd9710] text-[15px] text-[#dd9710]" aria-current="page">
            <FaPhoneFlip size={20} />
          </button>

          <Dropdown type="menu">
            <DropdownTrigger>
              <Button isIconOnly color="default" radius="full" aria-label="Like">
                <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Action event example" onAction={(key) => alert(key)}>
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

export default Navigation;
