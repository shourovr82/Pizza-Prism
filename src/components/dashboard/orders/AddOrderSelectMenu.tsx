/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button, Card, CardBody, CardFooter, CheckboxGroup, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { useState } from "react";

export const tableSlot = [
  { label: "T1", value: "T1" },
  { label: "T2", value: "T2" },
  { label: "T3", value: "T3" },
  { label: "T4", value: "T4" },
  { label: "T5", value: "T5" },
  { label: "T6", value: "T6" },
  { label: "T7", value: "T7" },
  { label: "T8", value: "T8" },
  { label: "T9", value: "T9" },
  { label: "T10", value: "T10" },
  { label: "T11", value: "T11" },
  { label: "T12", value: "T12" },
];
export const customerList = [
  { label: "John Doe", value: "John Doe" },
  { label: "Jane Smith", value: "Jane Smith" },
  { label: "Bob Johnson", value: "Bob Johnson" },
  { label: "Alice Brown", value: "Alice Brown" },
  { label: "Charlie Davis", value: "Charlie Davis" },
  { label: "Eva Wilson", value: "Eva Wilson" },
  { label: "Frank Miller", value: "Frank Miller" },
  { label: "Grace Taylor", value: "Grace Taylor" },
  { label: "Henry Moore", value: "Henry Moore" },
  { label: "Isabel Robinson", value: "Isabel Robinson" },
];

export const timeSlot = [
  { label: "8:00 AM", value: "8:00 AM" },
  { label: "8:30 AM", value: "8:30 AM" },
  { label: "9:00 AM", value: "9:00 AM" },
  { label: "9:30 AM", value: "9:30 AM" },
  { label: "10:00 AM", value: "10:00 AM" },
  { label: "10:30 AM", value: "10:30 AM" },
  { label: "11:00 AM", value: "11:00 AM" },
  { label: "11:30 AM", value: "11:30 AM" },
  { label: "12:00 PM", value: "12:00 PM" },
  { label: "12:30 PM", value: "12:30 PM" },
  { label: "1:00 PM", value: "1:00 PM" },
  { label: "1:30 PM", value: "1:30 PM" },
  { label: "2:00 PM", value: "2:00 PM" },
  { label: "2:30 PM", value: "2:30 PM" },
];

const AddOrderSelectMenu = () => {
  const [groupSelected, setGroupSelected] = useState([]);

  const router = useRouter();
  const usersArray = [
    {
      value: "junior",
      user: {
        name: "Junior Garcia",
        avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
        username: "jrgarciadev",
        url: "https://twitter.com/jrgarciadev",
        role: "Software Developer",
        status: "Active",
      },
      statusColor: "secondary",
    },
    {
      value: "anotherUser",
      user: {
        name: "Another User",
        avatar: "https://example.com/avatar.jpg",
        username: "anotheruser",
        url: "https://twitter.com/anotheruser",
        role: "Another Role",
        status: "Inactive",
      },
      statusColor: "primary",
    },
    {
      value: "johnDoe",
      user: {
        name: "John Doe",
        avatar: "https://example.com/johndoe.jpg",
        username: "johndoe",
        url: "https://twitter.com/johndoe",
        role: "Web Developer",
        status: "Away",
      },
      statusColor: "warning",
    },
    // Add more objects as needed
    {
      value: "aliceSmith",
      user: {
        name: "Alice Smith",
        avatar: "https://example.com/alicesmith.jpg",
        username: "alicesmith",
        url: "https://twitter.com/alicesmith",
        role: "Designer",
        status: "Active",
      },
      statusColor: "success",
    },
    {
      value: "bobJohnson",
      user: {
        name: "Bob Johnson",
        avatar: "https://example.com/bobjohnson.jpg",
        username: "bobjohnson",
        url: "https://twitter.com/bobjohnson",
        role: "QA Engineer",
        status: "Offline",
      },
      statusColor: "danger",
    },
    {
      value: "bobJohnson",
      user: {
        name: "Bob Johnson",
        avatar: "https://example.com/bobjohnson.jpg",
        username: "bobjohnson",
        url: "https://twitter.com/bobjohnson",
        role: "QA Engineer",
        status: "Offline",
      },
      statusColor: "danger",
    },
    // Add more objects as needed
  ];

  return (
    <section className=" m-3 p-5 rounded-lg bg-white border">
      {/* section title */}
      <div>
        <h2 className="text-xl font-semibold">Select Menu</h2>
        <p className="text-[#90919c]">{`There's just few steps left to complete your purchase.`}</p>
      </div>
      {/* main */}
      <div className="flex flex-col  mt-5 gap-1 w-full">
        <CheckboxGroup
          className="gap-1"
          orientation="horizontal"
          value={groupSelected}
          // @ts-ignore
          onChange={setGroupSelected}
        >
          <div className="grid grid-cols-6 gap-5  w-full">
            {usersArray?.map((single) => (
              <div key={Math.random()}>
                <div className="w-full flex justify-between gap-2">
                  <Card shadow="sm" className="w-full" isPressable onPress={() => console.log("item pressed")}>
                    <CardBody className="overflow-visible p-0">
                      <Image shadow="sm" radius="lg" width="100%" alt={"item.title"} className="w-full object-cover h-[140px]" src={"item.img"} />
                    </CardBody>
                    <CardFooter className="text-small ">
                      <div>
                        <b>{"item.title"}</b>
                        <p className="text-default-500 text-start ">200$</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </CheckboxGroup>
      </div>
      <div className="mt-5 flex justify-end">
        <Button
          onClick={() => {
            router.push("/dashboard/orders/add-order?tab=3");
          }}
          variant="shadow"
          className="text-white font-medium  "
          color="warning"
          size="lg"
        >
          Book & Order
        </Button>
      </div>
    </section>
  );
};

export default AddOrderSelectMenu;
