import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  {
    value: 62,
    color: "#1B59F8",
  },
  { value: 13, color: "#789DFB" },
  { value: 23, color: "#E5E5E5" },
];

const size = {
  width: 400,
  height: 200,
};

function PieArcLabel() {
  return (
    <PieChart
      series={[
        {
          data,
          arcLabelMinAngle: 45,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
        },
      ]}
      {...size}
    />
  );
}

export default PieArcLabel;
