import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: "A", value: 23, fill: "rgb(120, 157, 251)" },
  { name: "B", value: 62, fill: "rgb(73, 122, 249)" },
  { name: "C", value: 13, fill: "rgb(190, 190, 190)" },
];

const ChartPie = () => (
  <>
    <PieChart width={150} height={150}>
      <Pie
        dataKey="value"
        innerRadius={30}
        paddingAngle={4}
        startAngle={180}
        endAngle={-180}
        cornerRadius={5}
        isAnimationActive={true}
        data={data}
        rotate={100}
        outerRadius={70}
        style={{ outline: "none" }}
      />
      <Tooltip />
    </PieChart>
  </>
);

export default ChartPie;
