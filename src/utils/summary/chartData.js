import PieChartLabel from "../../charts/Pie";
import SecondPieChartLabel from "../../charts/SecondPie.jsx";

const chartData = [
  {
    id: 1,
    title: "Customers",
    count: "4,209",
    percentage: [
      { id: 1, percent: "62%", title: "New", color: "rgb(73, 122, 249)" },
      {
        id: 2,
        percent: "23%",
        title: "Returning",
        color: "rgb(120, 157, 251)",
      },
      { id: 3, percent: "13%", title: "Inactive", color: "rgb(229, 229, 229)" },
    ],
    chart: PieChartLabel,
  },
  {
    id: 2,
    title: "Orders",
    count: "1,302",
    percentage: [
      { id: 1, percent: "40%", title: "Pre Paid", color: "rgb(43, 101, 248)" },
      {
        id: 2,
        percent: "60%",
        title: "Post Paid",
        color: "rgb(235, 235, 235)",
      },
    ],
    chart: SecondPieChartLabel,
  },
];

export default chartData;
