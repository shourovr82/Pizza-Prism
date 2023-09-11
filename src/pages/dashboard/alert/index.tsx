import DashboardLayout from "@/components/Layouts/Dashboard/DashboardLayout";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import React from "react";

const AlertPage = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="m-5 ">
      <div>
        <Accordion variant="splitted" selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="Order #5490024"
            startContent={
              <CheckIcon className="bg-[#54ca92] h-12 w-12 p-2 rounded-full  text-white" />
            }
            title={
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-[#383838] text-lg font-semibold">
                    Order #5490023
                  </h2>
                  <p className="text-sm text-[#9b9b9b] font-medium">
                    has been paid successfully
                  </p>
                </div>
                <div className="mr-2 text-end space-y-2.5">
                  <p className="text-sm text-[#9b9b9b] font-medium">10m ago</p>
                  <div className="flex items-center gap-4">
                    <h2 className="text-[#383838] text-lg font-semibold">
                      $40.49
                    </h2>
                    <p className="bg-[#f5f5f5] px-2 py-1 rounded-xl text-sm font-medium">
                      Debit Card
                    </p>
                  </div>
                </div>
              </div>
            }
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Order #5490024"
            startContent={
              <XMarkIcon className="bg-[#eb4335] h-12 w-12 p-2 rounded-full  text-white" />
            }
            title={
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-[#383838] text-lg font-semibold">
                    Order #5490023
                  </h2>
                  <p className="text-sm text-[#9b9b9b] font-medium">
                    had 2 items canceled
                  </p>
                </div>
                <div className="mr-2 text-end space-y-2.5">
                  <p className="text-sm text-[#9b9b9b] font-medium">20m ago</p>
                </div>
              </div>
            }
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Order #5490024"
            startContent={
              <CheckIcon className="bg-[#54ca92] h-12 w-12 p-2 rounded-full  text-white" />
            }
            title={
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-[#383838] text-lg font-semibold">
                    Order #5490023
                  </h2>
                  <p className="text-sm text-[#9b9b9b] font-medium">
                    has been paid successfully
                  </p>
                </div>
                <div className="mr-2 text-end space-y-2.5">
                  <p className="text-sm text-[#9b9b9b] font-medium">50m ago</p>
                  <div className="flex items-center gap-4">
                    <h2 className="text-[#383838] text-lg font-semibold">
                      $40.49
                    </h2>
                    <p className="bg-[#f5f5f5] px-2 py-1 rounded-xl text-sm font-medium">
                      Cash
                    </p>
                  </div>
                </div>
              </div>
            }
          >
            {<div>Shaifn</div>}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Order #5490024"
            startContent={
              <CheckIcon className="bg-[#54ca92] h-12 w-12 p-2 rounded-full  text-white" />
            }
            title={
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-[#383838] text-lg font-semibold">
                    Order #5490023
                  </h2>
                  <p className="text-sm text-[#9b9b9b] font-medium">
                    has been paid successfully
                  </p>
                </div>
                <div className="mr-2 text-end space-y-2.5">
                  <p className="text-sm text-[#9b9b9b] font-medium">50m ago</p>
                  <div className="flex items-center gap-4">
                    <h2 className="text-[#383838] text-lg font-semibold">
                      $40.49
                    </h2>
                    <p className="bg-[#f5f5f5] px-2 py-1 rounded-xl text-sm font-medium">
                      Cash
                    </p>
                  </div>
                </div>
              </div>
            }
          >
            {<div>Shaifn</div>}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default AlertPage;
AlertPage.getLayout = function getLayout(page: any) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
