"use client";

import { useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import { FaCalendarDays } from "react-icons/fa6";
import { MdEditNotifications } from "react-icons/md";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import "flatpickr/dist/flatpickr.css";

const NotificationPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (selectedDates: any) => {
    setSelectedDate(selectedDates);
  };

  return (
    <div className=" shadow-lg  bg-[#ffffff]  rounded-2xl h-[94vh] p-5">
      <div className="flex  ">
        <h1 className="text-xl flex gap-2 items-center font-semibold text-[#333333]">
          <MdEditNotifications
            size={22}
            className="pointer-events-none flex-shrink-0"
          />
          Push Notifications
        </h1>
      </div>
      {/* form */}
      <div className="grid grid-cols-6 mt-5 gap-10  ">
        <div className="col-span-4">
          <div>
            <h3>Create New Notification</h3>
          </div>

          <form>
            {/* other forms */}
            <div className="mt-3 border bg-white px-3 py-3 shadow-lg rounded-lg">
              <div className="flex flex-col gap-3">
                <div className=" w-full  mb-6 md:mb-0 gap-4">
                  <Textarea
                    label="Message"
                    placeholder="Enter your notification message..."
                    labelPlacement="outside"
                    minRows={5}
                  />
                </div>
                <div className="w-full grid grid-cols-2  mb-6 md:mb-0 gap-4">
                  <div className="border border-[#ee8922] hover:shadow-lg hover:shadow-[#ee88222d] pl-5 py-[7px]  overflow-hidden rounded-2xl  flex  items-center">
                    <label htmlFor="date" className="cursor-pointer mr-2">
                      <FaCalendarDays className="text-[#7f7f7f]" />
                    </label>

                    <Flatpickr
                      id="date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      options={{
                        mode: "single",
                        minDate: "today",
                        dateFormat: "d M, Y",
                      }}
                      className=" w-full cursor-pointer focus:!outline-none"
                    />
                  </div>
                  <div className="border border-[#ee8922] hover:shadow-lg hover:shadow-[#ee88222d] pl-5 py-[7px]  overflow-hidden rounded-2xl  flex  items-center">
                    <label htmlFor="date" className="cursor-pointer mr-2">
                      <FaCalendarDays className="text-[#7f7f7f]" />
                    </label>

                    <Flatpickr
                      id="date"
                      onChange={handleDateChange}
                      options={{
                        mode: "single",
                        enableTime: true,
                        noCalendar: true,
                        maxDate: new Date(),
                        dateFormat: "H:i",
                        time_24hr: true,
                      }}
                      className=" w-full cursor-pointer focus:!outline-none"
                    />
                  </div>
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
        <div className="col-span-2">
          <div>
            <h3>Preview</h3>
          </div>

          {/* <div
            className="relative flex justify-center h-[520px] w-[250px]  border-4 border-black rounded-2xl bg-gray-50"
            style={{
              boxShadow: "10px 10px 5px 12px rgb(209, 218, 218)",
            }}
          >
            <span className="border border-black bg-black w-28 h-5 rounded-br-xl rounded-bl-xl"></span>

            <span className="absolute -right-2 top-20  border-4 border-black h-10 rounded-md"></span>
            <span className="absolute -right-2 top-44  border-4 border-black h-24 rounded-md"></span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
