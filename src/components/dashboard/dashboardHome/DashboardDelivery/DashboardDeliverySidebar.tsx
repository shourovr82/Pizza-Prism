import { BiHistory, BiMap } from "react-icons/bi";

const DashboardDeliverySidebar = () => {
  return (
    <section className="rounded-3xl p-2.5 bg-[#545454]">
      <div className="rounded-3xl p-3 bg-[#6d6d6d] ">
        <h2 className="uppercase text-xl font-bold">Delivery Address</h2>
        <p className="flex items-center gap-2">
          <span>
            <BiMap />
          </span>
          Po. 1472, Street No. 52, West New York
        </p>
        <p className="flex items-center gap-2">
          <span>
            <BiHistory />
          </span>
          20 min
        </p>
      </div>
      <div className="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam
        fugiat aut nihil atque libero laborum itaque vero quod corporis
        necessitatibus perspiciatis deleniti earum, omnis exercitationem sunt
        quia illum dolor. lorem500
      </div>
    </section>
  );
};

export default DashboardDeliverySidebar;
