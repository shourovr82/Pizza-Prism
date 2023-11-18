"use client";

import { CustomRadio } from "@/components/dashboard/appearance/CustomCheckBox";
import {
  Checkbox,
  RadioGroup,
  Select,
  SelectItem,
  SelectedItems,
} from "@nextui-org/react";
import { VscSymbolColor } from "react-icons/vsc";
import lightModeImg from "@/assets/dashboard/settings/lightMode.png";
import Image from "next/image";
import { HiChevronUpDown } from "react-icons/hi2";
import { User, users } from "@/components/dashboard/appearance/data";

const AppearancePage = () => {
  return (
    <div className=" shadow-lg  bg-[#ffffff]  rounded-2xl h-[94vh] p-5">
      <div className="flex justify-end border-b pb-2 mb-2 ">
        <h1 className="text-2xl flex gap-5 items-center font-semibold text-[#333333]">
          <VscSymbolColor className="text-2xl  text-[#f97316] pointer-events-none flex-shrink-0" />
          Appearance
        </h1>
      </div>
      {/* section*/}
      <section className="space-y-5">
        <div>
          <h1 className="text-xl flex gap-5 items-center font-semibold text-[#333333]">
            Theme
          </h1>
        </div>
        <div className="flex flex-col border-b  gap-1 w-full">
          <RadioGroup
            color="warning"
            className="pb-5"
            size="lg"
            orientation="horizontal"
          >
            <CustomRadio value="free">
              <div>
                <Image width={300} src={lightModeImg} alt="" />
              </div>
              <div>
                <h2>Shafin</h2>
              </div>
            </CustomRadio>
            <CustomRadio value="pro">
              <div>
                <Image width={300} src={lightModeImg} alt="" />
              </div>
              <div>
                <h2>Shafin</h2>
              </div>
            </CustomRadio>
            <CustomRadio value="enterprise">
              <div>
                <Image width={300} src={lightModeImg} alt="" />
              </div>
              <div>
                <h2>Shafin</h2>
              </div>
            </CustomRadio>
          </RadioGroup>
        </div>
        {/* others */}
        <div className="flex justify-between border-b pb-5 items-center">
          <div>
            <h3 className="text-lg">Accent</h3>
            <p className="text-[#808080] text-sm">
              Highlight color for objects like Buttons
            </p>
          </div>

          <Select
            items={users}
            labelPlacement="outside"
            classNames={{
              base: "max-w-xs",
              trigger: "h-12",
            }}
            selectorIcon={<HiChevronUpDown />}
            renderValue={(items: SelectedItems<User>) => {
              return items.map((item) => (
                <div key={item.key} className="flex items-center gap-2">
                  <Checkbox defaultSelected radius="full" />

                  {/* <Avatar
                    alt={item.data?.name}
                    className="flex-shrink-0"
                    size="sm"
                    src={item.data?.avatar}
                  /> */}
                  <div className="flex flex-col">
                    <span className="text-base font-medium">
                      {item.data?.name}
                    </span>
                  </div>
                </div>
              ));
            }}
          >
            {(user) => (
              <SelectItem key={user.id} textValue={user.name}>
                <div className="flex gap-2 items-center">
                  {" "}
                  <Checkbox defaultSelected radius="full" />
                  {/* <Avatar
                    alt={user.name}
                    className="flex-shrink-0"
                    size="sm"
                    src={user.avatar}
                  /> */}
                  <div className="flex flex-col">
                    <span className="text-small">{user.name}</span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
      </section>
    </div>
  );
};

export default AppearancePage;
