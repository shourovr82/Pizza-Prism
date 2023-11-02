import { BiUpArrowAlt } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
import revenue from "../../Assets/dashboard/card/r.png";
import order from "../../Assets/dashboard/card/o.png";
import dining from "../../Assets/dashboard/card/d.png";
import takeaway from "../../Assets/dashboard/card/t.png";
import Image from "next/image";
import { BsArrowUpRight, BsCartDashFill } from "react-icons/bs";
import { IoFastFoodOutline, IoFastFoodSharp } from "react-icons/io5";

const CardSection = () => {
  const data = [
    {
      title: "Revenue",
      value: "$1980.00",
      ratio: 10,
      icon: (
        <span className="rounded-full p-2 bg-[#ef9234]">
          <BsArrowUpRight size={20} className="text-white" />
        </span>
      ),
    },
    {
      title: "Orders",
      value: 107,
      ratio: 10,
      icon: (
        <span className="rounded-full p-2 bg-[#54ca92]">
          <BsCartDashFill size={20} className="text-white" />
        </span>
      ),
    },
    {
      title: "Dine In",
      value: 26,
      ratio: 20,
      icon: (
        <span className="rounded-full p-2 bg-[#eb4335]">
          <ImSpoonKnife size={20} className="text-white" />
        </span>
      ),
    },
    {
      title: "Take away",
      value: 25,
      ratio: 10,
      icon: (
        <span className="rounded-full p-2 bg-[#ffc245]">
          <IoFastFoodSharp size={20} className="text-white" />
        </span>
      ),
    },
  ];

  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 justify-center items-center">
        {data.map((card) => (
          <div
            className="bg-white  shadow-gray-500 p-5 rounded-[30px]"
            key={Math.random()}
          >
            <div className="flex items-start justify-between ">
              <h1 className="font-bold   text-[#333333] text-2xl">
                {card.title}
              </h1>
              <div>
                <p className="text-[15px] text-red-500 flex font-bold  items-center gap-1">
                  {card.ratio}%{" "}
                  <span>
                    <BiUpArrowAlt />
                  </span>{" "}
                </p>
                <p className="text-red-500 font-bold text-[10px]">Last Day</p>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-2">
              {card.icon}
              <p className="text-2xl xl:text-3xl text-[#333333] font-bold ">
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
