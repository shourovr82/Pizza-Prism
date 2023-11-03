"use client";

import { Button, Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { BiMailSend, BiRestaurant } from "react-icons/bi";
import { PiInstagramLogoFill, PiPhoneFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { IoRestaurantSharp } from "react-icons/io5";

const MyRestaurantPage = () => {
  return (
    <div className=" shadow-lg  bg-[#ffffff]  rounded-2xl h-[94vh] p-5">
      <div className="flex justify-end ">
        <h1 className="text-2xl flex gap-5 items-center font-semibold text-[#333333]">
          <IoRestaurantSharp className="text-2xl  pointer-events-none flex-shrink-0" />
          Restaurant Information
        </h1>
      </div>
      {/* form */}
      <form>
        {/* select gender */}

        {/* other forms */}
        <div className="mt-5">
          <div className="flex flex-col gap-6">
            <div className=" w-full  mb-6 md:mb-0 gap-4">
              <Input
                type="text"
                label="Restaurant Name"
                placeholder="Restaurant Name"
                labelPlacement="outside"
                startContent={
                  <BiRestaurant className="text-2xl text-[#f97316] pointer-events-none flex-shrink-0" />
                }
              />
            </div>
            <div className="grid grid-cols-2 w-full  mb-6 md:mb-0 gap-4">
              <Input
                type="text"
                label="Restaurant Email"
                placeholder="Restaurant Email"
                labelPlacement="outside"
                startContent={
                  <BiMailSend className="text-2xl  pointer-events-none flex-shrink-0 text-[#1591d4]" />
                }
              />
              <Input
                type="text"
                label="Restaurant Secondary Email"
                placeholder="Restaurant Email"
                labelPlacement="outside"
                startContent={
                  <BiMailSend className="text-2xl  pointer-events-none flex-shrink-0 text-green-700" />
                }
              />
            </div>

            <div className="grid grid-cols-2 items-center w-full  mb-6 md:mb-0 gap-4">
              <Input
                type="text"
                label="Contact Number"
                placeholder="+8801317441769"
                labelPlacement="outside"
                startContent={
                  <PiPhoneFill className="text-2xl text-[#1591d4] pointer-events-none flex-shrink-0" />
                }
              />
              <div>
                <Input
                  type="text"
                  label="Emergency Contact Number"
                  placeholder="+8801931016701"
                  labelPlacement="outside"
                  startContent={
                    <PiPhoneFill className="text-2xl text-[#13974a] pointer-events-none flex-shrink-0" />
                  }
                />{" "}
              </div>
              <div>
                <Input
                  type="text"
                  label="Facebook Page"
                  placeholder="Restaurant Facebook Page Link"
                  labelPlacement="outside"
                  startContent={
                    <FaFacebook className="text-2xl text-[#0866ff] pointer-events-none flex-shrink-0" />
                  }
                />{" "}
              </div>
              <div>
                <Input
                  type="text"
                  label="Instagram Page"
                  placeholder="Restaurant Instagram Page Link"
                  labelPlacement="outside"
                  startContent={
                    <PiInstagramLogoFill className="text-2xl text-[#cb2e7c] pointer-events-none flex-shrink-0" />
                  }
                />{" "}
              </div>
            </div>

            <div className=" w-full  mb-6 md:mb-0 gap-4">
              <Textarea
                label="About Restaurant"
                placeholder="Details About Restaurant"
                labelPlacement="outside"
              />
            </div>
          </div>
        </div>
        {/* submit and cancel buttons */}
        <div className="flex justify-between mt-8 gap-4 items-center">
          <Button
            fullWidth
            radius="lg"
            variant="bordered"
            className="text-orange-500 font-semibold text-md border-orange-500"
          >
            Discard Changes
          </Button>
          <Button
            fullWidth
            radius="lg"
            variant="shadow"
            className="bg-orange-500 text-white font-semibold text-md border-orange-500"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MyRestaurantPage;
