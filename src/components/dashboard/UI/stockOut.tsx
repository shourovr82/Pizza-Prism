import { BsArrowRight } from "react-icons/bs";
import pizza from "@/Assets/dashboard/products/pizza.png";
import Image from "next/image";

const StockOut = () => {
  const data = [
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "tomorrow",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
    {
      productId: "#41235",
      itemName: "Chicken Mushroom",
      img: pizza,
      available: "10.10 AM",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-gray-600 font-bold">Out Of Stock</h1>
        <p className="text-red-500 flex items-center gap-2">
          view all{" "}
          <span>
            {" "}
            <BsArrowRight />
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 items-center mt-10">
        {data.map((stock) => (
          <div key={Math.random()}>
            <div className="flex items-center gap-3">
              <Image
                src={pizza}
                width={50}
                height={50}
                alt="Picture of the author"
              />

              <div>
                <p>{stock.itemName}</p>
                <p>
                  {" "}
                  <span className="text-gray-400">available:</span>{" "}
                  <span className="text-red-400">{stock.available}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockOut;
