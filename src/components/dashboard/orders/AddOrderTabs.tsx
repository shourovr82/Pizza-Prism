"use client";

import { Button, Chip } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import OrderTables from "./OrderTables";

const AddOrderTabs = () => {
  const navigate = useRouter();
  const tabParams = useSearchParams().get("tab");

  return (
    <>
      <div className="flex items-center border-b py-1.5 bg-white  ">
        {/* Step 1: Choose a Table */}
        <div className="flex  gap-3 items-center">
          <div className="">
            <Button
              onClick={() => {
                navigate.push("/dashboard/orders/add-order?tab=1");
              }}
              variant="light"
              radius="full"
              color="warning"
              className={`flex text-md gap-2 items-center font-semibold`}
            >
              <Chip
                className={tabParams === "1" || "2" || "3" ? "text-white" : "text-black"}
                color={tabParams === "1" || "2" || "3" ? "warning" : "default"}
                variant="solid"
              >
                1
              </Chip>
              Choose a Table
            </Button>
          </div>
        </div>
        {/* border gap */}
        <div className="w-[100px] border-b-2 border-dashed" />
        {/* Step 2: Choose a Customer */}
        <div className="flex  gap-3 items-center">
          <div className="">
            <Button
              onClick={() => {
                navigate.push("/dashboard/orders/add-order?tab=2");
              }}
              radius="full"
              variant="light"
              color={tabParams === "2" || tabParams === "3" ? "warning" : "default"}
              className="flex text-md gap-2 items-center font-semibold"
            >
              <Chip
                className={tabParams === "2" || tabParams === "3" ? "text-white" : "text-black/60"}
                color={tabParams === "2" || tabParams === "3" ? "warning" : "default"}
                variant="solid"
              >
                2
              </Chip>
              Choose a Customer
            </Button>
          </div>
        </div>
        {/* border gap */}
        <div className="w-[100px] border-b-2 border-dashed" />
        {/* Step 3: Choose a Menu */}
        <div className="flex  gap-3 items-center">
          <div className="">
            <Button
              radius="full"
              onClick={() => {
                navigate.push("/dashboard/orders/add-order?tab=3");
              }}
              variant="light"
              color={tabParams === "3" ? "warning" : "default"}
              className="flex text-md gap-2 items-center font-semibold"
            >
              <Chip className={tabParams === "3" ? "text-white" : "text-black/60"} color={tabParams === "3" ? "warning" : "default"} variant="solid">
                3
              </Chip>
              Select Menu
            </Button>
          </div>
        </div>
      </div>
      <div>{tabParams === "1" && <OrderTables />}</div>
    </>
  );
};

export default AddOrderTabs;
