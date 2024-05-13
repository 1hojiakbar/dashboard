import PieChartLabel from "../../charts/Pie";

const chartData = [
  {
    id: 1,
    title: "Customers",
    count: "4,209",
    percentage: [
      { id: 1, percent: "62%", title: "New", color: "rgb(73, 122, 249)" },
      {
        id: 2,
        percent: "13%",
        title: "Returning",
        color: "rgb(120, 157, 251)",
      },
      { id: 3, percent: "23%", title: "Inactive", color: "rgb(229, 229, 229)" },
    ],
    chart: PieChartLabel,
  },
];

export default chartData;
