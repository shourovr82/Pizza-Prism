import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  User,
  Avatar,
} from "@nextui-org/react";

import { FaPhoneFlip } from "react-icons/fa6";
import { BsHandbagFill } from "react-icons/bs";

const Navigation = () => {
  return (
    <div className=" bg-[#1b2023] shadow-lg shadow-[#1415129c] flex py-4 justify-center">
      <Navbar maxWidth="xl" className="bg-transparent   ">
        <NavbarContent className="" justify="start">
          <NavbarBrand className="">
            <p className="font-fantasy text-xl logoTitle ">Pizza Prism</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem isActive>
            <Link
              href="#"
              className="font-sans text-[15px] text-[#d1710c]"
              aria-current="page"
            >
              Home
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
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
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
              >
                Specials and Coupons
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              >
                Contact
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem isActive>
            <Link
              href="#"
              className="text-[#d8d9d9] text-[15px]   font-sans font-[400]"
            >
              Specials and Coupons
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#"
              className="text-[#d8d9d9] text-[15px]   font-sans font-[400]"
            >
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="items-center gap-4 flex" justify="end">
          <NavbarItem className="">
            <Link
              href="#"
              className="font-sans border-2 p-2 rounded-full border-[#dd9710] relative text-[15px] text-[#dd9710]"
              aria-current="page"
            >
              <BsHandbagFill size={20} />
              <span className="absolute -top-1 font-semibold py-0.5 bg-white px-1.5 rounded-full text-xs -right-1.5">
                2
              </span>
            </Link>
          </NavbarItem>
          <NavbarItem className="">
            <Link
              href="#"
              className="font-sans border-2 p-2 rounded-full border-[#dd9710] text-[15px] text-[#dd9710]"
              aria-current="page"
            >
              <FaPhoneFlip size={20} />
            </Link>
          </NavbarItem>
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
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Navigation;
