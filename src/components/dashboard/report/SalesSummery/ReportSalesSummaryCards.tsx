import { BiUpArrowAlt } from "react-icons/bi";
import { BsArrowUpRight, BsCartDashFill } from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";

type ICard = {
  title: string;
  value: string | number;
  ratio: number;
  icon: JSX.Element;
};

const ReportSalesSummaryCards = () => {
  const data: ICard[] = [
    {
      title: "Revenue",
      value: "$14.329",
      ratio: 10,
      icon: (
        <span className="rounded-full p-2 bg-[#ef9234]">
          <BsArrowUpRight size={20} className="text-white" />
        </span>
      ),
    },
    {
      title: "Orders",
      value: 2.506,
      ratio: 20,
      icon: (
        <span className="rounded-full p-2 bg-[#54ca92]">
          <BsCartDashFill size={20} className="text-white" />
        </span>
      ),
    },

    {
      title: "Average",
      value: "$2.047",
      ratio: 10,
      icon: (
        <span className="rounded-full p-2 bg-[#ffc245]">
          <IoFastFoodSharp size={20} className="text-white" />
        </span>
      ),
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3  gap-3 lg:gap-6 justify-center items-center">
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
    </>
  );
};

export default ReportSalesSummaryCards;
