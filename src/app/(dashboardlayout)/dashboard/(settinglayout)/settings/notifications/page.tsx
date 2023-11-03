"use client";

import { useState } from "react";
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import { FaCalendarDays } from "react-icons/fa6";
import { MdEditNotifications } from "react-icons/md";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import "flatpickr/dist/flatpickr.css";
import { HiSelector } from "react-icons/hi";

export const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    value: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    value: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

const NotificationPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (selectedDates: any) => {
    setSelectedDate(selectedDates);
  };

  const schedules = [
    {
      notificationTime: "6:20 PM",
      notificationDate: "TODAY",
      notificationMessage:
        "Charles Dukus Concert CANCELLED 😥. For More Information go to https://www.shafin.com",
    },
    {
      notificationTime: "8:00 AM",
      notificationDate: "SATURDAY NOVEMBER 12, 2023",
      notificationMessage:
        "Family Picnic Day! Don't forget to pack your picnic basket and bring your favorite games.",
    },
    {
      notificationTime: "2:30 PM",
      notificationDate: "SUNDAY DECEMBER 25, 2023",
      notificationMessage:
        "Merry Christmas! Enjoy the day with your loved ones and share the joy of the season.",
    },
    {
      notificationTime: "10:00 AM",
      notificationDate: "FRIDAY JUNE 16, 2023",
      notificationMessage:
        "Happy Birthday! Treat yourself to something special on your special day.",
    },
    {
      notificationTime: "3:45 PM",
      notificationDate: "THURSDAY AUGUST 10, 2023",
      notificationMessage:
        "Vacation Reminder: Pack your bags and get ready for an amazing adventure!",
    },
    {
      notificationTime: "8:00 AM",
      notificationDate: "SATURDAY NOVEMBER 12, 2023",
      notificationMessage:
        "Family Picnic Day! Don't forget to pack your picnic basket and bring your favorite games.",
    },
    {
      notificationTime: "2:30 PM",
      notificationDate: "SUNDAY DECEMBER 25, 2023",
      notificationMessage:
        "Merry Christmas! Enjoy the day with your loved ones and share the joy of the season.",
    },
    {
      notificationTime: "10:00 AM",
      notificationDate: "FRIDAY JUNE 16, 2023",
      notificationMessage:
        "Happy Birthday! Treat yourself to something special on your special day.",
    },
    {
      notificationTime: "3:45 PM",
      notificationDate: "THURSDAY AUGUST 10, 2023",
      notificationMessage:
        "Vacation Reminder: Pack your bags and get ready for an amazing adventure!",
    },
    {
      notificationTime: "1:15 PM",
      notificationDate: "SUNDAY OCTOBER 1, 2023",
      notificationMessage:
        "Start of a new month! Plan your goals and activities for October.",
    },
    {
      notificationTime: "9:30 AM",
      notificationDate: "SATURDAY FEBRUARY 14, 2023",
      notificationMessage:
        "Happy Valentine's Day! Don't forget to show your love to that special someone.",
    },
  ];

  return (
    <div className=" shadow-lg  bg-[#ffffff]  rounded-2xl h-full p-5">
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
      <div className="grid relative grid-cols-6 mt-5 gap-10  ">
        <div className="col-span-4">
          <div>
            <h3>Create New Notification</h3>
          </div>
          <div>
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
                          dateFormat: "H:i:K",
                        }}
                        className=" w-full cursor-pointer focus:!outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4 gap-4 items-center">
                  <Button
                    radius="lg"
                    variant="shadow"
                    className="bg-orange-500 text-white  text-md border-orange-500"
                  >
                    Save Notification
                  </Button>
                </div>
              </div>
              {/* submit and cancel buttons */}
            </form>
          </div>
          {/* others */}
          <div className="mt-5">
            <div className="flex  justify-between items-center">
              <h3>Scheduled Notifications</h3>
              <div>
                <Select
                  placeholder="Quick Actions"
                  labelPlacement="outside"
                  className="w-[200px]"
                  // disableSelectorIconRotation
                  variant="bordered"
                  selectorIcon={<HiSelector />}
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            {/* schedules */}
            <div className="mt-5 space-y-4">
              {schedules?.map((schedule, index) => (
                <div
                  key={index}
                  className="border rounded-md shadow-lg bg-[#fafafa]  "
                >
                  <div className="border-b  w-full ">
                    <p className="px-2 text-xs py-1 font-medium">
                      {schedule.notificationDate}
                    </p>
                  </div>
                  <div className="grid items-center  grid-cols-6  gap-2  ">
                    <div className="col-span-1 p-2 py-4  flex flex-col justify-center  items-center">
                      <p className="text-[#112b6a] font-semibold">
                        {schedule.notificationTime}
                      </p>
                    </div>
                    <div className="col-span-5 p-2 ">
                      <h4 className=" text-sm font-medium">
                        {schedule.notificationMessage}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 h-screen sticky top-10">
          <div>
            <h3>Preview</h3>
          </div>

          <div
            className="relative flex justify-center mt-2.5 h-[500px] w-[250px]  border-4 border-black rounded-2xl bg-gray-50"
            style={{
              boxShadow: "5px 5px 10px 5px rgb(209, 218, 218)",
            }}
          >
            <span className="border border-black bg-black w-28 h-5 rounded-br-xl rounded-bl-xl"></span>

            <span className="absolute -right-2 top-20  border-4 border-black h-10 rounded-md"></span>
            <span className="absolute -right-2 top-44  border-4 border-black h-24 rounded-md"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
