"use client";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <section className="bg-[#14181d]  font-sans text-sm pt-20 pb-5">
      <div className="responsive-section max-w-7xl  mx-auto max-md:px-3">
        {/* footer title */}
        <div className=" max-md:flex max-md:flex-col items-center space-y-5 xl:grid  xl:grid-cols-5 ">
          <div className="col-span-3 max-md:mb-2">
            <h1 className="font-fantasy max-md:text-5xl xl:text-2xl logoTitle selection:bg-[#f7870828]  ">
              Pizza Prism
            </h1>
          </div>
          <div className="col-span-2 max-md:w-full flex items-center">
            <input
              type="text"
              className="border-b-2  text-[#F78908] font-semibold shadow-inner shadow-[#1d140d4b] bg-[#ffffff05] border-[#F78908] lg:pb-0.5  w-full max-md:py-3.5 pt-2.5 focus:outline-none rounded-tl-xl  px-2 placeholder:text-[#54575a] placeholder:font-semibold placeholder:font-sans "
              placeholder="Enter Your Email Address"
            />
            <Button
              size="sm"
              className="rounded-none border-b-2 max-md:py-6 lg:py-[16px] bg-[#ffffff05] hover:bg-[#F78908] text-[#F78908]  font-bold px-5 hover:text-white border-[#F78908]  rounded-tr-xl"
            >
              SUBMIT
            </Button>
          </div>
        </div>
        {/* footer contents */}
        <div className=" max-md:mt-5 xl:mt-14 xl:grid grid-cols-10 gap-3">
          <div className="col-span-7 grid  grid-cols-2 max-lg:gap-5 xl:grid-cols-4">
            <div>
              <h2 className="text-[#fcfcfc] text-xl">Menu</h2>
              <div className="flex flex-col  mt-5">
                <Link href="/" className="text-[#969799]">
                  Pizza
                </Link>
                <Link href="/" className="text-[#969799]">
                  Wraps
                </Link>
                <Link href="/" className="text-[#969799]">
                  Sea Food
                </Link>
                <Link href="/" className="text-[#969799]">
                  Caizones
                </Link>
                <Link href="/" className="text-[#969799]">
                  Ice Creams
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-[#fcfcfc] text-xl">Restaurant</h2>
              <div className="flex flex-col  mt-5">
                <Link href="/" className="text-[#969799]">
                  About Us
                </Link>
                <Link href="/" className="text-[#969799]">
                  Menu
                </Link>
                <Link href="/" className="text-[#969799]">
                  Specials & Coupons
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-[#fcfcfc] text-xl">Support</h2>
              <div className="flex flex-col  mt-5">
                <Link href="/" className="text-[#969799]">
                  How to order
                </Link>
                <Link href="/" className="text-[#969799]">
                  Where we deliver
                </Link>
                <Link href="/" className="text-[#969799]">
                  FAQs
                </Link>
                <Link href="/" className="text-[#969799]">
                  Contact us
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-[#fcfcfc] text-xl">Opening Hours</h2>
              <div className="flex flex-col  mt-5">
                <Link href="/" className="text-[#969799]">
                  Week days: 10:30 - 9:00
                </Link>
                <Link href="/" className="text-[#969799]">
                  Saturdays: 11:30 - 10:30
                </Link>
                <Link href="/" className="text-[#969799]">
                  Sundays: 11:30 - 10:30
                </Link>
              </div>
            </div>
          </div>
          {/* news letter */}
          <div className="col-span-3 max-lg:mt-5">
            <h2 className="text-[#fcfcfc] max-lg:text-center max-lg:text-3xl lg:text-xl">
              Newsletter
            </h2>
            <div className="mt-7 relative flex items-center w-full">
              <input
                type="text"
                className="w-[96%] bg-[#191d21] border  border-[#F78908] focus:outline-none pl-2 pr-[85px] text-[#F78908] py-3 rounded-full"
                placeholder="Enter Your Email"
              />
              <Button className=" absolute border border-transparent  right-3 bg-[#F78908] rounded-full py-[22px]  px-5">
                Join Us
              </Button>
            </div>
          </div>
        </div>
        <div className="p-3 max-md:mt-5 xl:mt-10">
          <Divider
            orientation="horizontal"
            className="bg-[#e3e3e35e] h-[2px]"
          />
          <p className="max-md:text-xs xl:text-sm text-[#d8cab0b9] font-thin  flex max-md:flex-col max-md:items-center justify-center text-center xl:items-center  gap-3 font-Barriecito max-md:mt-5 xl:mt-10">
            Copyright 2023, Prism House of Pizza, All Rights Reserved{" "}
            <a
              target="_blank"
              href="https://github.com/Code-Quivers"
              rel="noopener noreferrer"
            >
              <span className="text-[#e3e3e35e]">
                <SiGithub size={20} />
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
