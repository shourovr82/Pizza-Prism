"use client";
import { Button, Input, Select, SelectItem, Selection } from "@nextui-org/react";
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

const ChooseCustomer = () => {
  const [values, setValues] = useState<Selection>(new Set(["T1", "T9"]));

  const router = useRouter();

  return (
    <section className=" m-3 p-5 rounded-lg bg-white border">
      {/* section title */}
      <div>
        <h2 className="text-xl font-semibold">Choose a Customer</h2>
        <p className="text-[#90919c]">{`There's just few steps left to complete your purchase.`}</p>
      </div>
      {/* main */}
      {/* table and customer */}
      <div className="grid grid-cols-6 gap-5 mt-5">
        {/* table select */}
        <div className="col-span-2">
          <Select
            // isDisabled={true}
            // color="primary"
            labelPlacement="outside"
            label="Table Selected"
            selectionMode="multiple"
            placeholder="Select an animal"
            selectedKeys={values}
            // onSelectionChange={setValues}
          >
            {tableSlot.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        {/* customer select */}
        <div className="col-span-2">
          <Select labelPlacement="outside" label="Select Customer" placeholder="Select a Customer">
            {customerList?.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        {/* time select */}
        <div className="col-span-2">
          <Select labelPlacement="outside" label="Slot Time" placeholder="Select your preferred time slot">
            {timeSlot?.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      {/* guest */}
      <div className="mt-5">
        <div>
          <h2 className="text-sm font-semibold">Guest</h2>
        </div>
        {/*  */}
        <div className="grid grid-cols-8 gap-3 ">
          <Button fullWidth={true}>1</Button>
          <Button fullWidth={true}>2</Button>
          <Button fullWidth={true}>3</Button>
          <Button fullWidth={true}>4</Button>
          <Button fullWidth={true}>5</Button>
          <Button fullWidth={true}>6</Button>
          <Button fullWidth={true}>7</Button>
          <Button fullWidth={true}>8</Button>
        </div>
      </div>
      <div className="mt-5">
        <Input fullWidth={true} type="number" min={1} max={20} placeholder="Custom total guest" />
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
          Next
        </Button>
      </div>
    </section>
  );
};

export default ChooseCustomer;
