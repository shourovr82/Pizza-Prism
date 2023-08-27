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
  Legend,
} from "recharts";

const data = [
  {
    name: "11.00am",
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "12.00am",
    uv: 529,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "01.00pm",
    uv: 629,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "02.00pm",
    uv: 900,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "03.00pm",
    uv: 570,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "04.00pm",
    uv: 415,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "05.00pm",
    uv: 190,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "06.00pm",
    uv: 360,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "07.00pm",
    uv: 100,
    pv: 4300,
    amt: 2100,
  },
];
const ReportSalesSummaryCharts = () => {
  const [isClient, setIsClient] = useState(false);

  const customToolTip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black rounded-3xl p-2">
          <p className="text-white">{payload[0].value}</p>
        </div>
      );
    }
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
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

  return (
    <div style={{ width: "100%" }} className="bg-white mt-6 rounded-3xl p-5">
      {isClient && (
        <ResponsiveContainer width="100%" height={300}>
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

export default ReportSalesSummaryCharts;
