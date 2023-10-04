import DashboardLayout from "@/components/Layouts/Dashboard/DashboardLayout";
import DashboardProfileLayout from "@/components/Layouts/Dashboard/DashboardProfileLayout";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { RiLockPasswordFill } from "react-icons/ri";
import DeviceActivity from "@/components/dashboard/profileSetting/DeviceActivity";
import { BsWindows } from "react-icons/bs";

const ProfilePage = () => {
  return (
    <div className="border rounded-2xl  sticky top-0 p-5">
      <div className="flex justify-end ">
        <h1 className="text-2xl flex gap-5 items-center font-semibold text-[#333333]">
          <RiLockPasswordFill className="text-2xl  pointer-events-none flex-shrink-0" />
          Login & Password
        </h1>
      </div>
      {/* form */}
      <form>
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
            </div>
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
          </div>
        </div>
        {/* submit and cancel buttons */}
        <div className="flex w-full  justify-end mt-8 gap-4 items-center">
          <Button
            radius="lg"
            variant="shadow"
            className="w-[50%] bg-orange-500 text-white font-semibold text-md border-orange-500"
          >
            Change Password
          </Button>
        </div>
      </form>
      {/* logged in devices */}
      <div className="flex   my-5">
        <h1 className="text-2xl flex gap-5 items-center font-semibold text-[#333333]">
          <BsWindows className="text-2xl  pointer-events-none flex-shrink-0" />
          Device Activity
        </h1>
      </div>
      {/* device list */}
      <div>
        <DeviceActivity />
      </div>
    </div>
  );
};

export default ProfilePage;
ProfilePage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      <DashboardProfileLayout>{page}</DashboardProfileLayout>
    </DashboardLayout>
  );
};
