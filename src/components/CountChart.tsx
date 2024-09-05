"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Total",
        count: 2334,
        fill: "white",
      },
  {
    name: "Girls",
    count: 1102,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 1232,
    fill: "#C3EBFB",
  },

];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className="flex items-center justify-between ">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src={"/moreDark.png"} width={20} height={20} alt="more" />
      </div>
      {/* Chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={40}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src={"/maleFemale.png"} alt="male-female" width={45} height={45} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>
      {/* Bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-blueSky rounded-full" />
          <h1 className="font-bold text-sm">1,232</h1>
          <h2 className="font-medium text-xs">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow rounded-full" />
          <h1 className="font-bold text-sm">1,102</h1>
          <h2 className="font-medium text-xs">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
