import React from "react";
import Lottie from "lottie-react";
import reader from "../../../Assets/dashboard/order/animation_llo3927m.json";
import Countdown from "react-countdown";
import DeliveryStage from "./deliveryStage";

const PackingStage = () => {
  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <DeliveryStage />;
    } else {
      // Render a countdown
      return (
        <div className="flex flex-col justify-center items-center p-20 ">
          <h1 className="text-gray-700 text-3xl font-bold">
            Your Food is Packing... Order Id # 54123
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

export default PackingStage;
