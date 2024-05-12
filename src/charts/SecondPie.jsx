import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: "A", value: 60, fill: "rgb(120, 157, 251)" },
  { name: "B", value: 40, fill: "rgb(73, 122, 249)" },
];

const ChartPie = () => (
  <>
    <PieChart width={150} height={140}>
      <Pie
        dataKey="value"
        innerRadius={30}
        paddingAngle={5}
        startAngle={-270}
        endAngle={140}
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
