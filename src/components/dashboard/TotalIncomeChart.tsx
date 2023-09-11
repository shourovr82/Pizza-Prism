import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Label } from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 567,
  },
  {
    name: "Group C",
    value: 398,
  },
  {
    name: "Group D",
    value: 800,
  },
  {
    name: "Group E",
    value: 308,
  },
  {
    name: "Group F",
    value: 400,
  },
];
const data03 = [
  {
    name: "Group A",
    value: 200,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 350,
  },
  {
    name: "Group D",
    value: 700,
  },
  {
    name: "Group E",
    value: 378,
  },
  {
    name: "Group F",
    value: 189,
  },
];

const TotalIncomeChart = () => {
  const [isClient, setIsClient] = useState(false);
  const COLORS = ["#54ca92", "#ec7905", "#ff5733"];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg shadow-[#7acae913]">
      <div>
        <h2 className="text-2xl text-[#333333] font-semibold ">Total Income</h2>
      </div>
      <div>
        {isClient && (
          <PieChart width={400} height={350}>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={50}
              fill={COLORS[0]}
            >
              {/* Custom label */}
              <Label
                content={() => (
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={20}
                    fontWeight={700}
                    fill="black"
                  >
                    $500
                  </text>
                )}
              />
            </Pie>
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill={COLORS[1]} // Use the second color from COLORS
            />
            <Pie
              data={data03} // Add your data for the third Pie here
              dataKey="value"
              // nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={110}
              fill={COLORS[2]} // Use the third color from COLORS
              label
            />
            <Tooltip />
          </PieChart>
        )}
      </div>
      <div className="flex justify-around">
        <div className="flex items-center gap-2">
          <span className="bg-[#eb4335] p-2 w-1 h-1 rounded-full" />
          <p className="font-medium text-[#404040]">Food</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#ec7905] p-2 w-1 h-1 rounded-full" />
          <p className="font-medium text-[#404040]">Drink</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#54ca92] p-2 w-1 h-1 rounded-full" />
          <p className="font-medium text-[#404040]">Others</p>
        </div>
      </div>
    </div>
  );
};

export default TotalIncomeChart;
