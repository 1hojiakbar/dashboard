import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 100,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 120,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 115,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 210,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 260,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 220,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 240,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 100,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 285,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 320,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 344,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 400,
    amt: 2100,
  },
];

const BarChartNoPadding = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      style={{ marginLeft: "-40px" }}
    >
      <BarChart data={data} barSize={12}>
        <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
        <YAxis dataKey={"pv"} />
        <Tooltip />
        <Bar
          dataKey="pv"
          fill="rgba(27, 89, 248, 0.8)"
          radius={[10, 10, 0, 0]}
          background={{ fill: "rgb(242, 247, 255)", radius: [5, 5, 0, 0] }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartNoPadding;
