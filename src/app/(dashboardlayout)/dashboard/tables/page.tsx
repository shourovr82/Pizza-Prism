/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input } from "@nextui-org/react";
import { Tabs, Tab, Chip } from "@nextui-org/react";
import { LuSearch } from "react-icons/lu";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_orange.css";
import "flatpickr/dist/flatpickr.css";
import { FaCalendarDays } from "react-icons/fa6";
import { MdOutdoorGrill, MdOutlineFreeCancellation, MdTableRestaurant } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import { globalAnimationDelay } from "@/utils/classes/GlobalAnimationTailwind";
import DashboardTablesLists from "@/components/dashboard/tables/DashboardTablesList";

const DashboardTables = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (selectedDates: any) => {
    setSelectedDate(selectedDates);
  };

  return (
    <>
      <section className="m-5  relative  rounded-2xl">
        <div className="grid  grid-cols-10 gap-5">
          {/* left side */}
          <div className="col-span-7   ">
            {/* tabs */}
            <div>
              <div className="grid grid-cols-5 w-full flex-col">
                <div className="col-span-3 ">
                  <Tabs
                    aria-label="Options"
                    color="warning"
                    variant="underlined"
                    classNames={{
                      tabList: "gap-6 w-full relative rounded-none p-0   border-divider",
                      cursor: "w-full bg-[#ec7905]",
                      tab: "max-w-fit px-0 h-12",
                      tabContent: "group-data-[selected=true]:text-[#ec7905]",
                    }}
                  >
                    <Tab
                      key="Indoor"
                      title={
                        <div className="flex items-center space-x-2">
                          <MdTableRestaurant size={18} />
                          <span>Indoor</span>
                          <Chip
                            size="sm"
                            variant="flat"
                            classNames={{
                              base: `group-data-[selected=true]:border group-data-[selected=true]:border-[#ec7905] border border-transparent ${globalAnimationDelay} `,
                              content: `group-data-[selected=true]:text-[#ec7905] group-data-[selected=true]:ring-[#ec7905] ${globalAnimationDelay}`,
                            }}
                          >
                            146
                          </Chip>
                        </div>
                      }
                    />
                    <Tab
                      key="Outdoor"
                      title={
                        <div className="flex items-center space-x-2">
                          <MdOutdoorGrill size={18} />
                          <span>Outdoor</span>
                          <Chip
                            size="sm"
                            variant="flat"
                            classNames={{
                              base: `group-data-[selected=true]:border group-data-[selected=true]:border-[#ec7905] border border-transparent  ${globalAnimationDelay} `,
                              content: `group-data-[selected=true]:text-[#ec7905] group-data-[selected=true]:ring-[#ec7905] ${globalAnimationDelay}`,
                            }}
                          >
                            184
                          </Chip>
                        </div>
                      }
                    />
                    <Tab
                      key="Cancelled"
                      title={
                        <div className="flex items-center space-x-2">
                          <MdOutlineFreeCancellation size={18} />
                          <span>Cancelled</span>
                          <Chip
                            size="sm"
                            variant="flat"
                            classNames={{
                              base: `group-data-[selected=true]:border group-data-[selected=true]:border-[#ec7905] border border-transparent ${globalAnimationDelay} `,
                              content: `group-data-[selected=true]:text-[#ec7905] group-data-[selected=true]:ring-[#ec7905] ${globalAnimationDelay}`,
                            }}
                          >
                            18
                          </Chip>
                        </div>
                      }
                    />
                  </Tabs>
                </div>
                {/* date */}
                <div className="col-span-2 grid grid-cols-5 gap-5">
                  <div
                    className=" col-span-3 border border-[#ee8922] hover:shadow-lg hover:shadow-[#ee88222d] pl-5 py-[7px] 
             overflow-hidden rounded-2xl  flex  items-center"
                  >
                    <label htmlFor="date" className="cursor-pointer mr-2">
                      <FaCalendarDays className="text-[#7f7f7f]" />
                    </label>

                    <Flatpickr
                      id="date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      options={{
                        mode: "single",
                        maxDate: new Date(),
                        dateFormat: "d M, Y",
                      }}
                      className=" w-full cursor-pointer focus:!outline-none"
                    />
                  </div>
                  <div
                    className="col-span-2 border border-[#ee8922] hover:shadow-lg hover:shadow-[#ee88222d] pl-5 py-[7px] 
             overflow-hidden rounded-2xl  flex  items-center"
                  >
                    <label htmlFor="date" className="cursor-pointer mr-2">
                      <PiClockCountdownFill size={25} className="text-[#7f7f7f]" />
                    </label>

                    <Flatpickr
                      id="date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      options={{
                        enableTime: true,
                        noCalendar: true, // This will hide the calendar
                        dateFormat: "H:i", // Set the time format
                        defaultDate: "12:00", // Set your default time here
                      }}
                      className="w-full cursor-pointer focus:!outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* table choose */}
            <DashboardTablesLists />
          </div>
          <div className="col-span-3 border h-40 rounded-2xl bg-white shadow-xl flex"></div>
        </div>

        {/* search and Filters */}
        {/* <div className="grid   grid-cols-5 gap-10 items-center">
          <div className="col-span-4">
            <Input
              isClearable
              type="text"
              className="hover:shadow-lg rounded-2xl  hover:shadow-[#ee88222d]"
              placeholder="Search Order No"
              labelPlacement="outside"
              startContent={
                <LuSearch className=" text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          <div className="col-span-1">
            <div className="border border-[#ee8922] hover:shadow-lg hover:shadow-[#ee88222d] pl-5 py-[7px] 
             overflow-hidden rounded-2xl  flex  items-center">
              <label htmlFor="date" className="cursor-pointer mr-2">
                <FaCalendarDays className="text-[#7f7f7f]" />
              </label>

              <Flatpickr
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
                options={{
                  mode: "single",
                  maxDate: new Date(),
                  dateFormat: "d M, Y",
                }}
                className=" w-full cursor-pointer focus:!outline-none"
              />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default DashboardTables;
