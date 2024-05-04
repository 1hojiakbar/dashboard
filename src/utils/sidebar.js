// sidebar item svg
import Summary from "../assets/icons/summary.svg?react";
import Payment from "../assets/icons/payment.svg?react";
import Cutomers from "../assets/icons/customers.svg?react";
import Orders from "../assets/icons/orders.svg?react";

// support svg
import Setting from "../assets/icons/setting.svg?react";
import Performance from "../assets/icons/performance.svg?react";

// Generics
import Generic from "../view/Generic";

// ------------------------------

// sidebar items data
const sidebar = [
  {
    id: 1,
    path: "/summary",
    title: "Summary",
    icon: Summary,
    element: Generic,
  },
  {
    id: 2,
    path: "/payment",
    title: "Payment",
    icon: Payment,
    element: Generic,
  },
  {
    id: 3,
    path: "/customers",
    title: "Customers",
    icon: Cutomers,
    element: Generic,
  },

  { id: 4, path: "/orders", title: "Orders", icon: Orders, element: Generic },
];

export default sidebar;

// support items data
export const sidebarSupportData = [
  {
    id: 1,
    path: "/performance",
    title: "Compare Performance",
    icon: Performance,
  },
  {
    id: 2,
    path: "/setting",
    title: "Setting",
    icon: Setting,
  },
];
