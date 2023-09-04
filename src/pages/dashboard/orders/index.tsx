import DashboardLayout from "@/components/Layouts/Dashboard/DashboardLayout";
import { Button, ScrollShadow, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";

const DashboardOrdersPage = () => {
  const [activeFilter, setActiveFilter] = useState(1);
  const OrdersData = [
    {
      orderNumber: "#987601",
      tableNumber: " T5",
      quantity: 2,
      orderTime: "18:45pm",
      totalCost: 2500,
      orderType: "Takeout",
    },
    {
      orderNumber: "#987602",
      tableNumber: " T3",
      quantity: 3,
      orderTime: "19:15pm",
      totalCost: 3400,
      orderType: "Dine-in",
    },
    {
      orderNumber: "#987603",
      tableNumber: " T2",
      quantity: 1,
      orderTime: "20:00am",
      totalCost: 1100,
      orderType: "Delivery",
    },
    {
      orderNumber: "#987604",
      tableNumber: " T6",
      quantity: 4,
      orderTime: "20:30am",
      totalCost: 4800,
      orderType: "Dine-in",
    },
    {
      orderNumber: "#987605",
      tableNumber: " T4",
      quantity: 2,
      orderTime: "21:00pm",
      totalCost: 2200,
      orderType: "Takeout",
    },
    {
      orderNumber: "#987606",
      tableNumber: " T1",
      quantity: 5,
      orderTime: "19:30pm",
      totalCost: 6000,
      orderType: "Dine-in",
    },
    {
      orderNumber: "#987607",
      tableNumber: " T7",
      quantity: 2,
      orderTime: "20:15am",
      totalCost: 2800,
      orderType: "Takeout",
    },
    {
      orderNumber: "#987608",
      tableNumber: " T8",
      quantity: 3,
      orderTime: "21:00pm",
      totalCost: 3600,
      orderType: "Dine-in",
    },
    {
      orderNumber: "#987609",
      tableNumber: " T9",
      quantity: 1,
      orderTime: "21:30pm",
      totalCost: 1300,
      orderType: "Delivery",
    },
    {
      orderNumber: "#987610",
      tableNumber: " T10",
      quantity: 4,
      orderTime: "22:00pm",
      totalCost: 4800,
      orderType: "Dine-in",
    },
  ];

  const orderFoods = [
    {
      foodName: "Spaghetti Carbonara",
      specialInstructions: "Extra cheese",
      price: 12.99,
      quantity: 2,
      totalPrice: 25.98,
      foodImage: "spaghetti.jpg",
    },
    {
      foodName: "Margherita Pizza",
      specialInstructions: "Thin crust",
      price: 10.99,
      quantity: 1,
      totalPrice: 10.99,
      foodImage: "pizza.jpg",
    },
    {
      foodName: "Caesar Salad",
      specialInstructions: "No croutons",
      price: 7.49,
      quantity: 3,
      totalPrice: 22.47,
      foodImage: "salad.jpg",
    },
    {
      foodName: "Grilled Salmon",
      specialInstructions: "Lemon butter sauce",
      price: 18.99,
      quantity: 1,
      totalPrice: 18.99,
      foodImage: "salmon.jpg",
    },
    {
      foodName: "Chocolate Cake",
      specialInstructions: "Extra whipped cream",
      price: 6.99,
      quantity: 2,
      totalPrice: 13.98,
      foodImage: "cake",
    },
  ];
  return (
    <section className="p-5  grid grid-cols-5 gap-5">
      <div className="col-span-3 ">
        {/* filters */}
        <div className="flex gap-5">
          <Button
            onClick={() => setActiveFilter(1)}
            size="sm"
            className={`${
              activeFilter === 1 && "!text-[#ef9336] !bg-[#fef0e1]  "
            } rounded-full text-sm font-semibold text-[#afafaf] bg-[#ebebeb] `}
          >
            On - process
          </Button>
          <Button
            onClick={() => setActiveFilter(2)}
            size="sm"
            className={`${
              activeFilter === 2 && "!text-[#ef9336] !bg-[#fef0e1]  "
            } rounded-full text-sm font-semibold text-[#afafaf] bg-[#ebebeb] `}
          >
            Completed
          </Button>
        </div>

        {/* order card */}
        <div className="mt-5 space-y-5">
          {OrdersData?.map((order) => (
            <div
              key={Math.random()}
              className="flex hover:border border border-transparent bg-white hover:border-[#ee8924] hover:shadow-xl duration-300 ease-in-out transition-all hover:shadow-[#f9f2ea] rounded-2xl py-3 px-5 justify-between"
            >
              <div className="space-y-1">
                <h2 className="text-[#363636] font-bold">
                  Orders: {order.orderNumber}
                </h2>
                <h4 className="font-semibold text-[#363636] text-sm">
                  Table : {order.tableNumber}
                </h4>
                <p className="text-[#9b9b9b] text-sm">Qta : {order.quantity}</p>
              </div>
              <div className="text-end flex flex-col justify-between">
                <h2 className="text-[#8f8f8f] ">{order.orderTime}</h2>
                <div className="flex gap-2 items-center">
                  <h4 className="text-[#333333] font-bold text-lg">
                    ${order.totalCost}
                  </h4>
                  <p className="bg-[#54ca92] text-white px-2.5 rounded-xl py-[4px] text-[13px] font-semibold">
                    {order.orderType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* pay bills card */}
      <div className="col-span-2 bg-white px-5 py-2   sticky top-5 h-[94vh] rounded-2xl">
        <div className="flex justify-between">
          <div>
            <h5 className="text-[#7f7f7f]">Orders ID</h5>
            <h2 className="text-[#333333] font-bold">#907653</h2>
          </div>
          <div className="text-end">
            <h5 className="text-[#7f7f7f]">Table</h5>
            <h2 className="text-[#333333] font-bold">T1</h2>
          </div>
        </div>
        {/* food card */}
        <ScrollShadow
          hideScrollBar
          className="space-y-2 divide-y  overflow-y-scroll no-scrollbar h-[50vh]  mt-3"
        >
          {orderFoods?.map((food) => (
            <div key={Math.random()} className="flex items-center gap-5">
              <div>img</div>
              <div className="w-full">
                <div>
                  <h2 className=" font-semibold">{food.foodName}</h2>
                  <p className="text-sm ">
                    <span className="text-[#afafaf]"> Note:</span>{" "}
                    <span className="text-[#4a4a4a]">
                      {food.specialInstructions}
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-6">
                    <h4 className="font-medium text-[#4a4a4a]">
                      ${food.price}
                    </h4>
                    <p className="text-[#afafaf]">x {food.quantity}</p>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-[#333333]">
                      ${food.totalPrice}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollShadow>
        {/* pay bills */}
        <div className=" pt-3 mt-1 border-t-2  border-[#f78708]">
          <div>
            <div className="flex justify-between items-center">
              <h6 className="text-[#a4a4a4] text-sm">Items(7)</h6>

              <h4 className="font-medium text-[#4a4a4a]">$28.67</h4>
            </div>
            <div className="flex justify-between items-center">
              <h6 className="text-[#a4a4a4] text-sm">Tax (10%)</h6>
              <h4 className="font-medium text-[#4a4a4a]">$2.86</h4>
            </div>
            <div className="flex justify-between pt-2 mt-1 border-t items-center">
              <h6 className="text-[#a4a4a4] text-sm">Total</h6>
              <h2>$31.53</h2>
            </div>
          </div>
          {/* payment method */}
          <div>
            <h2 className="text-xl font-bold text-[#333333]">Payment Method</h2>
            <div className="flex w-full select-none flex-col mt-1">
              <Tabs
                aria-label="Options"
                color="warning"
                variant="solid"
                fullWidth
              >
                <Tab
                  key="cash"
                  title={
                    <div className="flex items-center space-x-4">
                      <BsCashCoin />
                      <span>Cash</span>
                    </div>
                  }
                />
                <Tab
                  key="debitCard"
                  title={
                    <div className="flex items-center space-x-4">
                      <FaRegCreditCard />
                      <span>Debit Card</span>
                    </div>
                  }
                />
                <Tab
                  key="eWallet"
                  title={
                    <div className="flex items-center space-x-4">
                      <IoWallet />
                      <span>E-wallet</span>
                    </div>
                  }
                />
              </Tabs>
            </div>
            <div>
              <Button className="pay-bills-btn w-full  mt-3">
                <span className="text-white font-semibold text-normal">
                  Pay Bills
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardOrdersPage;

DashboardOrdersPage.getLayout = function getLayout(page: any) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
