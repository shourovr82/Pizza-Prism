/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import photo from "@/Assets/Homepage/isolated-pizza-with-mushrooms-olives_219193-8149.jpg";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "@nextui-org/react";

const DiscoverMenuSection = () => {
  const menus = [
    "Pizza",
    "Calzones",
    "Wraps",
    "Salads",
    "Sides",
    "Pasta Dinners",
    "Dinners",
    "Grill & Seafood",
    "Ice Cream",
    "Kids",
  ];
  return (
    <div className="max-md:mt-10 py-20 responsive-section">
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-[#f9a246] font-semibold uppercase">Our menu</h3>
          <h2 className="text-3xl font-bold">Discover Our Menu</h2>
        </div>
        <div className="flex flex-wrap  mt-10 gap-5 max-md:w-[75%] xl:w-[60%] mx-auto justify-center">
          {menus?.map((menuItem) => (
            <button
              key={Math.random()}
              className="text-[#f78308] px-5 border-2 border-[#f78308] hover:bg-[#f78308] hover:text-white duration-600 animate-appearance-in ease-in-out transition-all py-1.5 rounded-full"
            >
              {menuItem}
            </button>
          ))}
        </div>
        {/* items */}
        <div
          className="grid mt-14 max-md:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 font-sans
"
        >
          {["1", "2", "3", "4"].map((item) => (
            <div
              key={Math.random()}
              className=" shadow-xl rounded-xl py-5  p-2 text-center"
            >
              <div className="flex justify-center">
                <Image src={photo} width={200} height={200} alt="" />
              </div>

              <div className="space-y-3">
                <h1 className="text-[#f78914] text-2xl  font-medium">
                  Pepperoni Pizza
                </h1>
                <p className="text-xs px-5 text-[#97948f]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, minus? Non maiores odit ea corrupti
                </p>
              </div>

              <div className="flex mt-3 justify-evenly text-xs">
                <p className="bg-black rounded-full px-2.5 text-white cursor-pointer duration-300 transition-all ease-in-out py-1">
                  30cm
                </p>
                <p className="hover:bg-black rounded-full px-2.5 hover:text-white cursor-pointer duration-300 transition-all ease-in-out py-1">
                  40cm
                </p>
                <p className="hover:bg-black rounded-full px-2.5 hover:text-white cursor-pointer duration-300 transition-all ease-in-out py-1">
                  50cm
                </p>
              </div>
              {/* price , cart order */}
              <div className="space-y-3 mt-3">
                <div className="flex items-center gap-3  justify-around">
                  <h2 className="text-2xl text-[#f78d1e] font-YsabeauInfant font-semibold">
                    $32
                  </h2>
                  <div className="flex  items-center gap-3">
                    <button className="bg-[#f8b713] p-1 rounded-full text-white ">
                      <HiMinus />
                    </button>
                    <span className="font-semibold">1</span>
                    <button className="bg-[#f8b713] p-1 rounded-full text-white">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                <div className="pt-2">
                  <Button className="neon-loader w-[90%] mx-auto ">
                    <span className="text-white font-semibold text-normal">
                      Order Now
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Button className="neon-view-all w-[9rem]">
            <span className="text-white font-semibold text-normal">
              View All
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMenuSection;
