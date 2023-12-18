import AddOrderTabs from "@/components/dashboard/orders/AddOrderTabs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add-Order | Dashboard",
  description: "shourovr82 | pizza-prism | Shafinur Islam",
};

const AddOrder = () => (
  <section className="">
    <div className="border-b py-2 px-5 bg-white  w-full">
      <h2 className="font-medium">Add Order</h2>
    </div>
    {/* tabs */}
    <div>
      <AddOrderTabs />
    </div>
  </section>
);

export default AddOrder;
