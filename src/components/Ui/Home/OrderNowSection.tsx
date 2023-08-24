import deliveryBoy from "@/Assets/Homepage/deliveryBoy.png";
import Image from "next/image";

const OrderNowSection = () => {
  return (
    <section className="responsive-section py-10 flex flex-col-reverse md:grid  md:grid-cols-2 justify-center  items-center">
      <div className="space-y-5 max-md:flex flex-col items-center max-md:text-center ">
        <div className="space-y-2">
          <h4 className="text-2xl font-bold text-[#f7840b]">
            30 minutes, or pizza for free
          </h4>
          <p className="w-[80%] text-sm font-medium">
            If we {`can't`} deliver a pizza to you within 30 minutes we will
            gave away on pizza from your order for free
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-2xl font-bold text-[#f7840b]">
            Delivery is valid for orders <br /> starting from $15
          </h4>
          <p className="w-[80%] text-sm font-medium">
            We can deliver your pizza, to in provided that the cost of the
            ordered pizzas at least $15
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-2xl font-bold text-[#f7840b]">
            $1000 maximum amount <br /> when paying in cash
          </h4>
          <p className="w-[80%] text-sm font-medium">
            We will be able to accept your order, provided that when paying in
            cash the amount will not exceed $1000
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image className="deliveryBoy" src={deliveryBoy} alt="" />
      </div>
    </section>
  );
};

export default OrderNowSection;
