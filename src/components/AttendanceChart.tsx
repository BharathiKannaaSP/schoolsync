"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = () => {
  const data = [
    {
      name: "Mon",
      present: 60,
      absent: 5,
    },
    {
      name: "Tue",
      present: 62,
      absent: 3,
    },
    {
      name: "Wed",
      present: 65,
      absent: 0,
    },
    {
      name: "Thu",
      present: 55,
      absent: 10,
    },
    {
      name: "Fri",
      present: 61,
      absent: 4,
    },
  ];

  return (
    <div className="bg-white rounded-lg h-full p-4">
      <div className="flex items-center justify-between ">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src={"/moreDark.png"} width={20} height={20} alt="more" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill: "gray"}} tickLine={false}/>
          <YAxis axisLine={false} tickLine={false} tick={{fill: "gray"}} />
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"#eee"}}/>
          <Legend
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#C3EBFB"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
