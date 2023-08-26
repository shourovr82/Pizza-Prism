import DashboardLayout from "@/components/Layouts/Dashboard/DashboardLayout";
import DashboardSettingsLayout from "@/components/Layouts/Dashboard/DashboardSettingsLayout";
import { Tabs, Tab } from "@nextui-org/react";
import { LuEdit3 } from "react-icons/lu";
import { FaPizzaSlice } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
import { GiBowlOfRice } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { GiDrinkMe } from "react-icons/gi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const DashboardSettings = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const allTabs = [
    {
      title: "Pizza",
      icon: <FaPizzaSlice />,
    },
    {
      title: "Burger",
      icon: <PiHamburgerFill />,
    },
    {
      title: "Rice",
      icon: <GiBowlOfRice />,
    },
    {
      title: "Snacks",
      icon: <IoFastFood />,
    },
    {
      title: "Drinks",
      icon: <GiDrinkMe />,
    },
  ];

  const allProducts = [
    { id: "1", title: "American Favorite", price: 4.87, status: "18 Pan" },
    { id: "2", title: "Chicken Mushroom", price: 5.87, status: "9 Pan" },
    { id: "3", title: "Favorite Cheese", price: 6.57, status: "7 Pan" },
    { id: "4", title: "Meat Lovers", price: 6.87, status: "14 Pan" },
    { id: "5", title: "American Favorite", price: 4.87, status: "10 Pan" },
  ];

  return (
    <div className="rounded-2xl shadow-lg  bg-[#ffffff] p-5 sticky top-5 h-[94vh]  overflow-y-scroll no-scrollbar">
      <div>
        <div className="flex w-full   items-center gap-5 ">
          <Tabs aria-label="Options" className="">
            {allTabs?.map((singleTab) => (
              <Tab
                key={Math.random()}
                className="py-4"
                title={
                  <div className="flex  px-2  gap-2   items-center ">
                    {singleTab.icon}
                    <span className="font-medium ">{singleTab.title}</span>
                  </div>
                }
              />
            ))}
          </Tabs>
          <div>
            <Button
              size="sm"
              onPress={onOpen}
              className="text-[#ec7a07] font-medium border border-[#ec7a07] px-3 py-[18px] rounded-full   border-dashed flex items-center gap-2 hover:bg-[#ec7a07] bg-white  hover:text-white"
            >
              <span>
                <LuEdit3 />
              </span>
              Category
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Modal Title
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor
                        cupidatat consequat elit dolor adipisicing. Mollit dolor
                        eiusmod sunt ex incididunt cillum quis. Velit duis sit
                        officia eiusmod Lorem aliqua enim laboris do dolor
                        eiusmod. Et mollit incididunt nisi consectetur esse
                        laborum eiusmod pariatur proident Lorem eiusmod et.
                        Culpa deserunt nostrud ad veniam.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {allProducts.map((singleProduct) => (
          <div className="border" key={Math.random()}>
            Shafin
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSettings;

DashboardSettings.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      <DashboardSettingsLayout>{page}</DashboardSettingsLayout>
    </DashboardLayout>
  );
};
