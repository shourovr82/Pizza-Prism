import React from "react";
import LatestOrder from "./latestOrder";
import StockOut from "./stockOut";

const LatestOrderAndStock = () => {
  return (
    <div className="grid grid-cols-2 gap-5 items-center mt-5">
      <LatestOrder />
      <StockOut />
    </div>
  );
};

export default LatestOrderAndStock;
