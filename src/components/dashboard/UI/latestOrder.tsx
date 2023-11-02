import { BsArrowRight } from "react-icons/bs";
import pizza from "@/assets/dashboard/products/pizza.png";

const LatestOrder = () => {
  const data = [
    {
      orderId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      time: "10.05 AM",
      price: "$10.15",
      option: "Dine-in",
      qty: 1,
    },
    {
      orderId: "#32541",
      itemName: "Chicken Mushroom",
      img: pizza,
      time: "10.05 AM",
      price: "$16.15",
      option: "Take-away",
      qty: 5,
    },
    {
      orderId: "#45178",
      itemName: "Chicken Mushroom",
      img: pizza,
      time: "0.05 AM",
      price: "$80.15",
      option: "Dine-in",
      qty: 6,
    },
    {
      orderId: "#54214",
      itemName: "Chicken Mushroom",
      img: pizza,
      time: "10.05 AM",
      price: "$15.15",
      option: "Tale-away",
      qty: 3,
    },
    {
      orderId: "#45321",
      itemName: "Chicken Mushroom",
      img: pizza,
      time: "02.00 AM",
      price: "$20.15",
      option: "Dine-in",
      qty: 2,
    },
    {
      orderId: "#65245",
      itemName: "Chicken Mushroom",
      img: pizza,
      time: "01.05 AM",
      price: "$40.15",
      option: "Dine-in",
      qty: 1,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-gray-600 font-bold">Latest Order</h1>
        <p className="text-[#ed7f10] flex items-center gap-2">
          view all{" "}
          <span>
            {" "}
            <BsArrowRight />
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-5 mt-8">
        {data.map((order) => (
          <div
            className="flex justify-between items-center"
            key={Math.random()}
          >
            <div className="flex flex-col items-start justify-start">
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-gray-700 text-2xl">
                  {order.orderId}
                </h1>
                <p className="text-sm text-red-300">{order.itemName}</p>
              </div>
              <div>
                <p className="text-gray-300 text-lg">Qty:{order.qty}</p>
              </div>
            </div>

            <div className="flex flex-col items-end ">
              <div className="flex flex-col items-center gap-2">
                <p className="text-red-300 text-md">{order.time}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xl text-gray-800 font-bold">{order.price}</p>
                <button className="bg-red-400 px-4 py-1 rounded-full text-white">
                  {order.option}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestOrder;
