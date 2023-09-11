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
    uv: 150,
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
    uv: 45,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "11.00 PM",
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
  const CustomTick = ({ x, y, payload }: any) => {
    const paddingLeft = payload.index === 0 ? 20 : 0; // Add padding only for the first tick
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="start"
          fill="#949494"
          fontSize={13}
          fontWeight={600}
          style={{ paddingLeft }}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg shadow-[#7acae913]">
      {isClient && (
        <ResponsiveContainer width="100%" height={408}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F78908" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F78908" stopOpacity={0} />
                {/* Add border to the linear gradient */}
                <animate
                  attributeName="stroke-width"
                  from="0"
                  to="5"
                  dur="0.5s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>

            <XAxis strokeWidth={0} dataKey="name" tick={CustomTick} />

            <YAxis
              dataKey="uv"
              strokeWidth={0}
              tick={{ fontSize: 13, fontWeight: 600, fill: "#949494" }}
              domain={["dataMin", "dataMax"]}
            />
            <CartesianGrid
              strokeDasharray="5 5"
              horizontal={true}
              vertical={false}
            />
            <Tooltip content={customToolTip} cursor={false} />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#F78908"
              fillOpacity={0.8}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default OrderChart;
