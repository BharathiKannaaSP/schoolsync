"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinanceChart = () => {
  const data = [
    {
      name: "Jan",
      income: 30000,
      expenses: 12000,
    },
    {
      name: "Feb",
      income: 25000,
      expenses: 14000,
    },
    {
      name: "Mar",
      income: 18000,
      expenses: 8000,
    },
    {
      name: "Apr",
      income: 22000,
      expenses: 10000,
    },
    {
      name: "May",
      income: 17000,
      expenses: 9000,
    },
    {
      name: "Jun",
      income: 21000,
      expenses: 11000,
    },
    {
      name: "Jul",
      income: 29000,
      expenses: 13000,
    },
    {
      name: "Aug",
      income: 34000,
      expenses: 15000,
    },
    {
      name: "Sep",
      income: 26000,
      expenses: 12000,
    },
    {
      name: "Oct",
      income: 28000,
      expenses: 14000,
    },
    {
      name: "Nov",
      income: 32000,
      expenses: 36000,
    },
    {
      name: "Dec",
      income: 39000,
      expenses: 20000,
    },
  ];

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex items-center justify-between ">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src={"/moreDark.png"} width={20} height={20} alt="more" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "gray" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "gray" }}
            tickLine={false}
            tickMargin={10}
          />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "#eee" }}
          />
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#82ca9d"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#ff7f7fa5"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
