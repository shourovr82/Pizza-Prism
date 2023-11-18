import React from "react";
import LatestOrder from "./latestOrder";
import StockOut from "./stockOut";

const LatestOrderAndStock = () => {
  return (
    <div className=" space-y-5 items-center mt-5">
      <LatestOrder />
      <StockOut />
    </div>
  );
};

export default LatestOrderAndStock;
