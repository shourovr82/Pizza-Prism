import { BiUpArrowAlt } from "react-icons/bi";
import revenue from "../../Assets/dashboard/card/r.png";
import order from "../../Assets/dashboard/card/o.png";
import dining from "../../Assets/dashboard/card/d.png";
import takeaway from "../../Assets/dashboard/card/t.png";
import Image from "next/image";

const CardSection = () => {
  const data = [
    {
      title: "Revenue",
      value: "$1980.00",
      ratio: 10,
      icon: revenue,
    },
    {
      title: "Orders",
      value: 107,
      ratio: 10,
      icon: order,
    },
    {
      title: "Dine In",
      value: 26,
      ratio: 20,
      icon: dining,
    },
    {
      title: "Take away",
      value: 25,
      ratio: 10,
      icon: takeaway,
    },
  ];

  return (
    <div className="mt-20">
      <div className="grid grid-cols-4 gap-3 justify-center items-center">
        {data.map((card) => (
          <div
            className="bg-white  shadow-gray-500 p-8 rounded-3xl"
            key={Math.random()}
          >
            <div className="flex items-center justify-between ">
              <h1 className="font-extrabold text-gray-700 text-2xl">
                {card.title}
              </h1>
              <div>
                <p className="text-sm text-red-500 flex items-center gap-1">
                  {card.ratio}%{" "}
                  <span>
                    <BiUpArrowAlt />
                  </span>{" "}
                </p>
                <p className="text-red-500 text-[10px]">Last Day</p>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-2">
              <Image
                src={card.icon}
                width={30}
                height={30}
                alt="Icon"
                className="w-[50px] h-[50px]"
              />
              <p className="text-3xl font-bold mt-2 text-gray-600">
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
