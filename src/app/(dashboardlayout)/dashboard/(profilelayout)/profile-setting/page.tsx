"use client";

import { Button } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { BiMailSend } from "react-icons/bi";

import { PiPhoneFill } from "react-icons/pi";

import { FaLocationDot } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";

const ProfilePage = () => {
  const [selected, setSelected] = useState("london");

  return (
    <div className="border rounded-2xl h-[94vh] p-5">
      <div className="flex justify-end ">
        <h1 className="text-2xl flex gap-5 items-center font-semibold text-[#333333]">
          <FaUserEdit className="text-2xl  pointer-events-none flex-shrink-0" />
          Personal Information
        </h1>
      </div>
      {/* form */}
      <form>
        {/* select gender */}
        <div>
          <RadioGroup
            label="Select your Gender"
            value={selected}
            orientation="horizontal"
            onValueChange={setSelected}
          >
            <Radio color="success" value="buenos-aires">
              Male
            </Radio>
            <Radio color="danger" value="sydney">
              Female
            </Radio>
            <Radio color="secondary" value="san-francisco">
              Others
            </Radio>
          </RadioGroup>
        </div>
        {/* other forms */}
        <div className="mt-5">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 w-full  mb-6 md:mb-0 gap-4">
              <Input
                type="text"
                label="First Name"
                placeholder="Your First Name"
                labelPlacement="outside"
              />
              <Input
                type="text"
                label="Last Name"
                placeholder="Your Last Name"
                labelPlacement="outside"
              />
            </div>
            <div className=" w-full  mb-6 md:mb-0 gap-4">
              <Input
                type="email"
                label="Email"
                color="success"
                placeholder="you@example.com"
                labelPlacement="outside"
                startContent={
                  <BiMailSend className="text-2xl  pointer-events-none flex-shrink-0 text-green-700" />
                }
              />
            </div>
            <div className=" w-full  mb-6 md:mb-0 gap-4">
              <Input
                type="text"
                label="Address"
                placeholder="Your Address"
                labelPlacement="outside"
              />
            </div>
            <div className="grid grid-cols-2 items-center w-full  mb-6 md:mb-0 gap-4">
              <Input
                type="text"
                label="Phone Number"
                placeholder="+8801317441769"
                labelPlacement="outside"
                startContent={
                  <PiPhoneFill className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />{" "}
              <div>
                <label className="text-sm font-medium" htmlFor="dateOfBirth">
                  Date Of Birth
                </label>
                <br />
                {/* <DatePicker
                  id="dateOfBirth"
                  oneTap
                  appearance="subtle"
                  className=" rounded-2xl hover:rounded-2xl mt-0.5 bg-[#f4f4f5]"
                  placement="auto"
                  size="lg"
                  style={{ width: "100%" }}
                /> */}
              </div>
              <Input
                type="text"
                label="Location"
                placeholder="Your Location"
                labelPlacement="outside"
                endContent={
                  <FaLocationDot className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Input
                type="text"
                label="Postal Code"
                placeholder="Your Postal Code..."
                labelPlacement="outside"
                endContent={
                  <FaLocationDot className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
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

export default ProfilePage;
