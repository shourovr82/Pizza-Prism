"use client";

import { LuFileEdit } from "react-icons/lu";
import { FaPizzaSlice } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
import { GiBowlOfRice } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { GiDrinkMe } from "react-icons/gi";
import pizzaPhoto from "@/Assets/dashboard/settings/image-removebg-preview.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { ReactNode, useState } from "react";

const DashboardSettings = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  type ITab = {
    title: string;
    id: string;
    icon: ReactNode;
  };
  const allTabs = [
    { id: "1", title: "Pizza", icon: <FaPizzaSlice size={20} /> },
    { id: "2", title: "Burger", icon: <PiHamburgerFill size={20} /> },
    { id: "3", title: "Rice", icon: <GiBowlOfRice size={20} /> },
    { id: "4", title: "Snacks", icon: <IoFastFood size={20} /> },
    { id: "5", title: "Drinks", icon: <GiDrinkMe size={20} /> },
  ];

  const allProducts = [
    {
      id: "1",
      image: pizzaPhoto,
      title: "American Favorite",
      price: 4.87,
      status: "18 Pan",
    },
    {
      id: "2",
      image: pizzaPhoto,
      title: "Chicken Mushroom",
      price: 5.87,
      status: "9 Pan",
    },
    {
      id: "3",
      image: pizzaPhoto,
      title: "Favorite Cheese",
      price: 6.57,
      status: "7 Pan",
    },
    {
      id: "4",
      image: pizzaPhoto,
      title: "Meat Lovers",
      price: 6.87,
      status: "14 Pan",
    },
    {
      id: "5",
      image: pizzaPhoto,
      title: "American Favorite",
      price: 4.87,
      status: "10 Pan",
    },
  ];
  const [activeTab, setActive] = useState("1");

  const handleActive = (id: string) => {
    setActive(id);
  };

  return (
    <div className="rounded-2xl shadow-lg  bg-[#ffffff] p-5 sticky top-5 h-[94vh]  ">
      <div>
        <div className="flex w-full   items-center gap-5  ">
          <div className="flex flex-wrap gap-4  ">
            {allTabs?.map((singleTab: ITab) => (
              <div key={Math.random()} className="">
                <Button
                  onClick={() => handleActive(singleTab.id)}
                  className={`${
                    activeTab === singleTab.id
                      ? "bg-[#fef0e1]   duration-500 transition-all text-[#ec7905]"
                      : "bg-[#ebebeb] text-[#ababab]"
                  } flex  px-4 py-2 rounded-2xl  gap-2   items-center `}
                >
                  {singleTab.icon}
                  <span className="font-medium ">{singleTab.title}</span>
                </Button>
              </div>
            ))}{" "}
            <div>
              <Button
                size="sm"
                onPress={onOpen}
                className="text-[#ec7a07] font-medium border border-[#ec7a07] px-3 py-[18px] rounded-full   border-dashed flex items-center gap-2 hover:bg-[#ec7a07] bg-white  hover:text-white"
              >
                <span>
                  <LuFileEdit />
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam pulvinar risus non risus hendrerit
                          venenatis. Pellentesque sit amet hendrerit risus, sed
                          porttitor quam.
                        </p>
                        <p>
                          Magna exercitation reprehenderit magna aute tempor
                          cupidatat consequat elit dolor adipisicing. Mollit
                          dolor eiusmod sunt ex incididunt cillum quis. Velit
                          duis sit officia eiusmod Lorem aliqua enim laboris do
                          dolor eiusmod. Et mollit incididunt nisi consectetur
                          esse laborum eiusmod pariatur proident Lorem eiusmod
                          et. Culpa deserunt nostrud ad veniam.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
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
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 overflow-y-scroll no-scrollbar h-[80vh]   rounded-2xl overflow-hidden">
        <div className="rounded-3xl  space-y-2 flex items-center justify-center ">
          <button className="w-full h-full border border-dashed border-[#ec7905]  hover:bg-[#ef8b28] duration-300 ease-in-out transition-all group rounded-2xl ">
            <p className="flex  flex-col justify-center items-center gap-y-4 group-hover:text-white text-[#ef8b28]">
              <HiPlus size={25} />
              <span className="font-semibold">Add New Dish</span>
            </p>
          </button>
        </div>
        {allProducts.map((singleProduct) => (
          <div className="border rounded-3xl p-5 space-y-2" key={Math.random()}>
            <div className="flex justify-center">
              <Image
                src={singleProduct.image}
                width={120}
                height={120}
                alt=""
              />
            </div>
            <div className="text-center">
              <h1 className="font-bold text-xl">{singleProduct.title}</h1>
              <h4 className="text-[#ec7a07] font-semibold text-xl">
                ${singleProduct.price}
              </h4>
              <h5 className="text-md font-semibold">
                {singleProduct.status}{" "}
                <span className="text-[#a5a5a5]">Available</span>
              </h5>
            </div>
            <div className="flex py-2 justify-center">
              <Button
                className="text-[#979797] bg-[#f5f5f5] px-6 font-semibold"
                size="sm"
              >
                <span>
                  <AiTwotoneEdit />
                </span>
                Edit Dishes
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSettings;
