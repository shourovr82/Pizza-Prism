import React from "react";
import Lottie from "lottie-react";
import reader from "../../../Assets/dashboard/order/animation_llo3arqd.json";
import Countdown from "react-countdown";
import PackingStage from "./packingStage";

const DeliveryStage = () => {
  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <div>Thanks For your order...</div>;
    } else {
      // Render a countdown
      return (
        <div className="flex flex-col justify-center items-center p-20 ">
          <h1 className="text-gray-700 text-3xl font-bold">
            Your Food is on the way... Order Id # 54123
          </h1>
          <Lottie className="h-60" animationData={reader} loop={true} />
          {hours}:{minutes}:{seconds}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="text-4xl text-red-500 font-bold">
        <Countdown date={Date.now() + 5000} renderer={renderer} />
      </div>
    </div>
  );
};

export default DeliveryStage;
