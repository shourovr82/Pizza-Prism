import { useEffect, useState } from "react";
import {
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "11.00 AM",
    uv: 15,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "12.00 PM",
    uv: 20,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "01.00 PM",
    uv: 60,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "02.00 PM",
    uv: 100,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "03.00 PM",
    uv: 80,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "04.00 PM",
    uv: 55,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "05.00 PM",
    uv: 200,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "06.00 PM",
    uv: 138,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "07.00 PM",
    uv: 91,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "08.00 PM",
    uv: 48,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "09.00 PM",
    uv: 56,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10.00 PM",
    uv: 15,
    pv: 4300,
    amt: 2100,
  },
];

const customToolTip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black rounded-3xl p-2">
        <p className="text-white">{payload[0].value}</p>
      </div>
    );
  }
};

// For client side Rendering
const OrderChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={{ width: "100%" }} className="bg-white mt-6 rounded-3xl p-5">
      {isClient && (
        // <ResponsiveContainer width="100%" height={300}>
        //   <AreaChart data={data}>
        //     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        //       <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
        //       <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        //     </linearGradient>
        //     <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        //       <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
        //       <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        //     </linearGradient>
        //     <Tooltip />
        //     <XAxis dataKey="name" angle={0} textAnchor="middle" />
        //     <YAxis />
        //     <Line
        //       type="monotone"
        //       dataKey="pv"
        //       stroke="#8884d8"
        //       strokeWidth={2}
        //     />
        //   </AreaChart>
        // </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F78908" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F78908" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip content={customToolTip} />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#F78908"
              fillOpacity={5}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default OrderChart;
