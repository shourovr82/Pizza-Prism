"use client";

import { FaCalendarDays } from "react-icons/fa6";
import Flatpickr from "react-flatpickr";
import { useState } from "react";
import "flatpickr/dist/themes/material_orange.css";
import "flatpickr/dist/flatpickr.css";
import { FaChevronDown } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { PiNotePencilDuotone } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";
const ReportSalesSummaryFilter = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (selectedDates: any) => {
    setSelectedDate(selectedDates);
  };
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <>
      <div className="flex gap-5 items-center">
        <div className="border border-[#ee8922] hover:shadow-lg w-[280px] hover:shadow-[#ee88222d]   overflow-hidden rounded-full  flex  items-center">
          <label htmlFor="date" className="cursor-pointer pl-3  mr-2">
            <FaCalendarDays className="text-[#7f7f7f]" />
          </label>
          <Flatpickr
            contentEditable={false}
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            options={{
              mode: "range",
              maxDate: new Date(),

              dateFormat: "d M, Y",
            }}
            className=" w-[80%] bg-transparent py-[7px]  cursor-pointer focus:!outline-none"
          />
          <label htmlFor="date" className="cursor-pointer">
            <FaChevronDown className="text-[#7f7f7f] mr-3" />
          </label>
        </div>

        {/* dropdown */}
        <div className="">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="border border-[#ee8922] hover:shadow-lg hover:shadow-[#ee88222d] px-6 py-[7px]  text-[#535353 text-base overflow-hidden rounded-full  flex  items-center"
                startContent={
                  <IoDocumentText size={20} className="text-[#7f7f7f]" />
                }
              >
                Export
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
              <DropdownItem
                key="new"
                shortcut="⌘N"
                startContent={<FaFilePdf className={iconClasses} />}
              >
                Export to PDF
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default ReportSalesSummaryFilter;
